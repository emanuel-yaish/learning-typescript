import React, { useCallback, useEffect, useState } from "react";
import words from "./db/wordList.json";
import { HangmanMainHeader } from "./components/HangmanMainHeader";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanKeyboard } from "./components/HangmanKeyboard";
import { HangmanWord } from "./components/HangmanWord";
import "./App.css";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter.toLocaleLowerCase())
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const handleSelectLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[A-Za-z]$/)) return;

      e.preventDefault();
      handleSelectLetter(key.toLocaleUpperCase());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div className="App">
      <div className="hangman">
        <HangmanMainHeader isWinner={isWinner} isLoser={isLoser} />
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />
        <HangmanKeyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter.toLocaleLowerCase())
          )}
          inactiveLetters={incorrectLetters}
          handleSelectLetter={handleSelectLetter}
        />
      </div>
    </div>
  );
}

export default App;
