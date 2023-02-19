import React from "react";
import "./HangmanKeyboard.css";

const keyboardLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

type HangmanKeyboardProp = {
  disabled: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  handleSelectLetter: (letter: string) => void;
};

export const HangmanKeyboard = ({
  disabled = false,
  activeLetters,
  inactiveLetters,
  handleSelectLetter,
}: HangmanKeyboardProp) => {
  return (
    <div className="hangman-keyboard">
      {keyboardLetters.map((letter) => {
        const isActive = activeLetters.includes(letter);
        const isInactive = inactiveLetters.includes(letter);
        return (
          <button
            key={letter}
            onClick={() => handleSelectLetter(letter)}
            className="hangman-keyboard-button"
            disabled={isInactive || isActive || disabled}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};
