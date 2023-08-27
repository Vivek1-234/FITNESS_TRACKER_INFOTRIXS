import React from 'react'
import { Outlet } from 'react-router';
import { getItem, KEY_ACCESS_TOKEN } from '../utils/localStorageManager'
import LandingPage from '../pages/landingPage/LandingPage';

function RequireUser() {
    const user = getItem(KEY_ACCESS_TOKEN);
  return (
    
    user ? <Outlet /> : <LandingPage/>
  )
}

export default RequireUser

