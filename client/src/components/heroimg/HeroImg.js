import React from "react";
import heroImg from "../../assets/gym-05.png";
import "./HeroImg.css"

const HeroImg = () => {
  return (
    <section>
      <div className="containerhero">
        <div className="hero_wrapper">
          <div className="hero_content">
            <h2 className="section_title">
              Exerscise is the key to a
              <span className="highlights"> Healthy </span>life
            </h2>
            <p>
            Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability 
            to do everyday activities.
            </p>
          </div>

          <div className="hero_img1">
            <div className="hero_img-wrapper1">
              <div className="box-1">
                <div className="box-2">
                  <div className="box-3">
                  <div className="box_img">
                <img src={heroImg} alt="hero" />
              </div>
                  </div>
                </div>
              </div>
             


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImg;