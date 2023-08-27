import React from "react";
import './Bmitable.css'; 

const Bmitable = () => {
  const bmiCategories = ([
    {
      name: "Underweight",
      bmiRange: "<18.5",
    },
    {
      name: "Normal weight",
      bmiRange: "18.5 - 24.9",
    },
    {
      name: "Overweight",
      bmiRange: "25.0 - 29.9",
    },
    {
      name: "Obese Class I",
      bmiRange: "30.0 - 34.9",
    },
    {
      name: "Obese Class II",
      bmiRange: "35.0 - 39.9",
    },
    {
      name: "Obese Class III",
      bmiRange: "≥40.0",
    },
  ]);

  return (


        <div className="bmitablebox">
    <table>
      <thead>
        <tr>
          <th>BMI Category</th>
          <th>BMI Range</th>
        </tr>
      </thead>
      <tbody >
        {bmiCategories.map((bmiCategory , i) => (
          <tr key={i}>
            <td>{bmiCategory.name}</td>
            <td>{bmiCategory.bmiRange}</td>
          </tr>
        ))}
        
      </tbody>
    </table>

</div>
  );
};

export default Bmitable;