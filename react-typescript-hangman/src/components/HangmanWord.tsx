import React from "react";
import "./HangmanWord.css";

type HangmanWordProps = {
  reveal: boolean;
  guessedLetters: string[];
  wordToGuess: string;
};

export const HangmanWord = ({
  reveal = false,
  guessedLetters,
  wordToGuess,
}: HangmanWordProps) => {
  return (
    <div className="hangman-word">
      {wordToGuess.split("").map((letter: string, index: number) => (
        <span key={index} className="letter-container">
          <span
            style={{
              visibility:
                guessedLetters.includes(letter.toLocaleUpperCase()) || reveal
                  ? "visible"
                  : "hidden",

              color:
                !guessedLetters.includes(letter.toUpperCase()) && reveal
                  ? "red"
                  : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
