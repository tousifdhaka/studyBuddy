import React from 'react'; // Import React to use JSX and React features
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './navbar.css'; // Import the CSS file to style the navbar
import logo from './static/logo.png'; // Import the logo image for the navbar

// Define the Navbar component
const Navbar = () => {
  return (
    // Navigation bar container
    <nav className="navbar">
      {/* Logo section */}
      <div className="navbar-logo">
        <img src={logo} alt="StudyBuddy Logo" /> {/* Logo image */}
      </div>

      {/* Links section */}
      <div className="navbar-links">
        {/* Link to the Login page */}
        <Link to="/" className="nav-link">Login</Link>

        {/* Link to the Sign up/Register page */}
        <Link to="/register" className="nav-link">Sign up</Link>

        {/* Link to the Video page */}
        <Link to="/video" className="nav-link">Video</Link>

        {/* Link to the Schedule page */}
        <Link to="/schedule" className="nav-link">Schedule</Link>

        {/* Link to the Flashcards page */}
        <Link to="/flashcards" className="nav-link">Flashcards</Link>
      </div>
    </nav>
  );
};

// Export the Navbar component so it can be used in other parts of the application
export default Navbar;
