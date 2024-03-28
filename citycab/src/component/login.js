import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from './header';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/mapp")
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
