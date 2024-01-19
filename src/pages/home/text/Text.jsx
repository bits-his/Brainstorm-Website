import React, { useState, useEffect } from 'react';
import './text.css'; // Import your CSS file

const Text = () => {
    const words = ['Empower', 'Innovate', 'Create', 'Deliver'];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');

    const animateText = () => {
        const word = words[currentWordIndex];
        const wordLength = word.length;

        for (let i = 0; i <= wordLength; i++) {
            setTimeout(() => {
                setCurrentWord(word.slice(0, i));
            }, i * 150); // Adjust the duration as needed
        }

        setTimeout(() => {
            for (let i = wordLength; i >= 0; i--) {
                setTimeout(() => {
                    setCurrentWord(word.slice(0, i));
                }, (wordLength - i) * 150); // Adjust the duration as needed
            }

            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }, (wordLength + 1) * 150); // Adjust the duration as needed
        }, wordLength * 150 + 1500); // Total duration for writing + waiting
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

export default Text;
