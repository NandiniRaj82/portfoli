'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
}

const TypingAnimation = ({ texts, className = '' }: TypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <span className={`${className} inline-block`}>
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="ml-1 text-purple-400"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypingAnimation;