import { createChatBotMessage } from "react-chatbot-kit"; 
import GotIt from "./widgets/GotItButton";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      withAvatar: true,
      delay: 600,
      widget: "overview",
    }),
  ],
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <GotIt {...props} />,
      mapStateToProps: ["messages"],
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a",
    },
    chatButton: {
      backgroundColor: "#0f5faf",
    },
  },
};

export default config;
