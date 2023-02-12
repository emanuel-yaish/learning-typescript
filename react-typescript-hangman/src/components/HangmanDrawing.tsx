import React from "react";
import "./HangmanDrawing.css";

export const HangmanDrawing = () => {
  return (
    <div className="hangman-drawing">
      <div className="hangman-drawing-head"></div>
      <div className="hangman-drawing-body"></div>
      <div className="hangman-drawing-left-arm"></div>
      <div className="hangman-drawing-right-arm"></div>
      <div className="hangman-drawing-left-leg"></div>
      <div className="hangman-drawing-right-leg"></div>
      <div className="hangman-drawing-top"></div>
      <div className="hangman-drawing-rope"></div>
      <div className="hangman-drawing-pole"></div>
      <div className="hangman-drawing-bottom"></div>
    </div>
  );
};
