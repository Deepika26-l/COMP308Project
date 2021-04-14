// Load the 'emergencyAlert' controller
const emergencyAlert = require('../controllers/emergencyAlert.server.controller');

// Define the routes module' method
module.exports = function(app) {

	//Post Emergency message at route /sendEmergencyAlert
	app.post('/sendEmergencyAlert', emergencyAlert.createEmergencyAlert);

}; 

