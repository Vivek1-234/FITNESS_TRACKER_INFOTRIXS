import React, { useState } from "react";
import "./BmiCalculator.css";
import Bmitable from "../bmitable/Bmitable";

const BMICalculator = () => {
  const [error , setError ]  =useState(""); 
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {

    if(!height || !weight){
      setError("All Fields Are Required"); 
      return; 
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    setError(""); 
  };

  return (
    <div className="bmi-calculatorbmicalci">
      <h1 className="headingbmicalci">BMI Calculator</h1>
      <label htmlFor="height">Enter Your Height in (cm) </label>
      <input
        type="number"
        placeholder="Height (cm)"
        className="height-input"
        id="height"
         value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
       <label htmlFor="weight">Enter Your Weight in (kg) </label>
      <input
        type="number"
        placeholder="Weight (kg)"
        className="weight-input"
         value={weight}
         id="weight"

        onChange={(e) => setWeight(e.target.value)}
      />

      {error && <p>{error}</p>}
      <button className="calculate_bmi" type="button" onClick={calculateBMI}>Calculate BMI</button>
      <p className="bmi-resultbmicalci">Your BMI is : {bmi}</p>
    
      <div className="bmitable">        
    <Bmitable/>
    </div>
     
    </div>
    
  

  );
};

export default BMICalculator;