import React from "react";

type HangmanMainHeaderProps = {
  isWinner: boolean;
  isLoser: boolean;
};

export const HangmanMainHeader = ({
  isWinner,
  isLoser,
}: HangmanMainHeaderProps) => {
  return (
    <div className="hangman-main-header">
      <h1>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try! - Refresh to try again"}
      </h1>
    </div>
  );
};
