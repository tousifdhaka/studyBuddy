import React from 'react';
import './login.css';
import logo from './static/logo.png';
import Navbar from './navbar'; // Correct import of Navbar component

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <img src={logo} alt="StudyBuddy Logo" className="logo" />
            <h2>Welcome to StudyBuddy</h2>
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="login-button">Log In</button>
          </form>
          <div className="login-footer">
            <a href="#">Forgot password?</a>
            <a href="#">Create an account</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
