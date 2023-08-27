import React, { useState } from "react";
import "./Workout.css";
import { axiosClient } from "../../utils/axiosClient";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/slices/appConfigSlice";

const Workout = () => {


   const dispatch = useDispatch();

   const [inputarr , setinputarr] = useState([]);
   const [inputdata,  setinputdata] = useState({
    exercise:"",
    noOfSet:"", 
    reps:""    
   });
   

    function handleSubmit(e) {
      e.preventDefault();     
     
      setinputdata({
        ...inputdata ,
        [e.target.name]: e.target.value        
      }); 
               
    };   

let {exercise , noOfSet , reps} = inputdata;

   async function changehandle(){

    if (!exercise || !noOfSet || !reps) {
      alert("Please fill in all the fields before saving.");
      return;
    }

         setinputarr([...inputarr , {exercise , noOfSet , reps}]);     

         try {

        

       

          dispatch(setLoading(true)); 

          let ans =""; 
          ans = new Date().getDate()+"-";
          ans +=   new Date().getMonth()+1+"-"; 
          ans += new Date().getFullYear(); 

          const date = ans;
            
          await  axiosClient.post('/workouts/' , {
             
            exercise,
            noOfSet, 
            reps,
            date    
  
           }) 
           
           dispatch(setLoading(false)); 
          
         } catch (error) {
          
         } 
         
      

         setinputdata({exercise:"" , noOfSet:"" , reps:""});  
         
         
    }

  
    return (
      <form className="workout_form" onSubmit={handleSubmit}>  
       <label htmlFor="Exercise_name">Exercise Name</label>                
        <input              
          type="text"                                   
          placeholder="Exercise Name"             
          className="Exercise-name-input"          
          id="Exercise_name"                      
          name="exercise"            
         value={inputdata.exercise} 
          onChange={handleSubmit}   
        /> 
        
<label htmlFor="oneset">One Set Size</label>
      
        <input
          type="number"
          placeholder="One set size"
          className="Reps-input"
          id="oneset"      
          name="noOfSet"      
          value={inputdata.noOfSet}                        
          onChange={handleSubmit}
        />

        
<label htmlFor="Reps">Reps</label>
        <input    
          type="number"         
          placeholder="Reps"         
          className="Reps-input"          
          id="Reps"            
          name="reps"         
          value={inputdata.reps}                
          onChange={handleSubmit}
        />
        <div className="submit-button-div">
        <button type="submit" className="submit-button" onClick={handleSubmit} >Save Exercise</button> 

         <button type="submit" onClick={changehandle}
          className="submit-button">Save In Today  Workout List</button> 

</div>
         

       <table cellPadding={8} className="exercise_detail">
        <thead>
        <tr className="tablerow">

         <td>Exercise Name</td>
         <td>One Set Size</td>
         <td>Reps</td> 
        
        </tr>
        </thead>
        {
          inputarr !== [] && inputarr.map((data ,  i )=>{
            return (
              <tbody key={i} >
               <tr  className="tablerow">
                <td>{data.exercise}</td>
                <td>{data.noOfSet}</td>
                <td>{data.reps}</td>
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