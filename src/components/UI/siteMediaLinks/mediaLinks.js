import React, { Component } from 'react';
import './mediaLinks.css';

class MediaLinksComponent extends Component {
constructor(props){
  super(props);
  this.state={
  };
}

  render() {
    return (
      <div className="row h-100">

        <div className="col-12">
          <div className="row">
            <a className="fa fa-twitter" href="https://twitter.com/" title="Twitter"/>
          </div>

          <div className="row">
          <a className="fa fa-facebook" href="https://twitter.com/" title="Twitter"/>
          </div>
          
          <div className="row">
            <a className="fa fa-youtube-play" href="https://twitter.com/" title="Twitter"/>
          </div>

          <div className="row">
            <a className="fa" href="https://twitter.com/" title="Twitter"><img className="unityicon" src={require("../../../res/unity-master-black.png")}  title="UnityConnect" alt="UnityConnect"/> </a>
          </div>

          <div className="row">
            <a className="fa fa-linkedin " href="https://twitter.com/" title="Twitter"/>
          </div>

          <div className="row">
            <a className="fa fa-github-alt " href="https://twitter.com/" title="Twitter"/>
          </div>

          <div className="row">
            <a className="fa fa-envelope" href="https://twitter.com/" title="Twitter"/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default MediaLinksComponent;


{/*<div className="col"></div>

        <div className="col">
          <div className="row">
          <a className="iconsize fa-twitter" href="https://twitter.com/" title="Twitter"/>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <a className="iconsize fa-facebook" href="https://facebook.com/" title="Facebook"/>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <a href="https://youtube.com/" title="youtube">
              <img className="iconsize" src={require("../../../res/yt_logo_rgb_light.png")}/>
            </a>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <a href="https://unityconnect.com/" title="UnityConnect">
              <img className="iconsize" src={require("../../../res/unity-master-black.png")}/>
            </a>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <a href="https://linkedIn.com/" title="linkedin">
              <img className="iconsize" src={require("../../../res/In-2C-128px-TM.png")}/>
            </a>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <a href="https://github.com/" title="github">
              <img className="iconsize" src={require("../../../res/Octocat.png")}/>
            </a>
          </div>
        </div>

        
        <div className="col">
          <div className="row">
              <img className="iconsize" src={require("../../../res/logo_gmail_128px.png")}/>
          </div>
        </div>
*/}