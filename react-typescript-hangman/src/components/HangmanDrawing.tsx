import React from "react";
import "./HangmanDrawing.css";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  const HEAD = <div key={1} className="hangman-drawing-head"></div>;
  const BODY = <div key={2} className="hangman-drawing-body"></div>;
  const LEFT_ARM = <div key={3} className="hangman-drawing-left-arm"></div>;
  const RIGHT_ARM = <div key={4} className="hangman-drawing-right-arm"></div>;
  const LEFT_LEG = <div key={5} className="hangman-drawing-left-leg"></div>;
  const RIGHT_LEG = <div key={6} className="hangman-drawing-right-leg"></div>;

  const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

  return (
    <div className="hangman-drawing">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="hangman-drawing-top"></div>
      <div className="hangman-drawing-rope"></div>
      <div className="hangman-drawing-pole"></div>
      <div className="hangman-drawing-bottom"></div>
    </div>
  );
};
