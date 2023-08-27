const router = require('express').Router();
const requireUser = require('../middlewares/requireUser');
const userController = require('../controllers/userController'); 

router.get('/getmyinfo' , requireUser , userController.getmyinfo); 
router.put('/' , requireUser , userController.updateuserprofile); 

module.exports = router; 
