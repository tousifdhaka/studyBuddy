import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './scheduleTutoree.css'; // Ensure this file includes necessary styling for displaying the schedule

const ScheduleTutoree = () => {
  const [tutors, setTutors] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {

      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login"); // Redirect to login if no token
      }

    // Fetch all tutors with their availability data
    async function fetchTutors() {
      try {
        const response = await fetch('http://localhost:1337/api/tutors');
        const data = await response.json();
        if (data.status === 'ok') {
          setTutors(data.tutors);
        }
      } catch (error) {
        console.error('Error fetching tutors', error);
      }
    }

    fetchTutors();
  }, []);

  return (
    <div className="schedule-container">
      <h2>Available Tutoring Slots</h2>
      {tutors.length === 0 ? (
        <p>No tutors available at this time.</p>
      ) : (
        tutors.map((tutor) => {
          // Filter available slots for the tutor
          const availableSlots = tutor.availability.flatMap((day, dayIndex) =>
            day.map((slot, timeIndex) => {
              if (slot) {
                return { day: dayIndex, time: `${7 + timeIndex}:00` }; // Return day and time for available slots
              }
              return null;
            })
          ).filter(Boolean); // Filter out null values

          return (
            <div key={tutor._id} className="tutor-availability">
              <h3>{tutor.name}</h3> {/* Display the tutor's name */}
              {availableSlots.length === 0 ? (
                <p>No available slots</p>
              ) : (
                <div className="availability-list">
                  {availableSlots.map((slot, index) => (
                    <div key={index} className="time-slot">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][slot.day]}: {slot.time}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default ScheduleTutoree;