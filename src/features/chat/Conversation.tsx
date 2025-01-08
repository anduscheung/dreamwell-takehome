import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { Bar } from "@ant-design/charts";
import TypingEffect from "../../components/typingEffect/TypingEffect";
import { MessageChain, MessageType, PossibleMessages } from "./types";

interface ConversationProps {
  messageChain: MessageChain;
  scrollToBottom: () => void;
}

const Conversation: React.FC<ConversationProps> = ({
  messageChain,
  scrollToBottom,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < messageChain.length) {
      const currentMessage = messageChain[currentIndex];

      let delay = 0;
      if (currentMessage.type === MessageType.text) {
        delay = 10 * currentMessage.data.length + 10;
      } else {
        delay = 500;
      }

      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        scrollToBottom();
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, messageChain, scrollToBottom]);

  const generateComponentByMessage = (
    message: PossibleMessages,
    index: number
  ) => {
    switch (message.type) {
      case MessageType.chart:
        return (
          <Bar
            key={index}
            data={message.data}
            xField="category"
            yField="performance"
            seriesField="category"
            barWidthRatio={0.2}
            colorField="category"
            legend={{ position: "top" }}
            padding={[10, 20, 10, 20]}
            intervalPadding={5}
            barPadding={5}
          />
        );
      case MessageType.table:
        return (
          <Table
            key={index}
            dataSource={message.data}
            columns={message.columns}
            pagination={false}
          />
        );
      case MessageType.text:
        return <TypingEffect key={index} message={message.data} />;

      default:
        return <div key={index}></div>;
    }
  };

  return (
    <>
      {messageChain
        .slice(0, currentIndex + 1)
        .map((item, index) => generateComponentByMessage(item, index))}
    </>
  );
};

export default Conversation;
