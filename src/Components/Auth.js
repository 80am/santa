// import React, { Component } from 'react'
// import './Auth.css'
// import axios from 'axios'


// class Auth extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             email: '',
//             password: ''
//         }
//     }
//     updateEmail(e) {
//         this.setState({ email: e.target.value })
//     }

//     updatePassword(e) {
//         this.setState({ password: e.target.value })
//     }

//     async login() {
//         if (!this.state.email || !this.state.password) return alert('Impersinating Santa.... Naughty LIST!')
//         let res = await axios.post(`/auth/login`, {
//             email: this.state.email,
//             password: this.state.password
//         })
//         alert(res.data)
//     }

//     async signup() {
//         if (!this.state.email || !this.state.password) return alert('both need to be filled')
//         let res = await axios.post(`/auth/signup`, { email: this.state.email, password: this.state.password })
//         console.log("we made it to the front end", res)
//     }



//     render() {
//         return (
//             <div className="behindmodal">
//                 <div className="modal">
//                     <h1>Get those Cheeks Rosy</h1>
//                     <p>Email: <input onChange={(e) => this.updateEmail(e)} type="text" /></p>
//                     <p>PassWord: <input onChange={(e) => this.updatePassword(e)} type="text" /></p>
//                     <button onClick={() => this.login()}>Login</button>
//                     <button onClick={() => this.signup()}>Signup</button>
//                     <br />
//                 </div>
//             </div>


//         )
//     }
// }
// export default Auth