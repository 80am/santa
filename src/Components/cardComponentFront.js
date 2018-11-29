import React, { Component } from 'react';
import Gcheck from '../images/green circle.jpg';


class cardComponentFront extends Component {
  constructor() {
    super()
    
  }


  render() {
    const {kid}=this.props
    const {handleClick}=this.props
    console.log("this is kid",kid)
    return (
          
            <div className="kidbox" key={kid.kid_id} >
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
                    Does Bernard Know?
                <img src={Gcheck} alt="" height="25%" width="50%" />
                  </div>
                </div>
              </div>
            </div>
        

    )
  }
}
export default cardComponentFront
