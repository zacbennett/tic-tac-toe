import React, { Component } from 'react';
import './Board.css';
import Header from './Header';
import Grid from './Grid';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currPlayer: 'O',
      
    };

    this.handleChangePlayer = this.handleChangePlayer.bind(this)
  }

  handleChangePlayer(){
    this.setState({
      currPlayer: (this.state.currPlayer === 'O' ? 'X' : 'O')
    });
  }
  render() {
    return (
      <div className="Board">
        {/* Contains score, and whose turn it is */}
        {/* <Header/> */}
        <Grid currPlayer={this.state.currPlayer} handleChangePlayer={this.handleChangePlayer}/>
      </div>
    );
  }
}

export default Board;
