import React, { Component } from 'react';
import './Grid.css';
import Square from './Square.js'


class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [
        [false, false, false],
        [false, false, false],
        [false, false, false]
      ],
      currPlayer: 'O',
      win: 'Tie'
    };
    this.handleClick = this.handleClick.bind(this)
    this.checkWinner = this.checkWinner.bind(this)
    this.checkTie = this.checkTie.bind(this)
    this.checkWinAcross = this.checkWinAcross.bind(this)
    this.checkWinVertical = this.checkWinVertical.bind(this)
  }
  
  checkTie(){
      for(let row of this.state.board){
          for(let item of row){
              if(item === false){
                  return false
              }
          }
      }
      return true;
  }

  checkWinAcross(y,x){
    // debugger;
    for(let item of this.state.board[y]){
      if(item !== this.state.currPlayer){
        return false
      }
    }
    return true;
  }
  checkWinVertical(y,x){
    // debugger;
    for(let i = 0; i < this.state.board.length; i++){
      if(this.state.board[i][x] !== this.state.currPlayer){
        return false
      }
    }
    return true
  }
  

  
  checkWinner(y,x){
    // check if someone wins lol
    // look to see if there are currPlayer side to side, diagonal and up and down
    // side to side
    if(this.checkWinAcross(y,x)){
      console.log('win!')
    }


    // // diagonal
    // // up and down
    // tie!
    if(this.checkTie()){
      this.setState(st => ({...st,win: 'Tie'}))
      console.log('tie!')
    }
    
  }

  handleClick(y,x){
    let newBoard = this.state.board;
    newBoard[y][x] = this.state.currPlayer;

    this.setState({
      board: newBoard,
      currPlayer: (this.state.currPlayer === 'O' ? 'X' : 'O')
    });

    this.checkWinner(y,x)

    this.setState({
      currPlayer: (this.state.currPlayer === 'O' ? 'X' : 'O')
    });

    

  }

  render() {
    let grid = this.state.board.map((row,y) => (
      <div className="row">{row.map((square,x) => (
          <Square value={square} y={y} x={x} handleClick={this.handleClick}></Square>
        ))} 
      </div>
    )
  
      
    )

    return (
      <div className="Grid">
        {grid}
      </div>
    );
  }
}

export default Grid;
