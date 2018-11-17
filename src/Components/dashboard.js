import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Tree from '../images/christmastree.jpg';
import './dashboard.css';
import Gcheck from '../images/green circle.jpg';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kids: [],
    };
  }

  componentDidMount() {
    axios.get('/api/getallkids').then(res => {
      this.setState({ kids: res.data });
    });
  }

  render() {
    const nicekids = this.state.kids.filter(naughtyKid => naughtyKid.n_or_n == 'nice').map(nicekid => {
      return (
        <div className="kidbox" key={nicekid.kid_id}>
          <div className="kidboxborder">
            <div className="kidboxlefthalf">
              <div className="kidboxpicture1">
                <img src={`${nicekid.kidpic}`} alt="" height="100%" width="75%" />
              </div>
              <div className="kidboxlowerhalf">
                <a className="kidname">
                  {`${nicekid.firstname}`.toUpperCase()}
                  <br />
                  {`${nicekid.lastname}`.toUpperCase()}
                </a>
                <a>{`${nicekid.toy_name}`.toUpperCase()}</a>
              </div>
            </div>
            <div className="kidboxrightinfo">
              <div className="giftready">
                <img src={`${nicekid.toy_picture}`} alt="" height="100%" width="100%" />
              </div>
              <div className="check">
                Does Bernard Know?
                <img src={Gcheck} alt="" height="25%" width="50%" />
              </div>
            </div>
          </div>
        </div>
      );
    });
    const naughtykids = this.state.kids.filter(naughtyKid => naughtyKid.n_or_n == 'naughty').map(naughtyKid => {
      return (
        <div className="kidbox" key={naughtyKid.kid_id}>
          <div className="kidboxborder">
            <div className="kidboxlefthalf">
              <div className="kidboxpicture">
                <img src={`${naughtyKid.kidpic}`} alt="" height="100%" width="75%" />
              </div>
              <div className="kidboxlowerhalf">
                <a className="kidname">
                  {`${naughtyKid.firstname}`.toUpperCase()}
                  <br />
                  {`${naughtyKid.lastname}`.toUpperCase()}
                </a>
                <a>{`${naughtyKid.toy_name}`.toUpperCase()}</a>
              </div>
            </div>
            <div className="kidboxrightinfo">
              <div className="giftready">
                <img src={`${naughtyKid.toy_picture}`} alt="" height="100%" width="100%" />
              </div>
              <div className="check">
                Does Bernard Know?
                <img src={Gcheck} alt="" height="25%" width="50%" />
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="mainbody">
        {/* <div className="drop10" /> */}
        <header>
          <div className="headerleft">
            <h1>S</h1>.wiftly <h1>A</h1>.llocating <h1>N</h1>.ew <h1>T</h1>.hings to <h1>A</h1>.ll
          </div>
          <div className="headercenter">
            <p> ~The List~</p>
          </div>
          <div className="reathimage">
          <img src={Tree} alt="" height="100%" with="100%" />
          </div>
        </header>
        {/* <div className="drop10"></div> */}
        <div className="lowerbody">
          {/* <div class="parallax"></div> */}

          <div className="leftlowerbox">
            <div className="loweruperleft">
              <div className="stripecircle">
                <div className="fontwhitebox" />
              </div>
              <div className="blankwhitebox" />
            </div>
            <div className="lowerlowerleft" />
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
              <select>
                <option name="" id="" />
                <option name="" id="">Name</option>
                <option name="" id="">City</option>
                <option name="" id="">Country</option>
                <option name="" id="">Gift</option>
                <option name="" id="">Age</option>
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