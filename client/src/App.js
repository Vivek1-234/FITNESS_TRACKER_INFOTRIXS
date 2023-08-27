/** @format */

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import RequireUser from "./components/RequireUser";
import OnlyIfNotLoggedIn from "./components/OnlyIfNotLoggedIn";

import Workout from "../src/components/workout/Workout";
import Meal from "../src/components/meals/Meal";
import BMICalculator from "./components/bmiCalculator/BmiCalculator";
import Profile from "./components/profile/Profile";
import Feed from "./components/feed/Feed";
import LandingPage from "./pages/landingPage/LandingPage";
import About from "./pages/about/About";
import Contactus from "./pages/contact/Contactus";
import GetMeal from "./components/getMealDetailstext/GetMealDetails";
import GetWorkout from "./components/getWorkoutDetailstext/GetWorkoutDetails";
import Getexcercisegraph from "./components/getexcerciseGraph/Getexcercisegraph";
import Getmealgraph from "./components/getmealgraph/Getmealgraph";
import Updateprofile from "./components/updateprofile/Updateprofile";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import toast, { Toaster } from "react-hot-toast";

export const TOAST_SUCCESS = "toast_success";
export const TOAST_FAILURE = "toast_failure";
function App() {
  const isLoading = useSelector((state) => state.appConfigReducer.isLoading);
  const toastdata = useSelector((state) => state.appConfigReducer.toast);

  const loadingRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      loadingRef.current?.continuousStart();
    } else {
      loadingRef.current?.complete();
    }
  }, [isLoading]);

  useEffect(() => {
    switch (toastdata.type) {
      case TOAST_SUCCESS:
        toast.success(toastdata.message);
        break;
      case TOAST_FAILURE:
        toast.error(toastdata.message);
        break;
      default:
    }
  }, [toastdata]);

  return (
    <div className="App">
      <LoadingBar color="red" ref={loadingRef} />
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route element={<RequireUser />}>
          <Route element={<Home />}>
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/meal" element={<Meal />} />
            <Route path="/bmi" element={<BMICalculator />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/getexcercise/text" element={<GetWorkout />} />
            <Route path="/getmeal/text" element={<GetMeal />} />
            <Route path="/updateprofile" element={<Updateprofile />} />

            <Route path="/getexcercise/graph" element={<Getexcercisegraph />} />
            <Route path="/getmeal/graph" element={<Getmealgraph />} />
          </Route>
        </Route>

        <Route element={<OnlyIfNotLoggedIn />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
