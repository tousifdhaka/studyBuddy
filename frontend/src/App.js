import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from 'react-router-dom' to handle routing
import Login from './login'; // Import the Login component
import VideoConferencing from './video'; // Import the VideoConferencing component
import Navbar from './navbar'; // Import the Navbar component
import Schedule from './schedule'; // Import the Schedule component
import Register from './register'; // Import the Register component

// The main App component that handles the routing and overall structure of the application
const App = () => {
  return (
    <Router> {/* Wraps the entire app in a Router to enable routing functionality */}
        <div>
          <Navbar /> {/* Display the Navbar component across all pages */}
          <Routes> {/* Defines all the routes for the application */}
            <Route path="/" element={<Login />} /> {/* Route for the Login page, accessible at '/' */}
            <Route path="/video" element={<VideoConferencing />} /> {/* Route for the VideoConferencing page, accessible at '/video' */}
            <Route path="/schedule" element={<Schedule />} /> {/* Route for the Schedule page, accessible at '/schedule' */}
            <Route path="/register" element={<Register />} /> {/* Route for the Register page, accessible at '/register' */}
            {/* Additional pages can be defined here as needed */}
          </Routes>
        </div>
    </Router>
  );
};

export default App; // Export the App component to be used in other parts of the application
