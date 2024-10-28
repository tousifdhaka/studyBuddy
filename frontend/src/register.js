import React from 'react'; // Import React to use JSX and React features
import './register.css'; // Import CSS for styling the Register component
import Navbar from './navbar'; // Importing Navbar component to use in the Register page
import logo from './static/logo.png'; // Importing the logo to be used in the header, ensure the path is correct

// Define the Register component
const Register = () => {
  return (
    // Main container for the Register page
    <div className="register-container">
      {/* Register box container */}
      <div className="register-box">
        {/* Header containing the logo and the title */}
        <div className="register-header">
          <img src={logo} alt="StudyBuddy Logo" className="logo" /> {/* Logo image for branding */}
          <h2>Sign Up for StudyBuddy</h2> {/* Title of the registration form */}
        </div>

        {/* Registration form */}
        <form>
          {/* Input group for the user's full name */}
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>

          {/* Input group for the user's email */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          {/* Input group for the user's password */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>

          {/* Input group for confirming the user's password */}
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
          </div>

          {/* Submit button to complete the registration */}
          <button type="submit" className="register-button">Sign Up</button>
        </form>

        {/* Footer section for redirecting to login if the user already has an account */}
        <div className="register-footer">
          <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

// Export the Register component so it can be imported and used in other parts of the application
export default Register;
