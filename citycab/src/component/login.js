import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from './header';
import axios from "axios"
function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API endpoint
    const apiEndpoint = "https://api-hdzvzie4ya-uc.a.run.app/api/login/user";

    try {
      // Make a POST request to login
      const response = await axios.post(apiEndpoint, {
        email: email,
        password: password
      });

      console.log("Login response:", response.data);
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        navigate("/mapp");
      } else {
        alert("Failed to log in. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
<div>
    <div className='loginContainer'>
      <h1>Welcome to City Cab</h1>
      <button className="google-login-button" onClick={() => alert("Login with Google clicked")}>
       Sign in with Google
      </button>

      <form onSubmit={handleSubmit}>
        
        <div className='email-form'>
        <h5>Email</h5> 


        <input
        className='email'
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className='password-form'>
        <h5>Password</h5> 

        
        
        <div>

       
          <input
          className='password'
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          </div>

          <div className='linksContainer'>
          
      <a href="#"
      className='forgotPassword'
       onClick={() => alert('Forgotten password clicked')
       }>Forgot your password?</a>
      </div>

        </div>
        <button type="submit" className="login-button">Sign in</button> {/* Login button */}
        </form>

      <div>
          <a
            href="#"
            className='mobilbankid'
            onClick={() => alert('Mobile BankID clicked')}
          >
            Or continue with Mobil BankID
          </a>
        </div>
      
      <div className='linksContainer'>
        <Link to="/second-page" className='signupLink'>Don't have an account? Sign up</Link>
        </div>
    </div>
    </div>


  );
}

export default Login;
