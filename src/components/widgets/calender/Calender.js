import React, { useState, useEffect } from "react";
import "./Calender.scss";
import DatePicker from "react-horizontal-datepicker";
import { createChatBotMessage } from "react-chatbot-kit";
import moment from "moment";

import { useDispatch } from "react-redux";
import { updateDate, updateTime } from "../../redux/userSlice";

const Calender = (props) => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(
    moment().format("DD MMM, ddd")
  );
  const [selectedTime, setSelectedTime] = useState("9AM");
  const times = ["9AM", "10AM", "11AM", "12AM"];
  const noonTimes = ["1PM", "2AM", "3AM", "5AM"];

  const selectedDay = (val, selectedTime) => {
    const formattedDate = moment(val).format("DD MMM, ddd");

    setSelectedDate(val);
    setSelectedTime(selectedTime);
    const botMessage = createChatBotMessage(
      moment(`${val}`).format("DD MMM, ddd")
    );

    const clientMessage = createChatBotMessage(selectedTime);

    props.actions.handleDateSelected(botMessage, clientMessage);

    let date = formattedDate;
    let time = selectedTime;

    dispatch(updateDate({ date }));
    dispatch(updateTime({ time }));
  };

  return (
    <div className="calender-container">
      {props.actions.isCalendarVisible && (
        <>
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
                    onClick={() => selectedDay(selectedDate, time)}
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
                    onClick={() => selectedDay(selectedDate, time)}
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
        </>
      )}
    </div>
  );
};

export default Calender;
