import React from 'react'; 
import './Excercise.css'; 
import lunges from "../../assets/lunges.png"; 
import yoga from '../../assets/yoga-pose.png';
import extended from "../../assets/extended.png"; 

const Exercise = () => {
  return (
    <section>
        <div className="containerexcercise container_exerscise">
            <div className="exerscise_top">
                <h2 className="section_titleexcer">
                    Benefits of <span className='highlights'>
                         Exerscise
                    </span>

                </h2>
                <p>
                Immediate Benefits.</p>  
                <p> Weight Management.</p>
                <p>Reduce Your Health Risk.</p>
                <p>Strengthen Your Bones and Muscles.
</p>
                <p>Improve Your Ability to do Daily Activities and Prevent Falls.
</p>
                <p>Increase Your Chances of Living Longer.
</p>
                <p>Manage Chronic Health Conditions & Disabilities.
</p>
           


                
            </div>

            <div className="exerscise_wrapper">
                <div className="exerscise_item">
                    <span className="exerscise_icon">
                        <img src={lunges} alt="" />
                    </span>
                    <div className="exerscise_content">
                        <h4>Healthy Lifestyle</h4>
                       
                    </div>
                    
                </div>
                <div className="exerscise_item">
                    <span className="exerscise_icon">
                        <img src={yoga} alt="" />
                    </span>
                    <div className="exerscise_content">
                        <h4>Reducing Blood Pressure</h4>
                      
                    </div>
                    
                </div>
                <div className="exerscise_item">
                    <span className="exerscise_icon">
                        <img src={extended} alt="" />
                    </span>
                    <div className="exerscise_content">
                        <h4>Increased Flexibility</h4>
                       
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Exercise; 