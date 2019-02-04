import React, { Component } from 'react';
import './videoBox.css';
import { Row, Col} from 'reactstrap';

class VideoDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
    url:"https://www.youtube.com/embed/dCfOxU1uFK8",
  };
}

  render() {
    let video;

      video = <iframe width="100%" height="100%" src= {this.state.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
    
    return (
      <Row className="h-100">
        <Col lg="12">
          {video}
        </Col>
      </Row>
    );
  }
}

export default VideoDisplayComponent;
