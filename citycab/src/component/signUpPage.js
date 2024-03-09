// SecondPage.js
import React, { useState } from 'react';
import './signUpPage.css';


function SecondPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add further processing, such as sending the data to a backend server
  };

  return (
    <div className='signupContainer'>
      
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
            className='name'
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            className='email'
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            className='password'
          />
        </div>
        <a href="#"
      className='forgotPassword'
       onClick={() => alert('Forgotten password clicked')
       }>Forgot your password?</a>
      <button type="submit" className='signup-button'>Sign Up</button>
      <div> {/* Wrap the link in a div */}
        <a
          href="#"
          className='mobilbankid'
          onClick={() => alert('Forgotten password clicked')}
        >
          Or continue with Mobil BankID
        </a>
      </div>
      </form>
    </div>
  );
}

export default SecondPage;
