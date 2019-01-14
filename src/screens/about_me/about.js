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
        <div className="col-12"> 
          <div className="row">
            <p>
              About Jade
            </p>
          </div> 

          <div className="row">
            <MediaLinksComponent></MediaLinksComponent>
          </div>

        </div>
      </div>
    );
  }
}

export default AboutDisplayComponent;
