import React from "react";

const ScoreTracker = ({ winner, currentTurn, isGameOver }) => {
  if (winner) {
    return <div className="score-tracker">Winner: {currentTurn}</div>;
  } else if (winner === false && isGameOver) {
    return <div className="score-tracker">DRAW! Game Over</div>;
  } else {
    return null;
  }
};

export default ScoreTracker;
