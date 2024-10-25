import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import VideoConferencing from './video';
import Navbar from './navbar';
import Schedule from './schedule';
import Dashboard from './Dashboard'; // Import Dashboard

const App = () => {
  const [userName, setUserName] = useState('John Doe');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const upcomingSessions = [
    { title: 'Math Tutoring', time: 'Today, 3:00 PM' },
    { title: 'Science Study Group', time: 'Tomorrow, 4:30 PM' },
  ];

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/video" element={<VideoConferencing />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/dashboard" element={<Dashboard userName={userName} upcomingSessions={upcomingSessions} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;