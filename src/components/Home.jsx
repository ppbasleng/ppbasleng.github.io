import React, { useState, useEffect } from 'react';

const Home = () => {
    const wordsArray = ["WORLD", "VIEWER", "YOU", "FRIEND", "EVERYONE", "THERE", "FOLKS"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (currentCharacterIndex < wordsArray[currentWordIndex].length) {
                setCurrentCharacterIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setCurrentCharacterIndex(0);
                    setCurrentWordIndex(prevIndex => (prevIndex + 1) % wordsArray.length);
                }, Math.random() * 2000 + 2000); // Wait for 2 seconds before changing to the next word
            }
        }, 100); // Typing speed

        return () => {
            clearInterval(typingInterval); // Clean up the interval on component unmount
        };
    }, [currentWordIndex, currentCharacterIndex]);

    return (
        <div className="flex w-full justify-center items-center">
            <div className="text-6xl font-bold select-none">
                <span className="inline-block text-left md:text-center" style={{ width: '300px' }}>
                    HELLO
                </span>
                <span className="inline-block" style={{ width: '300px' }}>
                    {wordsArray[currentWordIndex].substring(0, currentCharacterIndex)}
                </span>
            </div>
        </div>
    );
}

export default Home;
