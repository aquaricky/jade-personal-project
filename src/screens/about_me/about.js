import React, { Component } from 'react';
import './about.css';
import MediaLinksComponent from '../../components/UI/siteMediaLinks/mediaLinks'

class AboutDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
  };
}

  render() {
    return (
      <div className="row  h-100 flex-grow">
        
            <div className="col-11 aboutText">
              About Jade
            </div>

            <div className="col-1 mediaLinks"> <MediaLinksComponent></MediaLinksComponent> </div>
      </div>
    );
  }
}

export default AboutDisplayComponent;
