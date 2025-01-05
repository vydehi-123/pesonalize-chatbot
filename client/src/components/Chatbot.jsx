import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (userInput.trim()) {
      const newMessages = [
        ...messages,
        { sender: "user", text: userInput },
      ];
      setMessages(newMessages);
      setUserInput("");

      try {
        const response = await fetch("http://localhost:3000/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userInput }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch response from the server.");
        }

        const data = await response.json();

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: data.reply },
        ]);
      } catch (error) {
        console.error("Error sending message:", error);

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Sorry, there was an error processing your message." },
        ]);
      }
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="header-logo">⚕️</div>
        <span>Persnolised Chat</span>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chatbot-message-wrapper ${
              msg.sender === "user" ? "user-wrapper" : "bot-wrapper"
            }`}
          >
            <div
              className={`chatbot-message ${
                msg.sender === "user" ? "user-message" : "bot-message"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>
          <i className="send-icon">➤</i>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
