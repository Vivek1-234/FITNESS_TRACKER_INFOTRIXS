import React from 'react'
import './Navbar.scss'
import {useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate(); 
  return (
    <div className="Navbarland">
      <div className="containernavbar">
        <h2 className="bannerland">Fitness Tracker</h2>
      
        <div className="nav_rightld"> 
          <button className="signinld" onClick={()=>{
            navigate('/signup')
          }}>Sign-Up</button>
          <button className="signinld" onClick={()=>{
            navigate('/login')
          }}>Log-In</button>
          

        </div> 

        </div>
        
    </div>
  )    
}

export default Navbar
