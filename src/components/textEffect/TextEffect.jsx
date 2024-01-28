/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

// Styles
import "./TextEfect.sass";

// React imports
import { useState, useEffect } from "react";

const TextEffect = ({ text1 , fontSize, fontWeigth, color }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    let styleCount = 0;

    // Clear the old phrases
    setWords([]);

    // Take the input value
    let textToArray = text1.toUpperCase();

    // Take the input value and transform the string into an array
    let wordsArray = textToArray.split(" ");

    // This 'for' loop is used to create divs with spans for each letter in each word
    let updatedWords = wordsArray.map((word, index) => (
      <div key={index} className="words">
        <div className="space"></div>
        {word.split("").map((letter, letterIndex) => (
          <span
            key={letterIndex}
            className={`letter ${color}`}
            style={{ "--i": styleCount++ }}
          >
            {letter}
          </span>
        ))}
      </div>
    ));

    // Set the updated words in the state
    setWords(updatedWords);
  }, [text1]);

  return (
    <div>
      <div className={`frase  ${fontWeigth} ${fontSize} `} >{words}</div>
    </div>
  );
};

export default TextEffect;
