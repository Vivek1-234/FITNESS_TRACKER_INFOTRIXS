import React  ,{useEffect, useState} from 'react'; 
import './GetMealDetails.css'
import { axiosClient } from "../../utils/axiosClient";


function GetMealDetails() {
 

  const [data , setData]  =useState([]); 

useEffect(() => {

       
const da =  async () => {

    try { 
       
const response = await axiosClient.get("/meals/all");
           
if(response.result.allusermeal.length ===  0) {
   alert("Your List is Empty");
}        
setData((response.result.allusermeal).reverse()); 
 

    } catch (error){
        
    }  
} 

      da();

    }, []);

  return (
    <div className='meal-box'>
    <h2>Your Meal Data</h2>
    <div className='container-meal'>
     <div className='meal-detail'>


            {

data !== []?data.map((d , i)=>{

   return (
       <div key={i}> 
       
            <h2>{d.date} </h2>                
            <p>Name of Meal : {d.name}</p>
            <p>Calories : {d.calories} </p>
            <p>Fat : {d.fat}</p>
            <p>Carbohydrates : {d.carbohydrates}</p>
            <p>Protein :{d.protein}</p>
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

export default GetMealDetails
