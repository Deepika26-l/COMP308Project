//Load the mongoose models
const mongoose = require('mongoose');

//Load the VitalSigns Model
const VitalSigns = mongoose.model('VitalSigns');

//Load the Patient Model
const Patient = mongoose.model('Patient');

//Create a new controller method to add new course
exports.createVitalSign = function(req, res, next){

  var email = req.body.email;
 
  //Find the patient according to the email ID
  Patient.findOne({ email: email}, function(err, patient) {
        
    if (err) { 
        //Call the next middleware and display the error message
        console.log('Error in createVitalSign()');    
        return next(err);        
     }
 
   
    //Create session and store patientID in it 
	var session = req.session;
    console.log('Session is: ', session);
	session.patientId = patient._id;
    console.log('Session.patientId: ', session.patientId);

    //Create and instantiate an instance of VitalSign
    const vitalSign = new VitalSigns(req.body);

    //Pass patientID to patient property of VitalSign
    vitalSign.patient = session.patientId;
    
    //Save vitalSign of the patient
    vitalSign.save(function(err){

        if(err){
        //Call next middleware and display error message
        console.log('Error in createVitalSign()');
        return next(err);
    }
    else{
        
        //Render studentsPage
        res.render('nursePage', {
                description: 'Vital Signs for the patient have been successfully Added!'
               });
        }
    });
});
};

//A new controller method to display List of Students according to a course
exports.findVitalSignsInfoByPatientEmail = function(req, res, next){

    var email = req.body.email;
	
	console.log('Email ID of patient is ', email);
  
	//Find the VitalSigns according to the emailID of patient and display his records
    VitalSigns.find({ email: email }).exec(function(err, vitalSigns){
		if (err) {
            // Call the next middleware with an error message
            console.log('Error in findVitalSignsInfoByPatientEmail()')
            return next(err);
        } else {
			// Use response object's render() to render a view
			console.log('Vital Signs are: ', vitalSigns);
			if(vitalSigns.length == 0){
				res.render('addOnPage', {
					description: 'No record has been added for the patient!'
				}); 
			} else {
            res.render('vitalSignsForPatient', {
				vitalSigns: vitalSigns, email: email
			});     
        }
	}
	});
};


//Create a new controller method to add new course
exports.createDailyVitalSign = function(req, res, next){

    email = req.body.email;

     //Create and instantiate an instance of VitalSign
     const vitalSign = new VitalSigns(req.body);
  
      //Save vitalSign of the patient
      vitalSign.save(function(err){
  
          if(err){
          //Call next middleware and display error message
          console.log('Error in createVitalSign()');
          return next(err);
      }
      else{          
          
          res.render('patientPage', {
                  description: 'Vital Signs have been successfully Added!', 
                  email: email                
              });
          }
      });
  }