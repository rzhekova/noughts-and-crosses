import React from "react";
import NewGameButton from "./NewGameButton";

const NewGame = ({ handleNewGameClick, handleFirstTurnClick }) => {
  return (
    <div>
      <NewGameButton 
       handleNewGameClick={handleNewGameClick}
      />
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
