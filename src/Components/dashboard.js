import Tree from '../images/christmastree.jpg'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import axios from "axios"
import { connect } from 'react-redux'
import './dashboard.css'
import Gcheck from '../images/green circle.jpg'


class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <mainbody>
                <div className="drop10"></div>
                <header>
                    <headerleft>
                        <h1>S</h1>.wiftly <h1>A</h1>.llocating <h1>N</h1>.ew <h1>T</h1>.hings to <h1>A</h1>.ll
                    </headerleft>
                    <headercenter>
                        <p> ~The List~</p>

                    </headercenter>
                    <img src={Tree} alt="" />
                    <headerright>

                    </headerright>
                </header>
                <div className="drop10"></div>
                <lowerbody>
                    {/* <div class="parallax"></div> */}

                    <div className="leftlowerbox">
                        <div className="stripecircle">
                        <div className="fontwhitebox"></div>
                        </div>
                        <div className="blankwhitebox"></div>
                    </div>
                    <div className="candycane">
                    
                    </div>
                    <div className="middlelowerbox">
                        <div className="lowermiddleleft">
                            <text1>Nice</text1>
                            <div className="kidbox">
                                <div className="kidboxborder">
                                    <div className="kidboxuperhalf">
                                        <div className="kidboxpicture">
                                            pic
                                    </div>
                                        <div className="kidboxuperinfo">
                                            <div className="giftready">
                                                Gift Ready?
                                        </div>
                                            <div className="check">
                                                <img src={Gcheck} alt="" height="100%" width="100%" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kidboxlowerhalf">
                                        <a className="kidname">Name</a>
                                        <a>What they want</a>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="lowermiddleright">
                            <text1>Naughty</text1>
                        </div>
                        <div className="lowerupperbox">

                        </div>
                    </div>
                    <div className="candycane"></div>

                    <div className="rightlowerbox">
                        <div className="uperlowerrightbox">
                            <br />
                            Filter your Search:
                        <select>
                                <option name="" id=""></option>
                                <option name="" id="">Name</option>
                                <option name="" id="">City</option>
                                <option name="" id="">Country</option>
                                <option name="" id="">Gift</option>
                                <option name="" id="">Age</option>
                            </select>
                            <br />
                            Refine your Search:
                        <select>
                                <option name="" id=""></option>
                                <option name="" id="">City</option>
                                <option name="" id="">Country</option>
                                <option name="" id="">Gift</option>
                                <option name="" id="">Age</option>
                            </select>
                        </div>
                        <div className="push50"></div>
                        <div className="lowerlowerrightbox">
                        <div className="stripecircle1">
                        <div className="fontwhitebox1"></div>
                        </div>
                        <div className="blankwhitebox1"></div>
                        </div>
                    </div>

                </lowerbody>


            </mainbody>
        )
    }
}

export default Dashboard
