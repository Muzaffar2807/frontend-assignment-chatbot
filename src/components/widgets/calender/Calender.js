/* import React, { useState } from "react";
import "./Calender.scss";
import DatePicker from "react-horizontal-datepicker";

const Calender = (props) => {
  const [selectedDate, setSelectedDate] = useState([]);


  const selectedDay = (val) => {
   console.log(val)
    props.actions.handleDateSelected(val);
  };
  return (
    <div className="calender-container">
      <DatePicker onClick={(val) => selectedDay(val)} color={"#374e8c"} />
    </div>
  );
};

export default Calender;
 */

/* import React, { useState } from "react";
import "./Calender.scss";
import DatePicker from "react-horizontal-datepicker";
import { createChatBotMessage } from "react-chatbot-kit";

import moment from "moment";

const Calender = (props) => {
  const [selectedDate, setSelectedDate] = useState("");

  const selectedDay = (val) => {
    // Store the selected date and time in state
    setSelectedDate(val);

    // Create a chatbot message with the selected date and time
    const botMessage = createChatBotMessage(moment({val}).format("DD MMM"));

    // Add the message to the chat
    props.actions.handleDateSelected(botMessage);
  };

  return (
    <div className="calender-container">
      <DatePicker    getSelectedDay={(val) => selectedDay(val)}  color={"#374e8c"} />
    </div>
  );
};

export default Calender; */

import React, { useState } from "react";
import "./Calender.scss";
import DatePicker from "react-horizontal-datepicker";
import { createChatBotMessage } from "react-chatbot-kit";
import moment from "moment";

const Calender = (props) => {
  const [selectedDate, setSelectedDate] = useState("");

  const selectedDay = (val) => {
    setSelectedDate(val);

    const botMessage = createChatBotMessage(moment(`${val}`).format("DD MMM"));
    props.actions.handleDateSelected(botMessage);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    // You can apply your active styles or logic here
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const [selectedTime, setSelectedTime] = useState(null);

  const times = ["9AM", "10AM", "11AM", "12AM"];

  const noonTimes = ["1PM", "2AM", "3AM", "5AM"];

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };
  return (
    <div className="calender-container">
      <DatePicker
        getSelectedDay={(val) => selectedDay(val)}
        color={"#374e8c"}
      />

      <div>
        <div>
          <p>Morning:</p>
          <div className="time-options">
            {times.map((time) => (
              <div
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`time-option ${
                  selectedTime === time ? "selected" : ""
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p>Noon:</p>
          <div className="time-options">
            {noonTimes.map((time) => (
              <div
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`time-option ${
                  selectedTime === time ? "selected" : ""
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Calender;
