import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js'
import axios from "axios"


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            open: false,
            hiddenLogin: false
        }

        this.handleShowOrHide = this.handleShowOrHide.bind(this)
    }
    handleShowOrHide() {
        this.setState({ hiddenLogin: !this.state.hiddenLogin })
    }
    updateEmail(e) {
        this.setState({ email: e.target.value })
    }

    updatePassword(e) {
        this.setState({ password: e.target.value })
    }
    async login() {
        if (!this.state.email || !this.state.password) return alert('wrongo fill in the rest')
        let res = await axios.post(`/auth/login`, {
            email: this.state.email,
            password: this.state.password
        }).then((res) => {

            this.props.history.push('/kidprofile')

        }).catch((err) => { alert("Did not find that Email or Password. Please try again or Register") }
        )
    }

    async signup() {
        if (!this.state.email || !this.state.password) return alert('wrongo fill in the rest')
        let res = await axios.post(`/auth/signup`, { email: this.state.email, password: this.state.password })
        console.log("we made it to the front end", res)
    }
    async logOut() {
        axios.get(`/auth/logout`)
    }
    
   

    render() {
       
        return (
            <div className="bigbox">
                <div className="everything">
                    <div className="santa2">
                        <div className="santa1">
                            <div className="santa3">
                        <Link to="/dashboard">
                            <button><h1>S</h1></button>
                        </Link>
                        .wiftly <h1>A</h1>.llocating <h1>N</h1>.ew <h1>T</h1>.hings to <h1>A</h1>.ll
                            </div>
                            <div className="santa4">
                        <Link to="/dashboard">
                            <button><h1>S</h1></button>
                        </Link>
                        .<h1>A</h1>. <h1>N</h1>.<h1>T</h1>.<h1>A</h1>.
                            </div>
                        </div>
                    </div>
                    <div className="city">
                        <Particles style={{
                            width: '100%',
                            minHeight: '100vh',
                            height: "100%",
                        }}
                            params={{ "particles": { "number": { "value": 446, "density": { "enable": true, "value_area": 1736.124811591 } }, "color": { "value": "#fff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 5, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 6, "direction": "bottom", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }} />
                    </div>
                    <br />
                    <br />
                    <div className="loginbut">
                        <div className="imakid">
                            <button onClick={this.handleShowOrHide}>GET ON SANTAS LIST</button>
                        </div>
                    </div>
                </div>
                <div className="outerkidlogin" >
                   {this.state.hiddenLogin &&  <div className="kidLogin">
                        
                        <h1>WELCOME!!<p>THE NORTH POLE HAS GOTTEN SO BUSY AROUND CHRISTMAS TIME. THE BEST WAY TO GET ON SANTAS LIST IS TO USE THIS APP. SIGN IN BELOW!</p></h1>
                        <div >
                            <input type="text" onChange={(e) => this.updateEmail(e)} placeholder="Email" />
                            <input type="password" placeholder="Password" onChange={(e) => this.updatePassword(e)} />                        
                        </div>
                        <div className="KidLoginarea">
                            <button onClick={() => this.login()}>Login</button>
                            <button onClick={() => this.signup()}>Register</button>
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}
export default Login




