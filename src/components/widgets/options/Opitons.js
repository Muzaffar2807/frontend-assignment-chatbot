import React, { useState } from "react";

const TimeSelector = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    // You can apply your active styles or logic here
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h2>Time Selector</h2>
      <div>
        <label>Morning:</label>
        <select
          value={selectedTime}
          onChange={(e) => handleTimeChange(e.target.value)}
        >
          <option value="">Select Time</option>
          <option value="10am-12am">10am - 12am</option>
        </select>
      </div>
      <div>
        <label>Noon:</label>
        <select
          value={selectedOption}
          onChange={(e) => handleOptionChange(e.target.value)}
        >
          <option value="">Select Time</option>
          <option value="1pm-6pm">1pm - 6pm</option>
        </select>
      </div>

      <div>
        <h3>Selected Time: {selectedTime}</h3>
        <h3>Selected Option: {selectedOption}</h3>
      </div>
    </div>
  );
};

export default TimeSelector;
