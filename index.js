const express= require('express');
const dotenv = require('dotenv'); 
const dbconnect = require('./dbconnect'); 
const authRouter = require('./routers/authRouter');
const workoutRouter = require('./routers/workoutRouter'); 
const mealRouter = require('./routers/mealRouter'); 
const morgan = require('morgan');  
const { success } = require('./utils/responseWrapper');
const cookieParser = require('cookie-parser'); 
const cors = require('cors'); 
const userRouter =  require('./routers/userRouter');
const cloudinary = require("cloudinary").v2;
const path = require('path'); 

dotenv.config('./.env'); 


cloudinary.config({  
    secure: true,  
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const  app = express(); 

// middlewares                           
app.use(express.json({ limit: "50mb" }));

app.use(morgan('common')); 
app.use(cookieParser()); 


 let origin = process.env.CLIENT_ORIGIN;


app.use(
    cors({
        credentials: true,
        origin
    })
);
app.use('/auth' , authRouter); 
app.use('/workouts' , workoutRouter)
app.use('/meals' , mealRouter)
app.use("/user", userRouter); 

app.get('/' , (req , res )=>{

return res.send(success(200, 'Ok from server'));
}); 

app.use(express.static(path.join(__dirname , './client/build')))
 
app.get('*' , function(_ , res ){
   res.sendFile(path.join(__dirname , "./client/build/index.html") , function(error){
      res.status(500).send(error);
   })
})  
const PORT = process.env.PORT || 4001;  

dbconnect();   
app.listen( PORT, () =>{
    console.log(`Listening on PORT :${PORT}`);  
}); 


