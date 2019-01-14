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
      <div className="row  h-100 flex-grow">
        <div className="col-12">
          twitter
          facebook
          youtube
          email
          UnityConnect
          github
          linked in
          upwork??

          Email sender app here

          **could merge this page as a small bar to teh side of teh resume page**
        </div>
      </div>
    );
  }
}

export default MediaLinksComponent;
