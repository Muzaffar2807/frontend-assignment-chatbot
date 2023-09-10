 import React from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./ChatPage.scss";
import config from "../../config";
import ActionProvider from "../../ActionProvider";
import MessageParser from "../../MessageParser";

function ChatPage() {
  return (
    <div className="main-chatbot-container">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default ChatPage;
 
  
