
import React from "react";
import "./Navbar.scss";
import { useNavigate} from "react-router-dom";
import {AiOutlineLogout} from 'react-icons/ai'
import { KEY_ACCESS_TOKEN, removeItem} from "../../utils/localStorageManager";
import { axiosClient } from "../../utils/axiosClient"
import { useSelector } from "react-redux";
import userimg from '../../assets/user.png'; 

    
function Navbar() {

    const navigate = useNavigate();    

  
    const myProfile = useSelector(state => state.appConfigReducer.myprofile);  

    async function handleLogoutClicked() {
      try { 
    await axiosClient.post('/auth/logout');
    removeItem(KEY_ACCESS_TOKEN);
    window.location.reload(true);

    
  } catch (e) {
   
      }
  }


  return (
    <div className="Navbarhome">
      <div className="containerhome">
        <h2 className="bannerhome" onClick={()=>{
            navigate('/')
        }}>Fitness Tracker</h2>
        <div className="centerhome">
           <ul>
            <li>
             <button onClick={()=>{
              navigate('/')
             }} >Home</button>    
              
            </li>
            <li>
            <button onClick={()=>{
              navigate('/workout')
             }} >Workout</button>    
              
              
            </li>
            <li>
            <button onClick={()=>{
              navigate('/meal')
             }} >Meal</button>    
              
              
            </li>

            <li>
            <button onClick={()=>{
              navigate('/about')
             }} >About us</button>    
              
            </li> 

            <li>
            <button onClick={()=>{
              navigate('/contact')
             }} >Contact us</button>    
              
            </li>
           </ul>
        </div>
        <div className="right-side">
          <div className="profile1">              
             <img  onClick={()=>{ 
            navigate('/profile');     
        }}  className="user-img1home" src={myProfile?.avatar?.url || userimg} alt="" />    
          </div>  
                     
    <div className="logout" onClick={handleLogoutClicked}><AiOutlineLogout/></div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
