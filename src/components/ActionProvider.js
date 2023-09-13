// in ActionProvider.jsx
import React, { useState } from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);

  const addMessageToState = (message) => {
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    addMessageToState(botMessage);
  };

  const handleGotIt = (userMessage) => {
    const userMessageBot = createClientMessage(userMessage);

    addMessageToState(userMessageBot);

    const botMessage = createChatBotMessage("Pick a slot !", {
      delay: 600,
      widget: "calender",
    });

    addMessageToState(botMessage);
  };

  const handleDateSelected = (val, time) => {
    if (val.message && time.message) {
      const selectedDate = `${val.message} ${time.message}`;
      const clientMessage = createClientMessage(selectedDate);

      if (clientMessage) {
        addMessageToState(clientMessage);

        const botMessage = createChatBotMessage("Enter your Name", {
          widget: "username",
          delay: 600,
        });

        addMessageToState(botMessage);
        setIsCalendarVisible(false);
      }
    }
  };

  const handleUserName = (name) => {
    const botMessage = createClientMessage(`${name}`);

    addMessageToState(botMessage);
  };

  const handleInputAge = () => {
    const botMessage = createChatBotMessage("Please Enter your age!", {
      widget: "age",
      delay: 500,
    });

    addMessageToState(botMessage);
  };

  const handleAge = (age) => {
    const botMessage = createClientMessage(`${age}`);

    addMessageToState(botMessage);
  };

  const handleExit = () => {
    const botMessage = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit",
      {
        widget: "exit",
      }
    );

    addMessageToState(botMessage);
  };

  const handleDefault = () => {
    const botMessage = createChatBotMessage(
      "I'm not sure how to respond to that."
    );

    addMessageToState(botMessage);
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleGotIt,
            handleDefault,
            handleDateSelected,
            handleUserName,
            isCalendarVisible,
            handleInputAge,
            handleAge,
            handleExit,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
