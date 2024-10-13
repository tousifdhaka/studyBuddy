import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './static/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="StudyBuddy Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Login</Link>
        <Link to="/profile" className="nav-link">Profile</Link> {/* Added Profile link */}
        <Link to="/video" className="nav-link">Video</Link>
        <Link to="/schedule" className="nav-link">Schedule</Link>
        <Link to="/flashcards" className="nav-link">Flashcards</Link>
      </div>
    </nav>
  );
};

export default Navbar;
