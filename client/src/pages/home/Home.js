import React, { useEffect } from 'react'; 
import Navbar from '../../components/navbarHome/Navbar'; 
import { Outlet } from "react-router";
import Footor from '../../components/footer/Footer';
import { useDispatch } from 'react-redux';
import { getmyinfo } from '../../redux/slices/appConfigSlice';

function Home() {

  const dispatch = useDispatch(); 
  useEffect(()=>{
      dispatch(getmyinfo()); 
  } , [dispatch] ); 

  return (
    <>
         <Navbar/>
         <div className="outlet" style={{ marginTop: "40px" }}>
                <Outlet />
            </div>
          <Footor/>  
    </>
  )
}

export default Home
