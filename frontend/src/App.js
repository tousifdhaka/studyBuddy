import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import VideoConferencing from './video';
import Navbar from './navbar'; // Import the Navbar
import Schedule from './schedule';
import Register from './register';

const App = () => {
  return (
    <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/video" element={<VideoConferencing />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/register" element={<Register />} />
            {/* Define additional pages here */}
          </Routes>
        </div>
    </Router>
  );
};

export default App;
