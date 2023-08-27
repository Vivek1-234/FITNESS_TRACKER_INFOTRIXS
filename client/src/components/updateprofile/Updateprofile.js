/** @format */

import React, { useEffect, useState } from "react";
import "./Updateprofile.scss";
import { useSelector, useDispatch } from "react-redux";
import dummyUserImg from "../../assets/user.png";
import { updateMyProfile } from "../../redux/slices/appConfigSlice";

function Updateprofile() {
  const [error, setError] = useState("");
  const myprofile = useSelector((state) => state.appConfigReducer.myprofile);

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [name, setName] = useState("");
  const [userImg, setuserImg] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setName(myprofile?.name || "");
    setWeight(myprofile?.weight || "");
    setHeight(myprofile?.height || "");
    setuserImg(myprofile?.avatar?.url || "");
  }, [myprofile]);

  function handleimagechange(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setuserImg(fileReader.result);
      }
    };
  }

  function handlesubmit(e) {
    e.preventDefault();
    if (!name || !weight || !height || !userImg) {
      setError("Fields cannot be Empty");
      return;
    }

    if (
      name === myprofile?.name &&
      weight === myprofile?.weight &&
      height === myprofile?.height
    ) {
      setError("You have not Changed Anything");
      return;
    }

    setError("");

    dispatch(
      updateMyProfile({
        name,
        weight,
        height,
        userImg,
      })
    );
  }

  return (
    <div className="updateprofile">
      <div className="update-box">
        <h2 className="headingupdate">Update Profile</h2>

        <div className="input-user-img1">
          <label htmlFor="inputimg" className="labelimg">
            <img src={userImg ? userImg : dummyUserImg} alt={name} />
          </label>

          <input
            className="inputimg"
            id="inputimg"
            type="file"
            accept="image/*"
            onChange={handleimagechange}
          />
        </div>
        <form onSubmit={handlesubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="weight">Weight in (Kg)</label>
          <input
            type="number"
            className="weight"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label htmlFor="height">Height in (Cm) </label>
          <input
            type="number"
            className="height"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </form>

        {error && <p>{error}</p>}

        <div className="update-info">
          <button onClick={handlesubmit}>Update Information</button>
        </div>
      </div>
    </div>
  );
}

export default Updateprofile;
