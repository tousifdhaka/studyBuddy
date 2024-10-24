import React, { useState } from 'react';
import './schedule.css';

const Schedule = () => {
  const [availability, setAvailability] = useState(Array(7).fill(Array(19).fill(false)));

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
        <div className="schedule-grid">
          <div className="time-labels">
            {['Time', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 pm', '12:00 am'].map((time, index) => (
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
      <div className="save-availability">
        <button className="save-button">Save Availability</button>
      </div>
    </div>
  );
};

export default Schedule;
