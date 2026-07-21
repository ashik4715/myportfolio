import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </motion.span>
  );
};

export default AnimatedText;
