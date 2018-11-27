import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import axios from "axios"
import './kidprofile.css'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
// import { Upload, message, Button, Icon } from 'antd';
import ImageUploader from 'react-images-upload'
import { v4 as randomString } from 'uuid'
import Dropzone from 'react-dropzone'
import { GridLoader } from 'react-spinners';







class Kidprofile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            address: "",
            city:"",
            state: "",
            zip: "",
            country: "",
            wish: "",
            age: "",
            n_or_n: "",
            deer: "",
            kidPic: "",
            toyPic: "",
            open: false,
            // kidpictures: [],
            // toypictures: [],
            isUploading: false,
            url: '',
          
        }
        // this.onDrop = this.onDrop.bind(this);
        // this.onDrop1 = this.onDrop1.bind(this);
        this.handleFirst = this.handleFirst.bind(this)
        this.handleLast = this.handleLast.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleZip = this.handleZip.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleCountry = this.handleCountry.bind(this)
        this.handleWish = this.handleWish.bind(this)
        this.handleAge = this.handleAge.bind(this)
        this.handleDeeds = this.handleDeeds.bind(this)
        this.handleDeer = this.handleDeer.bind(this)
        this.sendToSanta = this.sendToSanta.bind(this)

    }

    getSignedRequest = ([file]) => {
        console.log(file)
        this.setState({ isUploading: true });
        const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;
        axios
        .get('/api/amazons3', {params: {'file-name': fileName,'file-type': file.type},
        })
        .then(response => {
          const { signedRequest, url } = response.data;
          this.uploadFile(file, signedRequest, url);
        })
        .catch(err => {
          console.log(err);
        });
    }
    uploadFile = (file, signedRequest, url) => {
        console.log(url)
        const options = {
          headers: {
            'Content-Type': file.type,
          },
        };
    
        axios
          .put(signedRequest, file, options)
          .then(response => {
            this.setState({ isUploading: false, url })
            // .then(console.log("this is the url",url))
            // THEN DO SOMETHING WITH THE URL. SEND TO DB 
          })
          
          .catch(err => {
            this.setState({
              isUploading: false,
            });
            if (err.response.status === 403) {
              alert(
                `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
                  err.stack
                }`
              );
            } else {
              alert(`ERROR: ${err.status}\n ${err.stack}`);
            }
          });
          console.log(url)
          this.props.addkidPic(url)
          console.log(url)
      };
    


    // onDrop(picture) {
    //     this.setState({
    //         kidpictures: this.state.kidpictures.concat(picture),
    //     });
    // }
    // onDrop1(picture) {
    //     this.props.addtoyPic({
    //         toypictures: this.state.toypictures.concat(picture),
    //     });
    // }
    onOpenModal = () => {
        this.setState({
            open: true
        })
    }
    onCloseModal = () => {
        this.setState({
            open: false
        })
    }

    handleFirst(e) {
        this.props.addfirstName(e.target.value)
    }
    handleLast(e) {
        this.props.addlastName(e.target.value)
    }
    handleAddress(e) {
        this.props.addaddress(e.target.value)
    }
    handleState(e) {
        this.props.addstate(e.target.value)
    }
    handleCity(e) {
        this.props.addcity(e.target.value)
    }
    handleZip(e) {
        this.props.addzip(e.target.value)
    }
    handleCountry(e) {
        this.props.addcountry(e.target.value)
    }
    handleWish(e) {
        this.props.addwish(e.target.value)
    }
    handleAge(e) {
        this.props.addage(e.target.value)
    }
    handleDeeds(e) {
        console.log(e.target.value)
        if (e.target.value >= 0 && e.target.value <= 20 || 75 <= e.target.value && e.target.value <= 100) {
            console.log('made it into the if statement')
            let naughty = ((e.target.value + 7) / 2)
               let newnaughty = Math.ceil(naughty)
            if (newnaughty%2===0){
                let kidIs = 'naughty'
                console.log(kidIs)
                return this.props.addn_or_n(kidIs)
            }else{
                let kidIs = "nice"
                console.log(kidIs)
                return this.props.addn_or_n(kidIs)
            }     
        }
        else if (e.target.value >= 21 && e.target.value <= 40 || e.target.value>=41 && e.target.value<= 74){
            let naughty = (((e.target.value + 11) - (8 * 7)) / (9*e.target.value))
            let newnaughty = Math.ceil(naughty)
            if (newnaughty%2===0){
             let kidIs = 'naughty'
             console.log(kidIs)
              return this.props.addn_or_n(kidIs)
            }else{
             let kidIs = "nice"
             console.log(kidIs)
              return this.props.addn_or_n(kidIs)
            }
        }
        else{  
            console.log(e.target.value)
            alert("Over 100? Doubt it. Stay at or under 100, Mother Teresa")
        }
        
    }
    handleDeer(e) {
        this.props.adddeer(e.target.value)
    }
    // handlekidPic(e) {
    //     this.props.addkidPic(e.target.value)
    // }
    handletoyPic(e) {
        this.props.addtoyPic(e.target.value)
    }
    sendToSanta(){
        console.log("made it into send to santa")
        axios.post(`/api/sendToSanta/`, this.props.newkid).then(()=>{
            (this.onOpenModal())
        })
        // res.redirect('https://santatracker.google.com/village.html')
        // .catch(()=> {
        //     alert('Dont think so Tim. Try REGISTERING to access these goodies.')
        // })
        // .catch((err) => { 
        //     // (this.onOpenModal()) 
        // })
    }
    logOut(){
        axios.get(`/auth/logout`)
      .then((res) => {this.props.history.push('/')}

      )}

    render() {
        const { open } = this.state;
        const { url, isUploading } = this.state;
        // var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();
        // var x = setInterval(function () {
        //     var now = new Date().getTime();
        //     var distance = countDownDate - now;
        //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //     var clocks = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        //     if (distance < 0) {
        //         clearInterval(x);
        //         var clocks = "SANTA WILL BE BACK NEXT YEAR";
        //     }
        // }, 1000);


       

        return (
            <mainapp>
                <body1 className="body1">
                <div className="bodyleft"></div>
                <div className="bodycenter">
                    <div className="boxlid"></div>
                    <div className="inputbigbox">
                        <div className="inputboxleft">
                            <div className="boxleftup">
                                {/* <div className="kidpic"> </div> */}

                        <Dropzone
                            onDropAccepted={this.getSignedRequest}
                            style={{
                                // position: 'relative',
                                width: 100,
                                height: 100,
                                borderWidth: 5,
                                marginTop: 12,
                                borderColor: 'rgb(102, 102, 102)',
                                borderStyle: 'dashed',
                                borderRadius: 5,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: 20,
                                // paddingBottom: 100,
                                }}
                                accept="image/*"
                                multiple={true}
                                >
                            {isUploading ? <GridLoader /> : <p>Your Picture</p>}
                        </Dropzone>
                        <br/>
                        <img src={url} alt="" width="100%"/>                               
                               
                                
                            </div>
                            <div className="boxleftdown">

                        <Dropzone
                            onDropAccepted={this.getSignedRequest}
                            style={{
                                position: 'relative',
                                width: 100,
                                height: 100,
                                borderWidth: 5,
                                marginTop: 12,
                                borderColor: 'rgb(102, 102, 102)',
                                borderStyle: 'dashed',
                                borderRadius: 5,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: 20,
                                }}
                                accept="image/*"
                                multiple={false}
                                >
                        {isUploading ? <GridLoader /> : <p>Toy Picture</p>}
                        </Dropzone>
                        <br/>
                        <img src={url} alt="" width="100%"/>                                
                            </div>
                        </div>

                        <div className="inputboxright">
                            <input type="text" onChange={this.handleFirst} placeholder="First Name" />
                            <input type="text" onChange={this.handleLast}  placeholder="Last Name" />
                            <input type="text" onChange={this.handleAddress}  placeholder="Street Address" />
                            <input type="text" onChange={this.handleCity} placeholder="City" />
                            <input type="text" onChange={this.handleState} placeholder="State" />
                            <input type="text" onChange={this.handleZip}  placeholder="Zip" />
                            <input type="text" onChange={this.handleCountry}  placeholder="Country" />
                            <input type="text" onChange={this.handleWish}  placeholder="Gift from Santa?" />
                            <input type="text" onChange={this.handleAge}  placeholder="Age" />
                            <input type="text" onChange={this.handleDeeds}  placeholder="0-100 Deeds?" />
                            <div className="deers">
                                <span>
                                    Your Favorite Deer?
                                </span>

                                <select onChange={this.handleDeer}>
                                    <option name="" value=""></option>
                                    <option name="" value="dasher">Dasher</option>
                                    <option name="" value="prancer">Prancer</option>
                                    <option name="" value="vixen">Vixen</option>
                                    <option name="" value="comet">Comet</option>
                                    <option name="" value="cupid">Cupid</option>
                                    <option name="" value="donner">Donner</option>
                                    <option name="" value="blitzen">Blitzen</option>
                                    <option name="" value="rudolph">Rudolph</option>
                                </select>
                            </div>

                            {/* <input type="text" onChange={this.handleDeer} value={this.props.deer} placeholder="Favorite Reindeer"/> */}
                        </div>
                    </div>
                    </div>
                    <div className="bodyright">
                    <button onClick={this.sendToSanta}>Add to Santas List</button>
                    <br/>
                    <button onClick={()=>this.logOut()}>Logout</button>
                    </div>
                    <Modal open={open} onClose={this.onCloseModal}>
                        <h2>THANK YOU!!</h2> 
                            You are on Santas list. He is curently checking it twice
                        
                        <button onClick={this.onCloseModal}>Check Out Santas World</button>
                        
                        {/* <Link to="/"> */}
                        
                        {/* </Link> */}
                    </Modal>
                </body1>
                <div className="middlebody">
                <div className="endofwrapper">
                    <div class="arrow-left"></div>
                    <div class="arrow-left1"></div>
                </div>
                    <div className="middlebody1"></div>
                <div className="endofwrapper">
                    <div class="arrow-right"></div>
                    <div class="arrow-right1"></div>
                </div>
                </div>
                <div className="body11">
                    <div className="body2">
                        <div className="top">
                            <div className="topleft"></div>
                            <div className="topmiddle"></div>
                            <div className="topright"></div>
                        </div>
                        <div className="middle">
                            <div className="middleleft"></div>
                            <div className="middlemiddle"></div>
                            <div className="middleright"></div>
                        </div>
                        <div className="bottom">
                            <div className="bottomleft"></div>
                            <div className="bottommiddle">{this.props.kidPic}</div>
                            <div className="bottomright"></div>
                        </div>
                    </div>
                </div>
            </mainapp>
        )
    }
}

function mapStateToProps(state) {
    return {
        newkid: state.kid,
        firstname: state.kid.firstname,
        lastname: state.kid.lastname,
        address: state.kid.address,
        city: state.kid.city,
        state: state.kid.state,
        zip: state.kid.zip,
        country: state.kid.country,
        age: state.kid.age,
        n_or_n: state.kid.n_or_n,
        deer: state.kid.deer,
        kidpic: state.kid.kidpic,
        toypic: state.kid.toypic
    }
}

const mapDispatchToProps = (dispatch) => ({
    // values going out to state
    // addfirstName: value => dispatch({ type: "ADD_FIRSTNAME", value: value }),

    addfirstName: value => dispatch({ type: "ADD_FIRSTNAME", value: value }),
    addlastName: value => dispatch({ type: "ADD_LASTNAME", value: value }),
    addaddress: value => dispatch({ type: "ADD_ADDRESS", value: value }),
    addcity: value => dispatch({ type: "ADD_CITY", value: value }),
    addstate: value => dispatch({ type: "ADD_STATE", value: value }),
    addzip: value => dispatch({ type: "ADD_ZIP", value: value }),
    addcountry: value => dispatch({ type: "ADD_COUNTRY", value: value }),
    addwish: value => dispatch({ type: "ADD_WISH", value: value }),
    addage: value => dispatch({ type: "ADD_AGE", value: value }),
    addn_or_n: value => dispatch({ type: "ADD_N_OR_N", value: value }),
    adddeer: value => dispatch({ type: "ADD_DEER", value: value }),
    addkidPic: value => dispatch({ type: "ADD_KIDPIC", value: value }),
    addtoyPic: value => dispatch({ type: "ADD_TOYPIC", value: value }),

})
export default connect(mapStateToProps, mapDispatchToProps)(Kidprofile)





