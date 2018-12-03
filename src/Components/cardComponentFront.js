import React, { Component } from 'react';
import Gcheck from '../images/green circle.jpg';
import axios from 'axios'

class cardComponentFront extends Component {
  constructor(props) {
    super(props)
    this.state={
      showEdit: "show",
      showSave: "hide",
      // kids: this.props.kid
    }
    // this.handleBKnow=this.handleBKnow.bind(this)
  }

  // handleBKnow(id){
  //   axios.put(`/api/changeBKnow/${id}`).then((res)=>this.setState({kids: res.data}))
    
  // }
  

  render() {
    
    const {handleClick, changebKnow, bknow, kid}=this.props
    // console.log("this is kid",this.state.kids)
    
    return (
          
            <div className="kidbox"  >
              <div className="kidboxborder">
                <div className="kidboxlefthalf">
                  <div className="kidboxpicture1">
                    <img src={`${kid.kidpic}`} alt="" height="100%" width="75%" />
                  </div>
                  <div className="kidboxlowerhalf">
                    <div>
                      <a className="kidname">
                        {`${kid.firstname}`.toUpperCase()}
                        <br />
                        {`${kid.lastname}`.toUpperCase()}
                      </a>
                      <a>{`${kid.toy_name}`.toUpperCase()}</a>
                    </div>
                  </div>
                  <div className="moreinfobutton">
                    <button onClick={handleClick}>More Info</button>
                  </div>
                </div>

                <div className="kidboxrightinfo">
                  <div className="giftready">
                    <img src={`${kid.toy_picture}`} alt="" height="100%" width="100%" />
                  </div>
                  <div className="check">
                    <h9>Does Bernard Know?</h9>
                    {console.log(this.props)}
                    {bknow === 'no' ||bknow === null ?
                    <button className="redcheck" onClick={()=>changebKnow(kid.id)}></button>:
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
