import { useState } from "react";
import words from "../public/db/wordList.json";
import "./App.css";
import { HangamnMainHeader } from "./components/HangamnMainHeader";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanKeyboard } from "./components/HangmanKeyboard";
import { HangmanWord } from "./components/HangmanWord";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);
  return (
    <div className="App">
      <div className="hangman">
        <HangamnMainHeader />
        <HangmanDrawing />
        <HangmanWord />
        <HangmanKeyboard />
      </div>
    </div>
  );
}

export default App;
