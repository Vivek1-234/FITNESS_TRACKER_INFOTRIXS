import React  ,{useEffect, useState} from 'react'; 
import './GetWorkoutDetails.css'
import { axiosClient } from "../../utils/axiosClient";


function GetWorkoutDetails() {
 
 
  const [data , setData]  =useState([]); 

useEffect(() => {

       
const da =  async () => {

    try { 
       
const response = await axiosClient.get("/workouts/all");
           
      
   if(response.result.alluserworkout.length ===  0) {
          alert("Your List is Empty");
       }  
setData((response.result.alluserworkout
  ).reverse()); 
 

    } catch (error){
            console.log(error); 
    }  
} 

      da();

    }, []);

  return ( 
    <div className='meal-box'>
    <h2>Your Workout Data</h2>
    <div className='container-meal'>
     <div className='meal-detail'>


            {

data !== []?data.map((d , i)=>{

   return ( 
       <div key={i}> 

   
            <h2>{d.date} </h2>                
            <p>Name of Excercise : {d.exercise}</p>
            <p>One Set size  : {d.noOfSet} </p>
            <p>Reps : {d.reps}</p>
            <hr className='underline'/>

          

       </div>
   )
  
   
}):""

}

            </div>
    </div>
            
    </div>
  )
}

export default GetWorkoutDetails
