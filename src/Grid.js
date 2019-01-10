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
      win: 'Tie',
      hasWon: false
    };
    this.handleClick = this.handleClick.bind(this)
    this.checkWinner = this.checkWinner.bind(this)
    this.checkTie = this.checkTie.bind(this)
    this.checkWinAcross = this.checkWinAcross.bind(this)
    this.checkWinVertical = this.checkWinVertical.bind(this)
    this.checkWinDiagonial = this.checkWinDiagonial.bind(this)
    this.changeHasWon = this.changeHasWon.bind(this)
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
  changeHasWon(){
    this.setState(st => ({...st,hasWon: !st.hasWon}))
  }

  checkWinAcross(y,x){
    // debugger;
    for(let item of this.state.board[y]){
      if(item !== this.props.currPlayer){
        return false
      }
    }
    return true;
  }

  checkWinVertical(y,x){
    // debugger;
    for(let i = 0; i < this.state.board.length; i++){
      if(this.state.board[i][x] !== this.props.currPlayer){
        return false
      }
    }
    return true
  }
  checkWinDiagonial(y,x){
   
    let topLeft = this.state.board[0][0] 
    let topRight = this.state.board[0][2]  
    let bottomRight = this.state.board[2][2] 
    let bottomLeft = this.state.board[2][0] 
    let middle = this.state.board[1][1] 
    
    if(middle === this.props.currPlayer){
      if(topLeft === this.props.currPlayer && bottomRight === this.props.currPlayer){
        return true;
      }
      else if(topRight === this.props.currPlayer && bottomLeft === this.props.currPlayer){
        return true;
      }
    }
    
    return false;
  }
  

  
  checkWinner(y,x){
    // check if someone wins lol
    // look to see if there are currPlayer side to side, diagonal and up and down
    // side to side
    if(this.checkWinAcross(y,x)){
      this.changeHasWon()
    }
    if(this.checkWinVertical(y,x)){
      this.changeHasWon()
    }
    if(this.checkWinDiagonial(y,x)){
      this.changeHasWon()
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
    if(!this.state.hasWon){
      let newBoard = this.state.board;
      newBoard[y][x] = this.props.currPlayer;
  
      this.setState({
        board: newBoard,
      });
  
      this.checkWinner(y,x)
      
      this.props.handleChangePlayer();
    }

  }

  render() {
    let grid = this.state.board.map((row,y) => (
      <div className="row">{row.map((square,x) => (
          <Square value={square} y={y} x={x} handleClick={this.handleClick}></Square>
        ))} 
      </div>
    ))
    
    let winCondition = (this.state.hasWon ? <h1>YOU WON</h1> : '' )

      
    

    return (
      <div className="Grid">
        {grid}
        {winCondition}
      </div>
    );
  }
}

export default Grid;
