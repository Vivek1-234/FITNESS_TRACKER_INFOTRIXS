const mongoose  =require('mongoose'); 


const mealSchema = mongoose.Schema({

    owner:{
       type:mongoose.Schema.Types.ObjectId, 
       ref:'user',
       required:true
    },       
    name:{
        type:String, 
        required:true
     }, 
     calories:{
        type:Number, 
        required:true
     }, 

     fat :{
        type:Number, 
        required:true
     },
     carbohydrates :{ 
        type:Number, 
        required:true
     }, 
     protein :{ 
        type:Number, 
        required:true
     }, 
     date:{
      
       type:String, 
       required:true, 

     }, 

     
    
})

module.exports = mongoose.model('meal' , mealSchema); 

