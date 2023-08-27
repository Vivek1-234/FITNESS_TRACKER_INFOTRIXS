import React, { useState } from "react";
import { Link  ,useNavigate} from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import "./Signup.scss";

function Signup() {
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password || !name  || !weight || !height  ) {
            setError("Please fill in all fields.");
            return;
          }

          if (password.length < 8) {
            setError("Password should be at least 8 characters long.");
            return;
          }
      
          // Add additional password criteria here
        //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        //   if (!password.match(passwordRegex)) {
        //     setError(
        //       "Password should contain at least one uppercase letter, one lowercase letter, and one digit."
        //     );
        //     return;
        //   }

        try {
             await axiosClient.post("/auth/signup", {
                name,
                email,
                password,
                weight, 
                height,
            });

            navigate('/');  

        } catch (error) {
            
        }
    }

    return (
        <div className="Signup">
            <div className="signup-box">
                <h2 className="headingsignup">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

              <label htmlFor="weight">Weight in (Kg) </label>
                    <input
                        type="number"
                        className="weight"
                        id="weight"
                        onChange={(e) => setWeight(e.target.value)}
                    />
                      <label htmlFor="height">Height in (cm) </label>
                    <input
                        type="number"
                        className="height"
                        id="height"
                        onChange={(e) => setHeight(e.target.value)}
                    />

       {error && <p>{error}</p>}

                    <input type="submit" className="submit" />
                </form>
                <p className="subheading">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
