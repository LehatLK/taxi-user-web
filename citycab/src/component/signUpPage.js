// SecondPage.js
import React, { useState } from 'react';
import './signUpPage.css';
import Header from './header';

function SecondPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registerURL = "https://api-hdzvzie4ya-uc.a.run.app/api/register/user";
 

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Constructing the user data object
    const userData = {
      email,
      name,
      password,
    };

    // POST request to registerURL with the user data
    try {
      const response = await fetch(registerURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Handle success response
        const data = await response.json();
        console.log('Registration successful:', data);
        alert("You have succesfully signed up!!");
        // You can redirect the user or clear the form here
      } else {
        // Handle server errors or invalid responses
        console.error('Registration failed:', response.statusText);
        alert("Registration failed or youre already signed up!!");
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
      alert("Network error!!");
    }
  };

  return (

    <div> 
    
    <Header />

    <div className='signupContainer'>
      <h2>Welcome to City Cab</h2>
      <form onSubmit={handleSubmit}>
        <div>

        <div className='name-signup-form'>
  <h5>Name</h5>

          <input
          
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
            className='name'
          />
          </div>
        </div>
        <div>

        <div className='email-signup-form'>
  <h5>Email</h5>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            className='email'
          />
          </div>

        </div>
        <div>

        <div className='password-signup-form'>
  <h5>Password</h5>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            className='password'
          />
          </div>
        </div>
        <a href="#"
          className='forgotPassword'
          onClick={() => alert('Forgotten password clicked')}
        >Forgot your password?</a>
        <button type="submit" className='signup-button'>Sign Up</button>
        <div>
          <a
            href="#"
            className='mobilbankid'
            onClick={() => alert('Mobile BankID clicked')}
          >
            Or continue with Mobil BankID
          </a>
        </div>
      </form>
    </div>
    </div>
  );
}

export default SecondPage;