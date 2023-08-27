import React from 'react'
import Navbar from '../../components/navbarLandingPage/Navbar'
import Footer from '../../components/footer/Footer.js'; 
import Exerscise from '../../components/exerscise/Excercise'
import Start from '../../components/start/Start'; 
import HeroImg from '../../components/heroimg/HeroImg'; 

import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className='landingpage'> 
    
    <Navbar />
    <HeroImg />
    <Exerscise />
    <Start  />
    <Footer />
    </div>
  )
}

export default LandingPage