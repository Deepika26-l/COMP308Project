// Load the 'tips' controller
const tips = require('../controllers/tips.server.controller');

// Define the routes module' method
module.exports = function(app) {

	//Post tip at route /addTips
	app.post('/addTips', tips.createTip);

	//Get daily Motivational Tips added by nurse at route /dailyMotivationalTip
	app.post('/dailyMotivationalTip', tips.listDailyMotivationalTips);
	
}; 

