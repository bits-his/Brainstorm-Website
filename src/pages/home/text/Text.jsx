/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './text.css'; 

export default function Text() {
  const words = ["Empower", "Innovate", "Create", "Deliver"];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");

  const animateText = () => {
    const word = words[currentWordIndex];
    const wordLength = word.length;

    for (let i = 0; i <= wordLength; i++) {
      setTimeout(() => {
        setCurrentWord(word.slice(0, i));
      }, i * 150); 
    }

    setTimeout(() => {
      for (let i = wordLength; i >= 0; i--) {
        setTimeout(() => {
          setCurrentWord(word.slice(0, i));
        }, (wordLength - i) * 150);
      }

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, (wordLength + 1) * 150); 
    }, wordLength * 150 + 1500); 
  };
  useEffect(() => {
    animateText();
  }, [currentWordIndex]);

  return (
    <>
      <input
        type="text"
        id="animatedInput"
        className="typing-animation"
        value={currentWord}
        readOnly
      />
    </>
  );
};

