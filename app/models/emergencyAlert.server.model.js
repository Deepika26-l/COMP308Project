// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a new EmergencyAlertSchema
const EmergencyAlertSchema = new Schema({
 email: String,
 alertMessage: String,
 nurse: {
    type: Schema.Types.ObjectId,
    ref: 'Nurse' }
});

//Use Schema to define the EmergencyAlert model
mongoose.model('EmergencyAlert', EmergencyAlertSchema);
