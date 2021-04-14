// Load the admin controller
const patient = require('../../app/controllers/patient.server.controller');

module.exports = function(app) {
	
	//Method to render SignUp page
    app.get('/patientSignup', patient.renderSignup);

    //Method to save patient info at route /patientRegister
	app.post('/patientRegister', patient.signup);

	//Method to display admin login page
	app.get('/patientSignIn', patient.renderPatientSignin);

	//Method to authenticate patient from login page
	app.post('/patientSignin', patient.authenticate);
};