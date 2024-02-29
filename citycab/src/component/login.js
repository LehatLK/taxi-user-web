import React, { useState } from 'react';

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
  };

  return (
    <div>
      <h2>Login</h2>
      <a href="#">Login with Google</a> {/* Google login link */}
      <form onSubmit={handleSubmit}>
        <div>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Sign in</button> {/* Login button */}
      </form>
      <div>
      <a href="#">Forgot your password?</a>
      </div>
      <div>
        <a href="#">Don't have an account? Sign up</a>
        </div>
    
    </div>
  );
}

export default Login;
