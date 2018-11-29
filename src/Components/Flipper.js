import React, { Component } from 'react';
import CardComponentFront from './cardComponentFront';
import CardComponentBack from './cardComponentBack';
import ReactCardFlip from 'react-card-flip';

class Flipper extends Component {
    constructor() {
      super()
      this.state = {
        isFlipped: false
      }
      this.handleClick = this.handleClick.bind(this);

    }
    handleClick(e) {
        console.log("handleClick")
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
    render(){
        return(
            <div className="cardflip" >
            <ReactCardFlip isFlipped={this.state.isFlipped}>
            <CardComponentFront key="front" kid={this.props.kid} handleClick={this.handleClick} height="300px" width="300px"/>
            <CardComponentBack key="back" kid={this.props.kid} handleClick={this.handleClick}/>
            </ReactCardFlip>
            </div>
        )
    }
}   

export default Flipper
