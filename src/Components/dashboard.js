import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Tree from '../images/christmastree.jpg';
import './dashboard.css';
import Gcheck from '../images/green circle.jpg';
import { Menu, Icon, Button } from 'antd';
import ReactCardFlip from 'react-card-flip';
import Flipper from '../Components/Flipper'



class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kids: [],
      collapsed: false,
      isFlipped: false,
      filterSelect:"",
      // bKnow:"",
    };
    this.handleClick = this.handleClick.bind(this);
    this.filterSelect = this.filterSelect.bind(this);
    this.handleBKnow = this.handleBKnow.bind(this);

  }
  componentDidMount() {
        axios.get('/api/getallkids').then(res => {this.setState({ kids: res.data })
        });
      }
  handleBKnow(id){
    axios.put(`/api/changeBKnow/${id}`).then((res)=>this.setState({kids: res.data}).then(()=>{this.componentDidMount()}))
    
  }
  filterSelect(e) {
    console.log(this.state.filterSelect)
    this.setState({
        filterSelect: e.target.value
    })
  }
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }


  render() {
    if (this.state.kids !=[]) {
      console.log(this.state.kids)
    var alphakids = this.state.kids.sort((a,b) => (a.firstname.toLowerCase() > b.firstname.toLowerCase()) ? 1 : ((b.firstname.toLowerCase() > a.firstname.toLowerCase()) ? -1 : 0));
    console.log("this is alphakids",alphakids)
    var nicekids = alphakids.filter(naughtyKid => naughtyKid.n_or_n == 'nice').map(kid => {
      return (
        <Flipper kid={kid} bKnow={this.handleBKnow}/>
      )
    });
    var naughtykids = alphakids.filter(naughtyKid => naughtyKid.n_or_n == 'naughty').map(kid => {
      return (
        <Flipper kid={kid} bKnow={this.handleBKnow}/>
      )
    });
  }

    return (
      <div className="mainbody">
        {console.log("the body ran")}
        <header>
          <div className="headerleft">
            <h1>S</h1>.wiftly <h1>A</h1>.llocating <h1>N</h1>.ew <h1>T</h1>.hings to <h1>A</h1>.ll
          </div>
          <div className="headercenter">
            
            <p> ~The List~</p>
          </div>
          <div className="reathimage">
          <img src={Tree} alt="" height="100%" with="100%" />
          <img className="flippedtree"src={Tree} alt="" height="100%" with="100%" />
          </div>
        </header>
        <div className="lowerbody">

          <div className="leftlowerbox">
            <div className="loweruperleft">
            <Link to="./">
            <Icon type="home" />
            </Link>
            <Link to="./dashboard">
            <Icon type="calendar" />
            </Link>
            <Icon type="customer-service" />
            <Icon type="message" />
            </div>
            <div className="lowerlowerrightbox">
            {/* ------------------------------------------------------  */}
              <div className="divdiv">
              <div className="stripecircle">
                <div className="fontwhitebox" />
              </div>
              </div>
              <div className="blankwhitebox" />

            {/* ------------------------------------------------------  */}
          </div>
          </div>
          <div className="candycane" />
          <div className="middlelowerbox">
            <div className="lowermiddleleft">
              <h2 className="text1">Nice</h2>
              <div className="listcontainer">{nicekids}</div>
            </div>
            <div className="lowermiddleright">
              <h2 className="text1">Naughty</h2>
              <div className="listcontainer">{naughtykids}</div>
            </div>
            <div className="lowerupperbox" />
          </div>
          <div className="candycane" />

          <div className="rightlowerbox">
            <div className="uperlowerrightbox">
              <br />
              Filter your Search:
              <select onChange={this.filterSelect} className="selectbox">
                  <option value=""></option>
                  <option value="firstname">First Name</option>
                  <option value="lastname">Last Name</option>
              </select>
              <br />
              Refine your Search:
              <select>
                <option name="" id="" />
                <option name="" id="">City</option>
                <option name="" id="">Country</option>
                <option name="" id="">Gift</option>
                <option name="" id="">Age</option>
              </select>
            </div>
            <div className="push50" />
            <div className="lowerlowerrightbox">
              <div className="stripecircle1">
                <div className="fontwhitebox1" />
              </div>
              <div className="blankwhitebox1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard