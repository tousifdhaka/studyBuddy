import React, { useState } from 'react';
import './schedule.css';

const Schedule = () => {
  const [availability, setAvailability] = useState(Array(7).fill(Array(12).fill(false)));

  const toggleTimeSlot = (dayIndex, timeIndex) => {
    const updatedAvailability = availability.map((day, index) =>
      index === dayIndex ? day.map((slot, i) => (i === timeIndex ? !slot : slot)) : day
    );
    setAvailability(updatedAvailability);
  };

  return (
    <div className="schedule-container">
      <h2>Set Your Availability</h2>
      <div className="weekly-schedule">
        <div className="schedule-header">
          <h3>Weekly Schedule</h3>
        </div>
        <div className="schedule-grid">
          <div className="time-labels">
            {['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'].map((time, index) => (
              <div key={index} className="time-slot">
                {time}
              </div>
            ))}
          </div>
          <div className="days-grid">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dayIndex) => (
              <div key={dayIndex} className="day-column">
                <div className="day-label">{day}</div>
                {availability[dayIndex].map((slot, timeIndex) => (
                  <div
                    key={timeIndex}
                    className={`time-slot ${slot ? 'available' : ''}`}
                    onClick={() => toggleTimeSlot(dayIndex, timeIndex)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="quick-selection">
        <h3>Quick Selection</h3>
        <div className="selection-buttons">
          <button className="selection-button">Weekday Mornings</button>
          <button className="selection-button">Weekday Afternoons</button>
          <button className="selection-button">Weekday Evenings</button>
          <button className="selection-button">Weekends</button>
        </div>
      </div>
      <div className="save-availability">
        <button className="save-button">Save Availability</button>
      </div>
    </div>
  );
};

export default Schedule;