import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import axios from "axios"
import './kidprofile.css'
import { connect } from 'react-redux'


class Kidprofile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            address: "",
            state: "",
            zip: "",
            country: "",
            wish: "",
            age: "",
            deeds: "",
            deer: "",
            kidPic: "",
            toyPic: ""
        }
        this.handleFirst = this.handleFirst.bind(this)
        this.handleLast = this.handleLast.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleZip = this.handleZip.bind(this)
        this.handleCountry = this.handleCountry.bind(this)
        this.handleWish = this.handleWish.bind(this)
        this.handleAge = this.handleAge.bind(this)
        this.handleDeeds = this.handleDeeds.bind(this)
        this.handleDeer = this.handleDeer.bind(this)

    }

    handleFirst(e) {
        this.props.addfirstName(e.target.value)
    }
    handleLast(e) {
        this.props.addlastName(e.target.value)
    }
    handleAddress(e) {
        this.props.addaddress(e.target.value)
    }
    handleState(e) {
        this.props.addstate(e.target.value)
    }
    handleZip(e) {
        this.props.addzip(e.target.value)
    }
    handleCountry(e) {
        this.props.addcountry(e.target.value)
    }
    handleWish(e) {
        this.props.addwish(e.target.value)
    }
    handleAge(e) {
        this.props.addage(e.target.value)
    }
    handleDeeds(e) {
        this.props.adddeeds(e.target.value)
    }
    handleDeer(e) {
        this.props.adddeer(e.target.value)
    }
    handlekidPic(e) {
        this.props.addkidPic(e.target.value)
    }
    handletoyPic(e) {
        this.props.addtoyPic(e.target.value)
    }


    render() {
        var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            var clocks = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            if (distance < 0) {
                clearInterval(x);
                var clocks = "SANTA WILL BE BACK NEXT YEAR";
            }
        }, 1000);

        return (
            <mainapp>
                <body1 className="body1">
                    <div className="boxlid"></div>
                    <div className="inputbigbox">
                        <div className="inputboxleft">
                            <div className="boxleftup">
                                <div className="kidpic"></div>
                                <button>Upload Your Picture</button>
                            </div>
                            <div className="boxleftdown">
                                <div className="kidpic"></div>
                                <button>Upload Toy Picture</button>
                            </div>
                        </div>

                        <div className="inputboxright">
                            <input type="text" onChange={this.handleFirst} value={this.props.firstname} placeholder="First Name" />
                            <input type="text" onChange={this.handleLast} value={this.props.lastname} placeholder="Last Name" />
                            <input type="text" onChange={this.handleAddress} value={this.props.address} placeholder="Street Address" />
                            <input type="text" onChange={this.handleState} value={this.props.state} placeholder="State" />
                            <input type="text" onChange={this.handleZip} value={this.props.zip} placeholder="Zip" />
                            <input type="text" onChange={this.handleCountry} value={this.props.country} placeholder="Country" />
                            <input type="text" onChange={this.handleWish} value={this.props.wish} placeholder="Your mostest wanted thing" />
                            <input type="text" onChange={this.handleAge} value={this.props.age} placeholder="Age" />
                            <input type="text" onChange={this.handleDeeds} value={this.props.deeds} placeholder="How many nice things have you done this year?" />
                            <div classname="deers">
                                <span>
                                    Your Favorite Deer?
                                </span>

                                <select onChange={this.handledeer}>
                                    <option name="" value=""></option>
                                    <option name="" value="dasher">Dasher</option>
                                    <option name="" value="prancer">Prancer</option>
                                    <option name="" value="vixen">Vixen</option>
                                    <option name="" value="comet">Comet</option>
                                    <option name="" value="cupid">Cupid</option>
                                    <option name="" value="donner">Donner</option>
                                    <option name="" value="blitzen">Blitzen</option>
                                    <option name="" value="rudolph">Rudolph</option>
                                </select>
                            </div>

                            {/* <input type="text" onChange={this.handleDeer} value={this.props.deer} placeholder="Favorite Reindeer"/> */}
                        </div>
                    </div>
                </body1>
                <div className="middlebody">
                <div className="endofwrapper">
                    <div class="arrow-left1"></div>
                    <div class="arrow-left"></div>
                </div>
                    <div className="middlebody1"></div>
                <div className="endofwrapper">
                    <div class="arrow-right"></div>
                    <div class="arrow-right1"></div>
                </div>
                </div>
                <div className="body11">
                    <div className="body2">
                        <div className="top">
                            <div className="topleft"></div>
                            <div className="topmiddle"></div>
                            <div className="topright"></div>
                        </div>
                        <div className="middle">
                            <div className="middleleft"></div>
                            <div className="middlemiddle"></div>
                            <div className="middleright"></div>
                        </div>
                        <div className="bottom">
                            <div className="bottomleft"></div>
                            <div className="bottommiddle"></div>
                            <div className="bottomright"></div>
                        </div>
                    </div>
                </div>
            </mainapp>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         newkid: state.kid,
//         firstname: state.kid.firstname,
//         lastname: state.kid.lastname,
//         address: state.kid.address,
//         state: state.kid.state,
//         zip: state.kid.zip,
//         country: state.kid.country,
//         age: state.kid.age,
//         deeds: state.kid.deeds,
//         deer: state.kid.deer,
//         kidpic: state.kid.kidpic,
//         toypic: state.kid.toypic
//     }
// }

const mapDispatchToProps = dispatch => ({
    // values going out to state
    addfirstName: value => dispatch({ type: "ADD_FIRSTNAME", value: value }),
    addlastName: value => dispatch({ type: "ADD_LASTNAME", value: value }),
    addaddress: value => dispatch({ type: "ADD_ADDRESS", value: value }),
    addstate: value => dispatch({ type: "ADD_STATE", value: value }),
    addzip: value => dispatch({ type: "ADD_ZIP", value: value }),
    addcountry: value => dispatch({ type: "ADD_COUNTRY", value: value }),
    addwish: value => dispatch({ type: "ADD_WISH", value: value }),
    addage: value => dispatch({ type: "ADD_AGE", value: value }),
    adddeeds: value => dispatch({ type: "ADD_DEEDS", value: value }),
    adddeer: value => dispatch({ type: "ADD_DEER", value: value }),
    addkidPic: value => dispatch({ type: "ADD_KIDPIC", value: value }),
    addtoyPic: value => dispatch({ type: "ADD_TOYPIC", value: value }),

})
export default connect(mapDispatchToProps)(Kidprofile)





