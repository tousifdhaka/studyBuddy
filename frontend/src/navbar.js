import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import logo from './static/logo.png';

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
      // Remove the token from localStorage
      localStorage.removeItem("token");
      // Optionally, redirect the user to the login page
      navigate('/login');
    };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="StudyBuddy Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Sign up</Link> {/* Added Profile link */}
        <Link to="/video" className="nav-link">Video</Link>
        <Link to="/schedule" className="nav-link">Schedule</Link>
        <Link to="/flashcards" className="nav-link">Flashcards</Link>
        <button className="nav-link logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
