import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import axios from "axios"
import './kidpast.css'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import ImageUploader from 'react-images-upload'
import { v4 as randomString } from 'uuid'
import Dropzone from 'react-dropzone'
import { GridLoader } from 'react-spinners';


class kidpast extends Component {
    constructor(props){
        super(props)

        this.state={
            oldWish:[]
            
        }
    }
    componentDidMount(){
        axios.get('/api/pastwish').then((res)=>this.setState({oldWish: res.data}))
    }

    handleDelete(id){
        console.log(id)
        axios.put(`/api/kidpast/${id}`).then(res => this.componentDidMount())
    }

    render(){
        console.log(this.state.oldWish)
        const pastWish = this.state.oldWish.map(oneOldWish =>{
            return(
                <div className="outmostdiv" key={oneOldWish.id}>
                <div className="bodycenter1">
                    <button className="boxlid1" onClick={()=>this.handleDelete(oneOldWish.id)}>Delete this Wish</button>
                    <div className="inputbigbox1">
                        <div className="inputboxtop1">
                            <div className="boxleftup1">
                            <img src={oneOldWish.kidpic} width="100%" height="100%"alt=""/>
                            </div>
                           <div className="giftpic">
                            <img src={oneOldWish.toy_picture} width="100%" height="100%" alt=""/>
                            </div>                          
                        </div>
                        <div className="inputboxbottom1">
                        <div className="boxleftdowndown1">
                               You were {oneOldWish.age} and wanting a {`${oneOldWish.wish}`.toUpperCase()}  Your favorite deer was {`${oneOldWish.deer}`.toUpperCase()}
                            </div>

                            
                        </div>
                    </div>
                    <div className="niceNaughty">
                    <div className="innerbox">
                    {/* <div className="stretchnice"> */}
                    {`${oneOldWish.n_or_n}`.toUpperCase()}
                    {/* </div> */}
                    </div>
                    </div>
                    </div>
                    </div>
            )
            
        })

        return(
            <div className="kidpastbackground">
                <div className="backbutton">
                <Link to="./kidprofile">
                <button>Go Back</button>
                </Link>
                </div>
                <div className="secondBox">
               {pastWish}
               </div>
            </div>
        )
    }
}
export default kidpast

{/* <input type="text" onChange={this.handleDeer} value={this.props.deer} placeholder="Favorite Reindeer"/> */}
                    {/* <div className="logoutAdd1">
                    <button onClick={()=>this.delete()}>Delete this Wish</button> */}
                    {/* <br/> */}
                    {/* <button onClick={this.sendToSanta}>Add to Santas List</button> */}
                        {/* </div> */}