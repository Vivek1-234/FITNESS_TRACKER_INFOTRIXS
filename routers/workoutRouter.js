const router = require('express').Router();
const requireUser = require('../middlewares/requireUser');
const workoutController = require('../controllers/workoutController'); 



router.get('/all' ,requireUser , workoutController.getallworkout );
router.post('/' , requireUser , workoutController.createworkoutController );


module.exports =  router; 