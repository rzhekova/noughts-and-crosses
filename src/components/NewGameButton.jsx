import React from "react";

const NewGameButton = ({ handleNewGameClick }) => {
  return (
    <button id="new-game" onClick={handleNewGameClick}>
        New Game
    </button>
  );
};

export default NewGameButton;
