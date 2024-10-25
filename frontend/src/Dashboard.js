import React from 'react';
import './dashboard.css';
import { FiClock, FiCalendar, FiVideo, FiBook } from 'react-icons/fi';

const Dashboard = ({ userName, upcomingSessions }) => {
  return (
    <div className="dashboard-container">
      <h2 className="welcome-message">Welcome to StudyBuddy, {userName}</h2>

      <div className="upcoming-sessions-container">
        <div className="upcoming-header">
          <FiCalendar size={20} />
          <h3>Upcoming Sessions</h3>
        </div>
        <div className="sessions-list">
          {upcomingSessions.map((session, index) => (
            <div key={index} className="session-card">
              <h4>{session.title}</h4>
              <p>{session.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-actions-container">
        <div className="quick-actions-header">
          <FiClock size={20} />
          <h3>Quick Actions</h3>
        </div>
        <div className="actions-buttons">
          <button className="join-button">
            <FiVideo size={18} />
            Join Session
          </button>
          <button className="study-tools-button">
            <FiBook size={18} />
            Study Tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;