// Load the module dependencies:
//  config.js module and mongoose module
var config = require('./config'),
    mongoose = require('mongoose');
// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
            //Config.db, because it's making development.js available
            //second argument: callback function
    const db = mongoose.connect(config.db, {
		useUnifiedTopology: true,
		useNewUrlParser: true, useCreateIndex: true 
		}).then(() => console.log('DB Connected!'))
		.catch(err => {
		console.log('Error');
		});

    // Load the models 
    require('../app/models/nurse.server.model');
    require('../app/models/patient.server.model');
    require('../app/models/vitalSigns.server.model');
    require('../app/models/tips.server.model');
    require('../app/models/emergencyAlert.server.model');

    // Return the Mongoose connection instance
    return db;
};