import React from 'react'; // Import React to use JSX and React features
import './login.css'; // Import the CSS file to style the login page
import logo from './static/logo.png'; // Import the logo image
import Navbar from './navbar'; // Import the Navbar component

// Define the Login component
const Login = () => {
  return (
    <>
      {/* Include the Navbar component at the top of the page */}
      <Navbar />

      {/* Main container for the login form */}
      <div className="login-container">
        <div className="login-box">
          {/* Header section with logo and welcome text */}
          <div className="login-header">
            <img src={logo} alt="StudyBuddy Logo" className="logo" /> {/* Logo image */}
            <h2>Welcome to StudyBuddy</h2> {/* Heading for the login page */}
          </div>

          {/* Login form */}
          <form>
            {/* Input group for the email */}
            <div className="input-group">
              <label htmlFor="email">Email</label> {/* Label for email input */}
              <input type="email" id="email" name="email" placeholder="Enter your email" required /> {/* Email input field */}
            </div>

            {/* Input group for the password */}
            <div className="input-group">
              <label htmlFor="password">Password</label> {/* Label for password input */}
              <input type="password" id="password" name="password" placeholder="Enter your password" required /> {/* Password input field */}
            </div>

            {/* Login button */}
            <button type="submit" className="login-button">Log In</button>
          </form>

          {/* Footer section with links to "Forgot password?" and "Create an account" */}
          <div className="login-footer">
            <a href="#">Forgot password?</a> {/* Link for password recovery */}
            <a href="#">Create an account</a> {/* Link to create a new account */}
          </div>
        </div>
      </div>
    </>
  );
};

// Export the Login component so it can be used in other parts of the application
export default Login;
