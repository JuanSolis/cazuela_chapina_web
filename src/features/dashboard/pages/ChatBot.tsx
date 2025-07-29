import { useState } from "react";
import Label from "../../../common/form/Label";
import Input from "../../../common/form/input/InputField";
import Button from "../../../common/ui/button/Button";

export default function ChatBot() {
    const [inputValue, setInputValue] = useState("");
  
  const IA_API_KEY = import.meta.env.VITE_IA_KEY;
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `👋 ¡Hola! Estoy aquí para ayudarte.
Puedes preguntarme lo que quieras: desde resolver una duda técnica, escribir un texto, generar ideas creativas o explicarte algo paso a paso.
Solo dime qué necesitas 😊`,
    },
  ]);

  const chatData = async (userMessage: any) => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${IA_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [...messages, { role: "user", content: userMessage }],
            temperature: 0.7,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Oops! Something went wrong while processing your request."
        );
      }

      const responseData = await response.json();
      setIsTyping(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: responseData.choices[0].message.content,
        },
      ]);
    } catch (error) {
      console.error("Error while fetching chat data:", error);
      setIsTyping(false);
    }
  };

  const handleSendMessage = (messageContent: any) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: messageContent },
    ]);
    chatData(messageContent);
    setIsTyping(true);
  };

  return (
    <>
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
            <p className="text-xs">{message.role}</p>
          </div>
        ))}
        {isTyping && <p>Bot is typing...</p>}
      </div>

      <form>
        <div className="flex items-center bg-white rounded-lg shadow p-2 mt-10">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg focus:outline-none"
            placeholder="Type your message..."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            disabled={isTyping}
            className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => {
              if (inputValue.trim() !== "") {
                handleSendMessage(inputValue);
                setInputValue("");
              }
            
            }}
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
      </form>
    </>
  );
}
