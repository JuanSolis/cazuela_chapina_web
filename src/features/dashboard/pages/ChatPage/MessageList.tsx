import React from "react";

interface Message {
  role: string;
  content: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow p-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`p-2 mb-2 rounded ${
            message.role === "user"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          <p className="text-sm">{message.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;