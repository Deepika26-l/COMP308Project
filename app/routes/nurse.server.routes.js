// Load the nurse controller
const nurse = require('../../app/controllers/nurse.server.controller');

module.exports = function(app) {
	
	//Method to display index page
	app.get('/', nurse.render);

	//Method to display signup page at route /signup
	app.get('/signup', nurse.renderSignup);

	//Method to save Student info at route /register
	app.post('/register', nurse.signup);

	//Method to display login page
	app.get('/signin', nurse.renderSignin);

	//Method to authenticate student from login page
	app.post('/signin', nurse.authenticate);

	//Method to SignOut from the given page
	app.route('/signout').post(nurse.signOut);

};