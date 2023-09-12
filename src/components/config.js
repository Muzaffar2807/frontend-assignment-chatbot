import { createChatBotMessage } from "react-chatbot-kit"; 
import GotIt from "./widgets/GotItButton";
import DateCalender from "./widgets/calender/Calender";
import Options from "./widgets/GotItButton";

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
    {
      widgetName: "calender",
      widgetFunc: (props) => <DateCalender {...props} />,
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
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
