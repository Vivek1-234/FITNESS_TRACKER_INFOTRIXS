const mongoose  =require('mongoose'); 


const workoutSchema = mongoose.Schema({

    owner:{
       type:mongoose.Schema.Types.ObjectId, 
       ref:'user',
       required:true
    },       
     exercise:{
        type:String, 
        required:true
     }, 
     noOfSet:{
        type:Number, 
        required:true
     }, 
     reps:{
        type:Number, 
        required:true
     }, 
     date:{
      type:String,
      required:true
     } 

})

module.exports = mongoose.model('workout' , workoutSchema); 

