const User = require("../models/User");
const { success , error} = require("../utils/responseWrapper");
const cloudinary = require("cloudinary").v2;
const getmyinfo = async(req , res )=>{

try {
    const user =  await User.findById(req._id); 
    return res.send(success(200 , {user}));  

} catch (e) {
      return res.send(error(500 , e.message)); 
}

}; 


const updateuserprofile = async (req, res) => {
    try {
      const { name, weight, height ,  userImg } = req.body;
  
      const user = await User.findById(req._id);
  
      if (name) {  
        user.name = name;   
      }
      if (weight) {
        user.weight = weight;
      }
      if (height) {
        user.height= height;
      }
      if (userImg) {
        const cloudImg = await cloudinary.uploader.upload(userImg, {
          folder: "profileImg",
        });
        user.avatar = {
          url: cloudImg.secure_url,
          publicId: cloudImg.public_id,
        };
      }
  
      await user.save(); 
      return res.send(success(200, { user }));
    } 
    
    catch (e) { 
      console.log("Update profile error ", e);
      return res.send(error(500, e.message));
    }

  };



module.exports = {
    getmyinfo, 
    updateuserprofile, 
};
 