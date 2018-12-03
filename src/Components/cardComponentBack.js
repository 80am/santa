import React, { Component } from 'react';
import axios from "axios"
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;



class cardComponentBack extends Component {
    

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    

    // componentDidMount() {
    //     console.log(this.state.kid.kid)
    //     axios.get(`/api/googlemaps/${this.state.kid.kid.address}`)
    //         .then((res) => {
    //             this.setState({ map: res.data.address })
    //         })
    //         .catch((err) => {
    //             console.log(`BERRORS `, err);
    //         })
    // }
    render(props) {
        const { kid } = this.props
        const { handleClick } = this.props
        var latNum = parseFloat(kid.lat)||0
        
        const lngNum = Number(kid.lng)
        if(kid.id === 39){
            console.log("this is lat and lng",latNum, lngNum)
     
            console.log("this is kid.zip", kid.zip)
            console.log(kid.lat)
            console.log(latNum === 40.5203238)
            console.log(lngNum === -122.491572 )
            
        }
        return (
            <div className="backofcard">
                <div>
                    <div style={{ height: '280px', width: '410px', fontWeight: 'bold', fontSize:'50px'}}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPSKEY }}
                            defaultCenter={{
                                
                                lat: latNum,
                                lng: lngNum 
                            }}
                            defaultZoom={11}
                        >
                            <AnyReactComponent
                                lat={latNum}
                                lng={lngNum}
                                // text={`${kid.firstname}`+ ` lives here`}
                                font-color="#ffff"
                                
                            />
                        </GoogleMapReact>
                    </div>

                </div>

                <div>
                    <button className="flipbackbutton" onClick={handleClick}>Flip Back</button>

                </div>
            </div>
        )
    }
}
export default cardComponentBack