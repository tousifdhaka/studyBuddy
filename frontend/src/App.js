import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import VideoConferencing from './video';
import Navbar from './navbar'; // Import the Navbar
import Schedule from './schedule';

const App = () => {
  return (
    <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/video" element={<VideoConferencing />} />
            <Route path="/schedule" element={<Schedule />} />
            {/* Define additional pages here */}
          </Routes>
        </div>
    </Router>
  );
};

export default App;