import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (messageContent: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex items-center bg-white rounded-lg shadow p-2 mt-10">
      <input
        type="text"
        className="flex-1 p-2 border rounded-lg focus:outline-none"
        placeholder="Type your message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleSend}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h11M9 21l11-11-11-11"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatInput;