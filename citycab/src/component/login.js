import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    alert('Button clicked!');
  };

  return (
    <div className='loginContainer'>
      <h2>Login</h2>
      <button className="google-login-button" onClick={() => alert("Login with Google clicked")}>
        Login with Google
      </button>
      <form onSubmit={handleSubmit}>
        <div>
        <input
        className='email'
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
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
        <button type="submit" className="login-button">Sign in</button> {/* Login button */}
      </form>
      <div className='linksContainer'>
      <a href="#"
      className='forgotPassword'
       onClick={() => alert('Forgotten password clicked')
       }>Forgot your password?</a>
      </div>
      <div className='linksContainer'>
        <Link to="/second-page" className='signupLink'>Don't have an account? Sign up</Link>
        </div>
    </div>
  );
}

export default Login;
