import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
import ScoreTracker from "./components/ScoreTracker";
import NewGame from "./components/NewGame";

class App extends Component {
  state = {
    grid: ["", "", "", "", "", "", "", "", ""],
    whoseGoIsIt: "",
    winner: null,
    isGameOver: false
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Noughts + Crosses</h1>
        </header>
        <NewGame
          handleFirstTurnClick={this.handleFirstTurnClick}
          handleNewGameClick={this.handleNewGameClick}
        />
        <Grid state={this.state} clickOnSquare={this.clickOnSquare} />
        <ScoreTracker
          winner={this.state.winner}
          currentTurn={this.state.whoseGoIsIt === "X" ? "O" : "X"}
          isGameOver={this.state.isGameOver}
        />
      </div>
    );
  }

  handleFirstTurnClick = event => {
    if (!this.state.whoseGoIsIt) {
      const firstTurn = event.target.value;
      this.setState({ whoseGoIsIt: firstTurn });
    }
  };

  handleNewGameClick = () => {
    this.setState({
      grid: ["", "", "", "", "", "", "", "", ""],
      whoseGoIsIt: "",
      winner: null,
      isGameOver: false
    });
  };

  handleXandO = symbol => {
    if (symbol === "X") {
      return "O";
    } else if (symbol === "O") {
      return "X";
    }
  };

  clickOnSquare = index => {
    const newGrid = [...this.state.grid];
    if (!this.state.grid[index] && !this.state.winner) {
      newGrid[index] = this.state.whoseGoIsIt;
      const winner = this.isAWinner(newGrid);
      const isGameOver = winner
        ? true
        : !winner && newGrid.every(square => square === "X" || square === "O")
          ? true
          : false;
      this.setState({
        grid: newGrid,
        whoseGoIsIt: this.handleXandO(this.state.whoseGoIsIt),
        winner,
        isGameOver
      });
    }
  };

  isAWinner = squares => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [first, second, third] = winningCombinations[i];
      if (
        squares[first] &&
        squares[first] === squares[second] &&
        squares[first] === squares[third]
      ) {
        return true;
      }
    }
    return false;
  };
}

export default App;
