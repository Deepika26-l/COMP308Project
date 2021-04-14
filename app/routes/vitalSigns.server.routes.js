// Load the 'vitalSigns' controller
const vitalSigns = require('../controllers/vitalSigns.server.controller');

// Define the routes module' method
module.exports = function(app) {

	//Post VitalSigns info at route /addVitalSigns
	app.post('/addVitalSigns', vitalSigns.createVitalSign);

	//Method to save daily info of patient at route /addDailyVitalSigns
	app.post('/addDailyVitalSigns', vitalSigns.createDailyVitalSign);

	//Get patient info at route /accessVitalSigns
	app.post('/accessVitalSigns', vitalSigns.findVitalSignsInfoByPatientEmail);
		
}; 

