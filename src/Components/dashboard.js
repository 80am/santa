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
            kids:[]
        }
    }
    componentDidMount(){
        axios.get('/api/getallkids').then((res)=>{this.setState({kids: res.data})
        })
    }


    render() {
        let nicekids = this.state.kids.map(nicekid => {
                if (nicekid.n_or_n == 'nice') {

                    return (
                            <React.Fragment key={nicekid.kid_id} >

                                <div className="kidbox">
                                <div className="kidboxborder">
                                    <div className="kidboxlefthalf">
                                            <div className="kidboxpicture1">
                                            <img src={`${nicekid.kidpic}`} alt="" height="100%" width="75%"/>
                                            
                                            </div>
                                        <div className="kidboxlowerhalf">
                                            <a className="kidname">
                                                {(`${nicekid.firstname}`.toUpperCase())}
                                                <br/>
                                                {(`${nicekid.lastname}`.toUpperCase())}
                                            </a>
                                            <a>{(`${nicekid.toy_name}`.toUpperCase())}</a>

                                        </div>
                                    </div>
                                        <div className="kidboxrightinfo">
                                            <div className="giftready">
                                                
                                                <img src={`${nicekid.toy_picture}`} alt="" height="100%" width="100%" />
                                            </div>
                                            <div className="check">
                                                Does Bernard Know?
                                                <img src={Gcheck} alt="" height="25%" width="50%" />
                                            </div>
                                        </div>
                                </div>
                            </div>
                               
                            </React.Fragment> 
                    )
                
                } 
            }
        )    
        let naughtykids = this.state.kids.map(naughtyKid => {
                if(naughtyKid.n_or_n == 'naughty'){
                    
                    return(
                        <React.Fragment key={naughtyKid.kid_id}>

                            
                            <div className="kidbox">
                                <div className="kidboxborder">
                                    <div className="kidboxlefthalf">
                                            <div className="kidboxpicture">
                                            <img src={`${naughtyKid.kidpic}`} alt="" height="100%" width="75%"/>
                                            
                                            </div>
                                        <div className="kidboxlowerhalf">
                                            <a className="kidname">
                                                {(`${naughtyKid.firstname}`.toUpperCase())}
                                                <br/>
                                                {(`${naughtyKid.lastname}`.toUpperCase())}
                                            </a>
                                            <a>{(`${naughtyKid.wish}`.toUpperCase())}</a>

                                        </div>
                                    </div>
                                        <div className="kidboxrightinfo">
                                            <div className="giftready">
                                                
                                                <img src={`${naughtyKid.toy_picture}`} alt="" height="100%" width="100%" />
                                            </div>
                                            <div className="check">
                                                Does Bernard Know?
                                                <img src={Gcheck} alt="" height="25%" width="50%" />
                                            </div>
                                        </div>
                                </div>
                            </div>
            

                        </React.Fragment>
                    )
                }      
                
            } 
        )

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
                {/* <div className="drop10"></div> */}
                <lowerbody>
                    {/* <div class="parallax"></div> */}

                    <div className="leftlowerbox">
                        <div className="loweruperleft">

                            <div className="stripecircle">
                                <div className="fontwhitebox"></div>
                            </div>
                            <div className="blankwhitebox"></div>
                        </div>
                        <div className="lowerlowerleft">

                        </div>
                    </div>
                    <div className="candycane">
                    
                    </div>
                    <div className="middlelowerbox">
                        <div className="lowermiddleleft">
                            <text1>Nice</text1>

                            {nicekids}

                            
                        </div>
                        <div className="lowermiddleright">
                            <text1 className="text1">Naughty</text1>

                            {naughtykids}

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
