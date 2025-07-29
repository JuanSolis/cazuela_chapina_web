import { useState } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

const ChatPage = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  const handleSendMessage = (messageContent: string) => {
    const newMessage = { role: "user", content: messageContent };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    
  };

  return (
    <div className="flex flex-col h-150 p-4 bg-gray-100">
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPage;