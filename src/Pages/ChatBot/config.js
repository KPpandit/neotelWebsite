// config.js
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "NeotelBot",
  initialMessages: [createChatBotMessage("Hi! I'm NeotelBot. How can I assist you today?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#253A7D",
    },
    chatButton: {
      backgroundColor: "#FCB813",
    },
    chatContainer: {
      height: '300px', // Adjust this to control the chat area height
      overflowY: 'auto', // This ensures that scrolling works inside the message area
    },
  },
};


export default config;
