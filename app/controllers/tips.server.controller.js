//Load the mongoose models
const mongoose = require('mongoose');

//Load the Tips Model
const Tips = mongoose.model('Tips');

//Create a new controller method to add a new tip
exports.createTip = function(req, res, next){
   
   //Create and instantiate an instance of Tip
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
    });
}

//Create a new controller method to list all the motivational Tips
exports.listDailyMotivationalTips = function (req, res, next) {
    
    //console.log('In listAllStudents()');
    
    //Use the Tips's static method > 'find' to retrieve a list of Tips
    Tips.find({}, function (err, tips) {
        
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
