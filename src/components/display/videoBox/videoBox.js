import React, { Component } from 'react';
import './videoBox.css';

class VideoDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
    url:null,
  };
}

  render() {
    let video;

    if (this.state.url != null) {
      video = <iframe width="100%" height="100%" src= {this.state.test} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
    } else {
      video = null;
    }
    
    return (
      <div className="row remove1 h-100 flex-grow">
        <div className="col-12">
          {video}
        </div>
      </div>
    );
  }
}

export default VideoDisplayComponent;
