import React, { useEffect, useState } from "react";
import "./Getexcercisegraph.css";
import { axiosClient } from "../../utils/axiosClient";

import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title,
  Legend,
} from "chart.js/auto";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title,
  Legend, 
  
);

function Getexcercisegraph() {
 
  
  const [curdatemine, setcurdatemine] = useState([]);
  const [noofexcercise, setnoofexcercise] = useState([]);
  const [intensity, setintensity] = useState([]);


  useEffect(() => {
    const da = async () => {
      try {
        const response = await axiosClient.get("/workouts/all");
        console.log(response)
  if(response.result.alluserworkout.length ===  0) {
          alert("Your Don't Have Anything to shown");
       }  
        return response;
      } catch (error) {
        console.log(error);
      }
    };

    da().then((d) => {
      let newCurDateMine = [];
      let newnoofexcercise = [];
      let newintensity= [];
      

      let totalexcercise = 0;
      let totalintensity = 0; 
      let cd = "";

      d.result.alluserworkout.forEach((x, index) => {
        if (cd === "") {
          newCurDateMine.push(x.date);
          cd = x.date;
        }

        totalexcercise++;
        totalintensity += (x.reps * x.noOfSet);  
        

        if (index === d.result.alluserworkout.length - 1 || cd !== d.result.alluserworkout[index + 1].date) {
         console.log(totalexcercise);
          newnoofexcercise.push(totalexcercise);
          newintensity.push(totalintensity/1000);

          totalexcercise = 0;
          totalintensity =0; 

    if (index !== d.result.alluserworkout.length - 1) {
            newCurDateMine.push(d.result.alluserworkout[index + 1].date);
            cd = d.result.alluserworkout[index + 1].date;
          }
        }
      });

      setcurdatemine(newCurDateMine);
      setnoofexcercise(newnoofexcercise); 
      setintensity(newintensity);
    });
  }, []);

  var data = {
    labels: curdatemine?.map((x) => x),

    datasets: [ 
      {
        label: "Total No Of Excercise",
        data: noofexcercise?.map((x) => x),
        borderWidth: 1,
        backgroundColor: "blue",
      },
      {
        label: "Intensity Of all Excercise = (Reps * One Set Size)/1000",
        data: intensity?.map((x) => x),
        borderWidth: 1,
        backgroundColor: "pink",
      },
      
    ],
  };

  var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
     
    };
    
  

  return (
    
    
      
      
        <div className="chartAreaWrapper">
        <p>Your Workout Progress </p>
        <div className="chartAreaWrapper2" >
          <Bar data={data} options={options} />
        </div>
        </div>
   
  
  );
} 


export default Getexcercisegraph
