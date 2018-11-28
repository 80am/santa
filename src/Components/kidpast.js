import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import axios from "axios"
import './kidpast.css'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
// import { Upload, message, Button, Icon } from 'antd';
import ImageUploader from 'react-images-upload'
import { v4 as randomString } from 'uuid'
import Dropzone from 'react-dropzone'
import { GridLoader } from 'react-spinners';


class kidpast extends Component {
    constructor(props){
        super(props)

        this.state={
            oldWish:[],
            // age:"",
            // toyPic:"",
            // kidPic:"",
            // n_or_n:'',
            // wish:'',
        }
    }
    componentDidMount(){
        axios.get('/api/pastwish').then((res)=>this.setState({oldWish: res.data}))
    }


    render(){
        console.log(this.state.oldWish)

        return(
            <div className="kidpastbackground">
                <div className="backbutton">
                <Link to="./kidprofile">
                <button>Go Back</button>
                </Link>
                </div>
                <div className="outmostdiv">
                <div className="bodycenter1">
                    <button className="boxlid1">Delete this Wish</button>
                    <div className="inputbigbox1">
                        <div className="inputboxtop1">
                            <div className="boxleftup1">
                            </div>
                           <div className="giftpic">
                            gift from santa pic
                            </div>                          
                        </div>
                        <div className="inputboxbottom1">
                        <div className="boxleftdowndown1">
                                years old
                            </div>
                            <div className="giftNameFromSanta">
                            Gift from Santa
                            </div>

                            {/* <input type="text" onChange={this.handleDeer} value={this.props.deer} placeholder="Favorite Reindeer"/> */}
                    {/* <div className="logoutAdd1">
                    <button onClick={()=>this.delete()}>Delete this Wish</button> */}
                    {/* <br/> */}
                    {/* <button onClick={this.sendToSanta}>Add to Santas List</button> */}
                        {/* </div> */}
                        </div>
                    </div>
                    <div className="niceNaughty">
                    <div className="innerbox">
                        Nice or Naughty
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
        )
    }
}
export default kidpast