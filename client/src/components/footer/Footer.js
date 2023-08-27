import React from "react";
import "./Footer.css";
import logo from '../../assets/dumble.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container1">
        <div className="footor_wrapper">
          <div className="footor_box">
            <div className="logo1">
              <div className="logo__img1">
                <img src={logo} alt=""  />
              </div>
              <h2 className="w-name">Fitness Tracker </h2>
            </div>
            <p className="w-name">
              Your Fitness Is Our Responsibility
            </p>
          </div>
          <div className="footor_box">
            <h2 className="footor_title">Company</h2>
            <ul className="footor_links">  
              <li>Our Program</li>
              <li>Our Plan</li>
              <li>Become a Member</li>
            </ul>
          </div>

          <div className="footor_box">
            <h2 className="footor_title">Quick Links</h2>
            <ul className="footor_links">
              <li>About Us</li>
              <li>Contact us</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
  
      <div>
      <p className="copyright">
        Copyright © {new Date().getFullYear()} 
        </p> 
        <p className="lastline-footer">My Fitness Tracker. All rights reserved.</p>
    
    </div>

    </footer>
  );
};

export default Footer;