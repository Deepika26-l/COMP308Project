//Model used here
const Nurse = require('mongoose').model('Nurse');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const jwtExpirySeconds = 300;
const jwtKey =config.secretKey;

// Create a new error handling controller method
const getErrorMessage = function(err) {
	// Define the error message variable
	var message = '';

	// If an internal MongoDB error occurs get the error message
	if (err.code) {
		switch (err.code) {
			// If a unique index error occurs set the message error
			case 11000:
			case 11001:
				message = 'Username already exists';
				break;
			// If a general error occurs set the message error
			default:
				message = 'Something went wrong';
		}
	} else {
		// Grab the first error message from a list of possible errors
		for (const errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	// Return the message error
	return message;
};

//Create a new controller method to display index page
exports.render = function(req, res) {

	// Use the 'response' object to render the 'index' view 
	res.render('index');
};

//Create a new controller method that renders the signup page
exports.renderSignup = function(req, res, next) {
	
	// Use the 'response' object to render the signup page
	res.render('nurseSignUp', {
		description: '***'
	});	
};

//Create a new controller method that saves new Nurse info
exports.signup = function(req, res, next) {

	//Model used here
	const nurse = new Nurse(req.body);	//Instantiating a Nurse Object
	console.log(req.body)
	
	//Try saving the new nurse document
	nurse.save((err) => {	//callback function
		
		if (err) {
			// Use the error handling method to get the error message
			const message = getErrorMessage(err);
			console.log(message)
			
			// Redirect the nurse back to the signup page
			return res.render('nurseSignUp', {
				description: 'Errors occured! Kindly SignUp again!'
			});
		}

		//Render SignUp page
		return res.render('nurseSignUp', {
			description: 'You have been successfully registered!'
		});
		
	});	 
};

//Create a new controller method that renders the signin page
exports.renderSignin = function(req, res, next) {

	// Use the 'response' object to render the signin page
	res.render('nurseSignIn');
};

//Create a new controller method to authenticate nurse
exports.authenticate = function(req, res, next) {
	
	//Get credentials from request body
	//destructuring
	const { email, password } = req.body;
	console.log(email)
	
	//find the nurse with given email using static method findOne
	Nurse.findOne({email: email}, (err, nurse) => {
		//callback (), handles error and returns nurse object
			if (err) {
				return next(err);
			} else {
			console.log(nurse);

			//compare passwords	
			if(bcrypt.compareSync(password, nurse.password)) {

				//Create a new token with the nurse id in the payload
  				//and which expires 300 seconds after issue
				//student._id is payload of token
				  const token = jwt.sign({ id: nurse._id }, jwtKey, 
					{algorithm: 'HS256', expiresIn: jwtExpirySeconds });
				console.log('token:', token)
				// set the cookie as the token string, with a similar max age as the token
				// here, the max age is in milliseconds
				res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000,httpOnly: true});
				//res.status(200).send({ email: email });
				res.render('nursePage', {
					description: '***'});

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
	// Redirect the user back to the main application page
	res.redirect('/');
};