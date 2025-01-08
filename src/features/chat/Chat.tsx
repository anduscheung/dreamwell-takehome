import React, { useEffect, useRef, useState } from "react";
import Conversation from "./Conversation.tsx";
import styles from "./Chat.module.scss";
import { Message, MessageType, Sender } from "./types.ts";
import { RESPONSE_DATA, SUGGESTIONS } from "../../constants/chat.constants.ts";
import Loading from "../../components/loading/Loading";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: Sender.bot,
      messages: [
        {
          type: MessageType.text,
          data: "Hi! Ask me anything about your campaign!",
        },
      ],
    },
  ]);

  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = () => {
    if (!input.trim()) return;

    const response = RESPONSE_DATA[input];
    const nextUserMessage: Message = {
      sender: Sender.user,
      messages: [{ type: MessageType.text, data: input }],
    };

    setMessages((prevMessages) => prevMessages.concat(nextUserMessage));
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const nextBotMessage: Message = {
        sender: Sender.bot,
        messages: response
          ? response
          : [
              {
                type: MessageType.text,
                data: "I don't have an answer for that.",
              },
            ],
      };
      setMessages((prevMessages) => prevMessages.concat(nextBotMessage));
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={styles["chat-container"]}>
      <div className={styles["chat-messages"]}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              msg.sender === Sender.bot ? styles.bot : styles.user
            }`}
          >
            <Conversation
              messageChain={msg.messages}
              scrollToBottom={scrollToBottom}
            />
            {index !== 0 && index % 2 == 0 && (
              <div className={styles["conversation-divider"]} />
            )}
          </div>
        ))}

        {isLoading && (
          <div className={styles["loading-container"]}>
            <Loading />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
      <div className={styles["chat-suggestions"]}>
        {SUGGESTIONS.map((suggestion, index) => (
          <button
            key={index}
            className={styles["suggestion-button"]}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
      <div className={styles["input-container"]}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question..."
        />
        <button onClick={handleSend}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14m-7-7l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;
