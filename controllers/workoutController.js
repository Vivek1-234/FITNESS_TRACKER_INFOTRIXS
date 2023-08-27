/** @format */

const User = require("../models/User");
const Workout = require("../models/Workout");
const { success, error } = require("../utils/responseWrapper");

const getallworkout = async (req, res) => {
  try {
    const curUserId = req._id; 
    const alluserworkout = await Workout.find({
      owner: curUserId,
    }); 

    return res.send(success(200, { alluserworkout }));
  } catch (e) {  
    return res.send(error(500, e.message));
  }
};

const createworkoutController = async (req, res) => {
  try {
    const { exercise, noOfSet, reps, date } = req.body;
    const owner = req._id;

    const user = await User.findById(req._id);

    const workout = await Workout.create({
      owner,
      exercise, 
      noOfSet,
      reps,
      date,
    

    });


  

    user.workouts.push(workout._id);
    await user.save();

    return res.send(success(201, { workout }));
  } catch (e) {
    res.send(error(500, e.message));
  }
};

module.exports = {
  getallworkout,
  createworkoutController,
};
