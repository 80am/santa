import React, { Component } from 'react'
import './Login.css'
import City from '../images/snow city.jpg'
import {Link}from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <bigbox>
                <div className="everything">
                <div className="santa">
                   <h1>S</h1>.wiftly <h1>A</h1>.llocating <h1>N</h1>.ew <h1>T</h1>.hings to <h1>A</h1>.ll
                </div>
                    <div className="city">
                    {/* <div class="snow"></div> */}
                        {/* <img src={City} alt="" height='100%' width="100%" /> */}
                    </div>
                    <br/>
                    <br/>
                    <div className="loginbut">

                        <div className="login">
                            <Link to="/dashboard">
                            <button>SANTA</button>
                            </Link>
                        </div>
                        <div className="imakid">
                            <button>Im a Kid</button>
                        </div>
                    </div>
                </div>
            </bigbox>
        )
    }
}
export default Login