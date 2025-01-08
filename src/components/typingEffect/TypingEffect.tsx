import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  message: string;
  typingSpeed?: number;
  onComplete?: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  message,
  typingSpeed = 10,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    let currentText = ""; // Note: Can't use state because async state update will cause the 2nd charactor missing

    const typingInterval = setInterval(() => {
      if (index < message.length) {
        currentText += message.charAt(index);
        setDisplayedText(currentText);
        index++;
      } else {
        clearInterval(typingInterval);
        if (onComplete) onComplete();
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [message, typingSpeed, onComplete]);

  return <p>{displayedText}</p>;
};

export default TypingEffect;
