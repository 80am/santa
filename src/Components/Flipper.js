import React, { Component } from 'react';
import CardComponentFront from './cardComponentFront';
import CardComponentBack from './cardComponentBack';
import ReactCardFlip from 'react-card-flip';
import axios from "axios"

class Flipper extends Component {
    constructor() {
      super()
      this.state = {
        isFlipped: false,
        // bKnow:"",
      }
      this.handleClick = this.handleClick.bind(this);
    //   this.handleBKnow = this.handleBKnow.bind(this);

    }
    // handleBKnow(id){
    //     axios.put(`/api/changeBKnow/${id}`).then((res)=>this.setState({bKnow: res.data}))
        
    // }
    handleClick(e) {
        console.log("handleClick")
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
    render(){
        return(
            <div className="cardflip" >
            <ReactCardFlip isFlipped={this.state.isFlipped}>
            <CardComponentFront key="front" kid={this.props.kid} handleClick={this.handleClick} bKnow={this.props.bKnow} height="300px" width="300px"/>
            <CardComponentBack key="back" kid={this.props.kid} handleClick={this.handleClick} bKnow={this.props.bKnow}/>
            </ReactCardFlip>
            </div>
        )
    }
}   

export default Flipper
