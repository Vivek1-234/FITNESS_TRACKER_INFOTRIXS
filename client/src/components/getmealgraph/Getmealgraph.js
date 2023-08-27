/** @format */

import React, { useEffect, useState } from "react";
import "./Getmealgraph.css";
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

function Getmealgraph() {
  
  const [curdatemine, setcurdatemine] = useState([]);
  const [curfat, settotalcurfat] = useState([]);
  const [curcalories, settotalcurcalories] = useState([]);
  const [curcarbohydrates, settotalcurcarbohydates] = useState([]);
  const [curprotein, settotalcurprotein] = useState([]);

  useEffect(() => {
    const da = async () => {
      try {
        const response = await axiosClient.get("/meals/all");
    if(response.result.allusermeal.length ===  0) {
          alert("Your Don't Have Anything to Shown");
       }  
        return response;
      } catch (error) {
        console.log(error);
      }

    };

    da().then((d) => {
      let newCurDateMine = [];
      let newCurFat = [];
      let newCurCalories = [];
      let newCurCarbohydrates = [];
      let newCurProtein = [];

      let totalfat = 0;
      let totalcalorie = 0;
      let totalcarbohydrates = 0;
      let totalprotein = 0;
      let cd = "";

      d.result.allusermeal.forEach((x, index) => {
        if (cd === "") {
          newCurDateMine.push(x.date);
          cd = x.date;
        }

        totalfat += x.fat;
        totalprotein += x.protein;
        totalcalorie += x.calories;
        totalcarbohydrates += x.carbohydrates;

        if (index === d.result.allusermeal.length - 1 || cd !== d.result.allusermeal[index + 1].date) {
           newCurFat.push(totalfat);
          newCurCalories.push(totalcalorie);
          newCurCarbohydrates.push(totalcarbohydrates);
          newCurProtein.push(totalprotein);

          totalfat = 0;
          totalcalorie = 0;
          totalcarbohydrates = 0;
          totalprotein = 0;

          if (index !== d.result.allusermeal.length - 1) {
            newCurDateMine.push(d.result.allusermeal[index + 1].date);
            cd = d.result.allusermeal[index + 1].date;
          }
        }
      });

      setcurdatemine(newCurDateMine);
      settotalcurfat(newCurFat);
      settotalcurcarbohydates(newCurCarbohydrates);
      settotalcurprotein(newCurProtein);
      settotalcurcalories(newCurCalories);
    });
    
  }, []);

  var data = {
    labels: curdatemine?.map((x) => x),

    datasets: [ 
      {
        label: "Calories",
        data: curcalories?.map((x) => x),
        borderWidth: 1,
        backgroundColor: "blue",
      },
      {
        label: "Carbohydrates",
        data: curcarbohydrates?.map((x) => x),
        borderWidth: 1,
        backgroundColor: "pink",
      },
      {
        label: "Fat",
        data: curfat?.map((x) => x),
        borderWidth: 1,
        backgroundColor: "aqua",
      },
      {
        label: "Protein",
        data: curprotein?.map((x) => x),
        borderWidth: 1,
        backgroundColor: "gray",
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
        <p>Your Meal Progress </p>
        <div className="chartAreaWrapper2" >
          <Bar data={data} options={options} />
        </div>
        </div>
   
  
  );
} 



export default Getmealgraph;
