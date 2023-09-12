// in ActionProvider.jsx
import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGotIt = (userMessage) => {
    const userMessageBot = createClientMessage(userMessage);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessageBot],
    }));

    const botMessage = createChatBotMessage("Pick a slot !", {
      withAvatar: true,
      delay: 600,
      widget: "calender",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDateSelected = (val) => {
    console.log(val);
  };

  const handleDefault = () => {
    const botMessage = createChatBotMessage(
      "I'm not sure how to respond to that."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
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
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
