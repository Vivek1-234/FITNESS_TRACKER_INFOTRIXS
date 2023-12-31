
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss"; 
import {axiosClient} from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager"; 
import React , {useState} from 'react'



function Login() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
          }

        try {
            const response = await axiosClient.post('/auth/login', {
                email,   
                password 
            }); 
         
            setItem(KEY_ACCESS_TOKEN, response.result.accessToken); 
            navigate('/');

        } catch (error) {  
       
        }
    }


  
    return (
        <div className="Login">
            <div className="login-box">
                <h2 className="loginheading">Login</h2>
                <form onSubmit={handleSubmit}>
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
     {error && <p>{error}</p>}
                    <input type="submit" className="submit" />
                </form>
                <p className="subheading">
                    Do not have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
export default Login
