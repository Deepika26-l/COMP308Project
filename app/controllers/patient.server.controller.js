//Load the mongoose models
const mongoose = require('mongoose');

//Load the Patient Model
const Patient = mongoose.model('Patient');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const jwtExpirySeconds = 300;
const jwtKey =config.secretKey;

//Create a new controller method that renders the signin page
exports.renderPatientSignin = function(req, res, next) {

	// Use the 'response' object to render the signin page
	res.render('patientSignIn');
	
};

//Create a new controller method that renders the signup page
exports.renderSignup = function(req, res, next) {
	
	// Use the 'response' object to render the signup page
	res.render('patientSignUp', {
		description: '***'
	});	
};

//Create a new controller method that saves new patient info
exports.signup = function(req, res, next) {
	
	//Model used here
	const patient = new Patient(req.body);	//Instantiating a patient Object
	console.log(req.body)
	
	// Try saving the new patient document
	patient.save((err) => {	//callback function
	
		if (err) {
			// Use the error handling method to get the error message
			const message = getErrorMessage(err);
	
			// Redirect the admin back to the signup page
			res.render('patientSignUp',{
				description: 'Errors occured! Kindly SignUp again!'
			});
		}

		// Thank the admin for signing up
		return res.render('patientSignUp', {			
			description: 'You are successfully registered!'
		});
		
	});	 
};

//Create a new controller method to authenticate patient
exports.authenticate = function(req, res, next) {
	
	//Get credentials from request body
	//destructuring
	const { email, password } = req.body;
	console.log(email)
	
	//find the patient with given email using static method findOne
	Patient.findOne({email: email}, (err, patient) => {
		//callback (), handles error and returns patient object
			if (err) {
				return next(err);
			} else {
			console.log(patient);

			//compare passwords	
			if(bcrypt.compareSync(password, patient.password)) {
				//Create a new token with the patient id in the payload
  				//and which expires 300 seconds after issue
				//patient._id is payload of token
				  const token = jwt.sign({ id: patient._id }, jwtKey, 
					{algorithm: 'HS256', expiresIn: jwtExpirySeconds });
				console.log('token:', token)
				// set the cookie as the token string, with a similar max age as the token
				// here, the max age is in milliseconds
				res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000,httpOnly: true});
			
				res.render('patientPage',{
					description: '***' 
				});				
			} else {
				res.json({status:"error", message: "Invalid email/password!!!",
				data:null});
			}			
		}		
	});
};

// Create a new controller method for signing out
exports.signOut = function(req, res) {

	//Clear the cookie 
	res.clearCookie("token");
	// Redirect the admin back to the main application page
	res.redirect('/');
};

function getErrorMessage(err) {

    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
            }
        } else {
            return 'Unknown server error';
        }
};
   