import React,  { useEffect }from 'react'; // Import React library
import './dashboard.css'; // Import custom CSS for styling
import { FiClock, FiCalendar, FiVideo, FiBook } from 'react-icons/fi'; // Import icons
import { useNavigate } from 'react-router-dom';

// Dashboard component receives userName and upcomingSessions as props
const Dashboard = ({ userName, upcomingSessions }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login"); // Redirect to login if no token
        }
      }, [navigate]);

  return (
    <div className="dashboard-container">
      {/* Display a welcome message with the user's name */}
      <h2 className="welcome-message">Welcome to StudyBuddy, {userName}</h2>

      {/* Container for displaying upcoming sessions */}
      <div className="upcoming-sessions-container">
        <div className="upcoming-header">
          <FiCalendar size={20} /> {/* Calendar icon */}
          <h3>Upcoming Sessions</h3>
        </div>

        {/* List of upcoming sessions */}
        <div className="sessions-list">
          {upcomingSessions.map((session, index) => (
            <div key={index} className="session-card">
              <h4>{session.title}</h4> {/* Session title */}
              <p>{session.time}</p> {/* Session time */}
            </div>
          ))}
        </div>
      </div>

      {/* Container for quick actions */}
      <div className="quick-actions-container">
        <div className="quick-actions-header">
          <FiClock size={20} /> {/* Clock icon */}
          <h3>Quick Actions</h3>
        </div>

        {/* Buttons for quick actions: Join Session and Study Tools */}
        <div className="actions-buttons">
          <button className="join-button">
            <FiVideo size={18} /> {/* Video icon */}
            Join Session
          </button>
          <button className="study-tools-button">
            <FiBook size={18} /> {/* Book icon */}
            Study Tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
