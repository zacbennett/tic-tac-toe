import React, { Component } from 'react';
import './Square.css';



class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {class: ""}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt){
    this.props.handleClick(this.props.y,this.props.x);
  }
  
  render() {
    let nameClass = `class${this.props.y}${this.props.x}`
    let value;

    if(!this.props.value){
      value = ''
    }else {
      value = this.props.value
    }

    return (
      <div className={nameClass} onClick={this.handleClick}>
        <h1>{value}</h1>
      </div>
    );
  }
}

export default Square;
