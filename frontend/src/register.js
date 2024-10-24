import React from 'react';
import './register.css';
import Navbar from './navbar'; // Importing Navbar for use in the register page
import logo from './static/logo.png'; // Make sure the path is correct

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-header">
          <img src={logo} alt="StudyBuddy Logo" className="logo" />
          <h2>Sign Up for StudyBuddy</h2>
        </div>
        <form>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="register-button">Sign Up</button>
        </form>
        <div className="register-footer">
          <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register; // Export the Register component as default
