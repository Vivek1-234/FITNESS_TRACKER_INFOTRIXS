import React from 'react'
import './Feed.scss'
import workout from '../../assets/workout-image.jpg'
import { useNavigate } from 'react-router-dom'
import meal from '../../assets/meal-image.jpg'; 
import quote from '../../assets/quotes.jpg'; 
import progress from '../../assets/progress.jpg'; 

function Feed() {

    const navigate = useNavigate(); 

  return (   

    <div className='home-content1'>
    <div className='workout-part5'>
    <h2 className='heading1'>Add Today Workout</h2>

        <img className='image-workout5' src={workout} alt="" />
        <div className='Add Exercise5'>
            <button className='add-workout-button11' onClick={()=>{    
                navigate('./workout')
            }}>Add Workout</button>
        </div>
    </div>    
    <div className='meal-part5'>
        <h2 className='heading1'>Add Today Meal</h2>
        <img className='image5' src={meal} alt="" />
        <div className='Add-Meal5'>
            <button className='add-meal-button1'  onClick={()=>{
                navigate('./meal')
            }} >Add Meal</button>
        </div>
    </div>


    <div className='progress5'>
    <h2 className='heading1'>Track Your Progress</h2>
    <img className='progress-image5' src={progress} alt="" />
    <div className='exercise-progress'>
        <h2 className='heading1'>Track  Workout</h2>
        
        <div className='see-exercise5'>
            <button  onClick={()=>{
                navigate('/getexcercise/text')
            }}  className='add-bmi-button'>Workout Detail In Text</button>
            <button onClick={()=>{
                navigate('/getexcercise/graph')
            }} className='add-bmi-button'>Workout Detail In Graph</button>
        </div>
    </div>

    <div className='meal-progress'>
        <h2 className='heading1'>Track  Meals</h2>
        
        <div className='see-meal5'> 
            <button onClick={()=>{
                navigate('/getmeal/text')
            }} className='add-bmi-button'>Meal Detail In Text</button>
            <button onClick={()=>{
                navigate('/getmeal/graph')
            }}  className='add-bmi-button'>Meal Detail In Graph</button>
        </div>  
    </div>

    </div>


    <div className='bmi5'>
        <h2 className='heading1'>BMI</h2>
        <div className='About-bmi'>
          
            <p className='bmi-para5'>Body Mass Index <mark>BMI</mark> is a person's weight in <mark>kilograms or pounds </mark>divided by the square of height in <mark> meters or feet</mark>. A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual.</p>
        </div>

        <div className='calculate5' > 
          <button onClick={()=>{
            navigate('/bmi')
          }} className='add-bmi-button'>BMI Calculator</button>
        </div>

    </div>

    
    <div className='motivation-quote5'>
        <h2 className='heading1'>Quote Of The Day </h2>       
          <img  className='quote-image5' src={quote} alt="" />
    
    </div>

      
    </div>
  )
}

export default Feed; 
