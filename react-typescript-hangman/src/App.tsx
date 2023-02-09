import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [wordToGuess, setWordToGuess] = useState("Test");

  return (
    <div className="App">
      <h1>hangman</h1>
    </div>
  );
}

export default App;
