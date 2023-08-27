const router = require('express').Router();
const requireUser = require('../middlewares/requireUser'); 
const mealController = require('../controllers/mealController'); 


router.get('/all' ,requireUser , mealController.getallmeal );
router.post('/' , requireUser , mealController.createmealController );


module.exports =  router; 