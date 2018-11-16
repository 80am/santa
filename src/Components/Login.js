import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            open: false,
            disabled: true,
            showModal: "hide"
        }
        this.handleModal = this.handleModal.bind(this)
        // this.handleCloseModal = this.handleCloseModal.bind(this)
    }

    // onOpenModal = () => {
    //     this.setState({
    //         open: true
    //     })
    // }
    handleCloseModal = () => {
        this.setState({
            showModal:'hide'
        })
        console.log(this.state.showModal)
    }
    handleModal() {
        this.setState({
            
            showModal: "show"
        })
        console.log(this.state.showModal)
    }

    render() {
        // var modal = !this.state.open ===false ?  :
        return (
            <div className="bigbox">
                {/* <div className={`behindmodal ${this.state.showModal}`} onClick={this.handleCloseModal}>
                    <div className={`modal`}>
                    
                    </div>
                </div> */}
                    <div className="everything">
                        <div className="santa">
                            <Link to="/dashboard">
                                <h1>S</h1>
                            </Link>
                            .wiftly <h1>A</h1>.llocating <h1>N</h1>.ew <h1>T</h1>.hings to <h1>A</h1>.ll
                </div>
                        <div className="city">
                            <Particles style={{
                                // border: '1px', black, solid,
                                width: '100%',
                                minHeight: '100vh',
                                height: "100%",
                                // position: "relative"
                            }}
                                params={{ "particles": { "number": { "value": 446, "density": { "enable": true, "value_area": 1736.124811591 } }, "color": { "value": "#fff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 5, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 6, "direction": "bottom", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }} />
                            {/* <div class="snow"></div> */}
                            {/* <img src={City} alt="" height='100%' width="100%" /> */}
                        </div>
                        <br />
                        <br />
                        <div className="loginbut">

                            <div>
                                {/* <Link to="/dashboard"> */}
                                    <button onClick={this.handleModal} className={`login ${this.state.showEdit}`}>ST KNICK</button>
                                {/* </Link> */}
                            </div>
                            <div className="imakid">
                                <Link to="/kidprofile">
                                    <button>GET ON SANTAS LIST</button>
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Login