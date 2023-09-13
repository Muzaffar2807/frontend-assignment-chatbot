import { createChatBotMessage } from "react-chatbot-kit";
import GotIt from "./widgets/intro/introButton";
import DateCalender from "./widgets/calender/Calender";
import UserName from "./widgets/userName/userName";
import UserAge from "./widgets/userAge/userage";
import Exit from "./widgets/Exit/Exit";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
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
      widgetName: "username",
      widgetFunc: (props) => <UserName {...props} />,
    },
    {
      widgetName: "age",
      widgetFunc: (props) => <UserAge {...props} />,
    },
    {
      widgetName: "exit",
      widgetFunc: (props) => <Exit {...props} />,
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
