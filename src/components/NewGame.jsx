import React from "react";

const NewGame = ({ handleNewGameClick, handleFirstTurnClick }) => {
  return (
    <div>
      <button id="new-game" onClick={handleNewGameClick}>
        New Game
      </button>
      <div>
        Choose first player:
        <button
          onClick={handleFirstTurnClick}
          value="X"
          className="first-turn-X"
        >
          X
        </button>
        <button
          onClick={handleFirstTurnClick}
          value="O"
          className="first-turn-O"
        >
          O
        </button>
      </div>
    </div>
  );
};

export default NewGame;
