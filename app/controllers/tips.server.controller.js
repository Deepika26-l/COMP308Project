//Load the mongoose models
const mongoose = require('mongoose');

//Load the Tips Model
const Tips = mongoose.model('Tips');

//Load the Patient Model
const Patient = mongoose.model('Patient');

//Create a new controller method to add a new tip
exports.createTip = function(req, res, next){
   
   /* //Create and instantiate an instance of Tip
   const tips = new Tips(req.body);

   //Save tip of the patient
   tips.save(function(err){

        if(err){

        //Call next middleware and display error message
        console.log('Error in createTip()');
        return next(err);
    }
    else{
      
        res.render('nursePage', {
                description: 'A Tip has been successfully Sent!'                
            });
        }
    }); */
    var email = req.body.email;
 
  //Find the patient according to the email ID
  Patient.findOne({ email: email}, function(err, patient) {
        
    if (err) { 
        //Call the next middleware and display the error message
        console.log('Error in createTip()');    
        return next(err);        
     }
 
   
    //Create session and store patientID in it 
	//var session = req.session;
    //console.log('Session is: ', session);
	//session.patientId = patient._id;
    //console.log('Session.patientId: ', session.patientId);

    //Create and instantiate an instance of VitalSign
    const tips = new Tips(req.body);

    //Pass patientID to patient property of VitalSign
    //vitalSign.patient = session.patientId;
    
    //Save tips of the patient
    tips.save(function(err){

        if(err){
        //Call next middleware and display error message
        console.log('Error in createTip()');
        return next(err);
    }
    else{
        
        //Render studentsPage
        res.render('nursePage', {
            description: 'A Motivational message has been successfully Sent!'                
        });
        }
    });
});
}

//Create a new controller method to list all the motivational Tips
exports.listDailyMotivationalTips = function (req, res, next) {
    
    email = req.body.email;
    console.log('Email is ', email);
    
    //Use the Tips's static method > 'find' to retrieve a list of Tips
    Tips.find({email: email}, function (err, tips) {
        
        if (err) {
            // Call the next middleware with an error message
            console.log('Error in listDailyMotivationalTips()')
            return next(err);
        } else {

			if(tips.length == 0){
				res.render('addOnPage', {
					description: 'No tip has been added yet!'
				}); 
			} else {

            // Use response object's render() to render a view
            res.render('dailyMotivationalTips', {
                       tips: tips
            });
          
        }}
    });
};
