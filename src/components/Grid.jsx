import React from "react";
import Square from "./Square";

const Grid = ({ state, clickOnSquare }) => {
  return (
    <div className="grid">
      {state.grid.map((square, index) => {
        return (
          <Square
            key={index}
            index={index}
            value={square}
            clickOnSquare={clickOnSquare}
          />
        );
      })}
    </div>
  );
};

export default Grid;
