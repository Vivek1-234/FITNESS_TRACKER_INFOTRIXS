const User = require("../models/User");
const Meal = require("../models/Meal");
const { success , error} = require("../utils/responseWrapper");



const getallmeal =async(req , res )=>{
   

    try {
      const curUserId = req._id; 
      const allusermeal = await Meal.find({
        owner: curUserId,
      }); 
  
      return res.send(success(200, { allusermeal }));
    } catch (e) {  
      return res.send(error(500, e.message));
    }

}; 


const createmealController = async(req , res )=>{

    try {

        
    const {name , calories , fat , carbohydrates , protein , date} = req.body; 
    const owner = req._id; 

  const user = await User.findById(req._id); 

    const meal = await  Meal.create({
         owner,
         name, 
         calories, 
         fat, 
         carbohydrates , 
         protein , 
         date

    }); 

    user.meals.push(meal._id); 
        await user.save(); 

        return res.send(success(201 ,{meal})); 

    } catch (e) {
          res.send(error(500 , e.message)); 
    }

}


module.exports={
    getallmeal, 
    createmealController
}






