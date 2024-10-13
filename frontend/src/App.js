import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import VideoConferencing from './video';
import Navbar from './navbar'; // Import the Navbar
import Schedule from './schedule';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/video" element={<VideoConferencing />} />
            <Route path="/schedule" element={<Schedule />} />
            {/* Define additional pages here */}
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;