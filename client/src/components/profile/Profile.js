/** @format */

import React, { useEffect, useState } from "react";
import userimg from '../../assets/user.png'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './Profile.css'; 

function Profile() {

  const navigate = useNavigate(); 
  const myProfile = useSelector((state) => state.appConfigReducer.myprofile);


const [weight , setWeight] = useState("0");
const [height , setHeight] = useState("0");
const [name , setname] = useState("");
const [bmi , setbmi] = useState("");

 useEffect(()=>{


   
       setWeight(myProfile?.weight ||  0 ); 
       setHeight(myProfile?.height ||  0 ); 
       setname(myProfile?.name || 'Undefined');  
        
                    
       const heightInMeters = height / 100;
       const bmiValue = weight / (heightInMeters * heightInMeters); 
       setbmi(bmiValue.toFixed(2));

       
       
 })

  return ( 

    <div className="profile11">
       
        <div className="profile-card">
          <img  className="user-img5" src={myProfile?.avatar?.url || userimg} alt="" />
          <h3 className="user-name2">{name}</h3>
          <div className="user-info1">
            <h4>Weight : {weight}</h4>
            <h4>Height : {height}</h4>
            <h4 className="result1">Your BMI is : {bmi}</h4>
          </div>
          <button className="updatebutton" onClick={()=>{
            navigate('/updateprofile'); 
          }} >Update Profile</button>
        </div>
    
 
        <div>
      </div>
    </div>
  );
}

export default Profile;
