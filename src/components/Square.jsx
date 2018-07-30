import React from "react";

const Square = ({ value, clickOnSquare, index }) => {
  return <button onClick={() => clickOnSquare(index)}>{value}</button>;
};

export default Square;
