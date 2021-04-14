// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a new TipsSchema
const TipsSchema = new Schema({
 tipsID: String,
 email: {
	type: String,
	// Validate the email format
	match: [/.+\@.+\..+/, "Please fill a valid email address"]
 },
 tips: String
});

//Use Schema to define the Tips model
mongoose.model('Tips', TipsSchema);
