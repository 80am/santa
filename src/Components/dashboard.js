import Tree from '../images/christmastree.jpg'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import axios from "axios"
import { connect } from 'react-redux'
import './dashboard.css'
require('typeface-roboto')


class Dashboard extends Component{
    constructor(props){
        super(props)

        this.state={

        }
    }


    render(){
        return(
            <mainbody>
            <div className="drop10"></div>
                <header>
                    <headerleft>
                    <h1>S</h1>.wiftly <h1>A</h1>.llocate <h1>N</h1>.ew <h1>T</h1>.hings to <h1>A</h1>.ll
                    </headerleft>
                    <img src={Tree} alt=""/>
                    <headercenter>
                       
                  </headercenter>
                    <headerright>

                    </headerright>
                </header>
                    <div className="drop10"></div>
                <lowerbody>
                    <div className="middlelowerbox">

                    </div>
                </lowerbody>


            </mainbody>
        )
    }
}

export default Dashboard
