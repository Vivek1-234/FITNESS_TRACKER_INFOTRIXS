import React from 'react'
import "./Start.css"
import trainImg from "../../assets/trainer.png"
import { useNavigate } from 'react-router-dom'
const Start = () => {
  
  const navigate = useNavigate(); 

  return (
    <section>
      <div className="containerstart">
        <div className="start_wrapper">
            <div className="start_img">
                <img src={trainImg} alt=""  />
            </div>
            <div className="start_content">
                <h2 className="section_titlestart">
                    Ready to make a <span className="highlightsstart">Change?</span>
                </h2>   
                <p>
                   Start with us Today !!!!!!!!
                 
                </p>

                <p>Make Your Tommorow</p>

                <button className='signup getstarted' onClick={()=>{
                  navigate('/signup')
                }}>Get Started</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Start