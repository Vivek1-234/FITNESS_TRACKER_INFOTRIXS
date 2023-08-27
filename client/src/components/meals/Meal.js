import React, { useState } from "react";
import "./Meal.css";

import { axiosClient } from "../../utils/axiosClient";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/slices/appConfigSlice";

const Workout = () => {
  
  const dispatch = useDispatch(); 

   const [inputarr , setinputarr] = useState([]);
   const [inputdata,  setinputdata] = useState({
    name: "",
    calories: "",
    fat: "",   
    carbohydrates: "",
    protein: "",  
   });
   

    function handleSubmit(e) {
      e.preventDefault();     
     
      setinputdata({
        ...inputdata ,
        [e.target.name]: e.target.value        
      }); 
               
    };   

let {name , calories , fat , carbohydrates , protein } = inputdata;

   async function changehandle(){

    if (!name || !calories || !fat || !carbohydrates || !protein) {
      alert("Please fill in all the fields before saving.");
      return;
    }

         setinputarr([...inputarr , {name , calories , fat , carbohydrates , protein}]); 


         
         try {
       

          dispatch(setLoading(true)); 

          let ans =""; 
          ans = new Date().getDate()+"-";
          ans +=   new Date().getMonth()+1+"-"; 
          ans += new Date().getFullYear(); 

          const date = ans;

          const result = await  axiosClient.post('/meals/' , {
             
            name,
            calories, 
            fat,
            carbohydrates,     
            protein, 
             date, 

           }) 
           
      console.log("Your result is : " , result);

           dispatch(setLoading(false)); 
          
         } catch (error) {
           
         } 
         

  
         setinputdata({name:"" , calories:"" , fat:"" ,carbohydrates:"" , protein:"" });
         
         
    }

  
    return (
      <form className="meal_form" onSubmit={handleSubmit}>  
    <label htmlFor="meal_name">Meal Name</label>                 
        <input              
          type="text"                                
          placeholder="Meal Name"             
          className="Meal-name-input"          
          id="meal_name"                      
          name="name"              
         value={inputdata.name} 
          onChange={handleSubmit}   
        /> 
        
<label htmlFor="calories">Calories</label>
      
        <input
          type="number"
          placeholder="Calories"
          className="calories-input"
          id="calories"      
          name="calories"      
          value={inputdata.calories}                        
          onChange={handleSubmit}
        />

        
<label htmlFor="fat">Fat (grams)</label>
        <input    
          type="number"         
          placeholder="Fat (grams) "         
          className="fat-input"          
          id="fat"            
          name="fat"         
          value={inputdata.fat}                
          onChange={handleSubmit}
        />
                


                
<label htmlFor="carbohydrates">Carbohydrates (grams)</label>
        <input    
          type="number"         
          placeholder="Carbohydrates (grams) "         
          className="carbohydrates-input"          
          id="carbohydrates"            
          name="carbohydrates"         
          value={inputdata.carbohydrates}                
          onChange={handleSubmit}
        />

                
<label htmlFor="protein">Protein (grams)</label>
        <input    
          type="number"         
          placeholder="protein (grams) "         
          className="protein-input"          
          id="protein"            
          name="protein"         
          value={inputdata.protein}                
          onChange={handleSubmit}
        />

<div className="submit-button-div">
        <button type="submit" className="submit-button-meal" onClick={handleSubmit} >Save Meal</button> 

         <button type="submit" onClick={changehandle}
          className="submit-button-meal">Save In Today  Meal List</button> 
      </div>      

       <table cellPadding={8} className="meal_detail">

       <thead>
        <tr className="tablerow">

         <td>Meal Name</td>
         <td>Calories</td>
         <td>fat</td> 
         <td>Carbohydrates</td> 
         <td>Protein</td> 
   
        </tr>
</thead>
    

        {
          inputarr !== [] && inputarr.map((data ,  i )=>{
            return (
              <tbody>
               <tr key={i} className="tablerow">
                <td  >{data.name}</td>
                <td  >{data.calories}</td>
                <td  >{data.fat}</td>
                <td  >{data.carbohydrates}</td>
                <td  >{data.protein}</td>
               </tr>
               </tbody>
            )
          })
        }
       </table>

      

      </form>

    

    );   
  };    
  
  export default Workout;