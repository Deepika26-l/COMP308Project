//Load the mongoose models
const mongoose = require('mongoose');

//Load the EmergencyAlert Model
const EmergencyAlert = mongoose.model('EmergencyAlert');

//Load the Nurse Model
const Nurse = mongoose.model('Nurse');

//Create a new controller method to add a new EmergencyAlert
exports.createEmergencyAlert = function(req, res, next){

  var email = req.body.email;
 
  //Find the nurse according to the email ID
  Nurse.findOne({ email: email}, function(err, nurse) {
        
    if (err) { 
        //Call the next middleware and display the error message
        console.log('Error in createEmergencyAlert()');    
        return next(err);        
     }
 
     //Create session and store nurseID in it 
	var session = req.session;
    console.log('Session is: ', session);
	session.nurseId = nurse._id;
    console.log('Session.nurseID: ', session.nurseId);

    //Create and instantiate an instance of EmergencyAlert
    const emergencyAlert = new EmergencyAlert(req.body);

    //Pass nurseID to nurse property of EmergencyAlert
    emergencyAlert.nurse = session.nurseId;
    
    //Save emergencyAlert to the nurse
    emergencyAlert.save(function(err){

        if(err){
        //Call next middleware and display error message
        console.log('Error in createEmergencyAlert()');
        return next(err);
    }
    else{
        
        //Render patientPage
        res.render('patientPage', {
                description: 'An emergency alert has been successfully sent!'               
            });
        }
    });
});
};
