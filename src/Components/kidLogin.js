import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import axios from "axios"
import './kidLogin.css'
import Tree from '../images/colortree.jpg'


class kidLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password:''
            
        }
    }
    updateEmail(e){
        this.setState({ email: e.target.value })
    }
    
      updatePassword(e){
        this.setState({ password: e.target.value })
    }
    async login(){
        if(!this.state.email || !this.state.password) return alert('wrongo fill in the rest')
        let res = await axios.post(`/auth/login`, {
          email: this.state.email,
          password: this.state.password
        }).then((res) => {

            this.props.history.push('/kidprofile')

        }).catch((err) => { alert("Did not find that Email or Password. Please try again or Register") }
        )}
    
      async signup(){
        if(!this.state.email || !this.state.password) return alert('wrongo fill in the rest')
        let res = await axios.post(`/auth/signup`, {email: this.state.email, password: this.state.password})
        console.log("we made it to the front end",res)
      }
      async logOut(){
        axios.get(`/auth/logout`)
      }

    render() {
        return (
            <div className="mainDiv">
                <div className="leftbody1">
                {/* <img src={Tree} alt="" height="50%" width="75%"/> */}
                    {/* <div className="treePic"></div> */}
                </div>
                <div className="rightbody1">
                    <div className="upupright">
                        <div>
                            {/* <h1>SANTA IS GETTING SOME HELP</h1> */}
                        </div>
                        <div className="santa1">
                        <h1>S</h1>.wiftly <h1>A</h1>.llocating <h1>N</h1>.ew <h1>T</h1>.hings to <h1>A</h1>.ll
                        </div>
                        <div>
                        <h1>THE NORTH POLE HAS GOTTEN SO BUSY AROUND CHRISTMAS TIME. THE BEST WAY TO GET ON SANTAS LIST IS TO USE THIS APP. SIGN IN BELOW!</h1>
                        </div>
                    </div>
                    <div className="downdownright">
                        <div className="loginbox">
                            <input type="text"onChange={(e)=> this.updateEmail(e)} placeholder="Email" />
                            <input type="text" placeholder="PassWord" onChange={(e)=> this.updatePassword(e)} />
                            <button onClick={()=>this.signup()}>Register</button>
                            <button onClick={()=>this.login()}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default kidLogin