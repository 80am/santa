import React, { Component } from 'react';
import Gcheck from '../images/green circle.jpg';
import axios from 'axios'

class cardComponentFront extends Component {
  constructor(props) {
    super(props)
    this.state={
      showEdit: "show",
      showSave: "hide",
      kids: this.props.kid
    }
    this.handleBKnow=this.handleBKnow.bind(this)
  }

  handleBKnow(id){
    axios.put(`/api/changeBKnow/${id}`).then(res=>{this.setState({kids: res.data})})
    
  }
  

  render() {
    
    const {handleClick}=this.props
    console.log("this is kid",this.state.kids)
    
    return (
          
            <div className="kidbox" key={this.state.kids.id} >
              <div className="kidboxborder">
                <div className="kidboxlefthalf">
                  <div className="kidboxpicture1">
                    <img src={`${this.state.kids.kidpic}`} alt="" height="100%" width="75%" />
                  </div>
                  <div className="kidboxlowerhalf">
                    <div>
                      <a className="kidname">
                        {`${this.state.kids.firstname}`.toUpperCase()}
                        <br />
                        {`${this.state.kids.lastname}`.toUpperCase()}
                      </a>
                      <a>{`${this.state.kids.toy_name}`.toUpperCase()}</a>
                    </div>
                  </div>
                  <div className="moreinfobutton">
                    <button onClick={handleClick}>More Info</button>
                  </div>
                </div>

                <div className="kidboxrightinfo">
                  <div className="giftready">
                    <img src={`${this.state.kids.toy_picture}`} alt="" height="100%" width="100%" />
                  </div>
                  <div className="check">
                    <h9>Does Bernard Know?</h9>
                    {console.log(this.state.kids.doesbknow)}
                    {this.state.kids.doesbknow === 'no' || this.state.kids.doesbknow === null ?
                    <button className="redcheck" onClick={()=>this.handleBKnow(this.state.kids.id)}></button>:
                    <button  className="greencheck"></button>
                    }
                  </div>
                </div>
              </div>
            </div>
        

    )
  }
}
export default cardComponentFront
