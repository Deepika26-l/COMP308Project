// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a new VitalSignsSchema
const VitalSignsSchema = new Schema({
 email: {
	type: String,
	// Validate the email format
	match: [/.+\@.+\..+/, "Please fill a valid email address"]
 },
 bodyTemperature: Number,
 heartRate: Number,
 bp: String,
 respiratoryRate: Number,
 date: Date,
 patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient' }
});

//Use Schema to define the VitalSignsSchema
mongoose.model('VitalSigns', VitalSignsSchema);
