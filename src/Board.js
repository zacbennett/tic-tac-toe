import React, { Component } from 'react';
import './Board.css';
import Header from './Header';
import Grid from './Grid';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerTurn: true,
      board: [
        [false, false, false],
        [false, false, false],
        [false, false, false]
      ]
    };
  }
  render() {
    return (
      <div className="Board">
        {/* Contains score, and whose turn it is */}
        {/* <Header/> */}
        <Grid />
      </div>
    );
  }
}

export default Board;
