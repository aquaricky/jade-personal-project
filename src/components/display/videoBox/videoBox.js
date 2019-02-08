import React, { Component } from 'react';
import './videoBox.css';
import { Row, Col} from 'reactstrap';
import YTIframeComponent from "../../UI/iframeComponent/ytIframe";

class VideoDisplayComponent extends Component {
  constructor(props){
    super(props);
    this.state={
    };
  }

  render() {
    let display

    if(this.props.flag == "ytweb"){
      display = <YTIframeComponent width="100%" height="100%" url = {this.props.url}></YTIframeComponent>;
    }if(this.props.flag == "img"){
      display = <img src={this.props.url} alt="Project Image" width="100%" height="100%"/>;
    }if(this.props.flag == "web"){
      display = <iframe width="100%" height="100%" src = {this.props.url}></iframe>;
    }if(this.props.flag == "loc"){
      display = <video width="100%" height="100%" src = {this.props.url}></video>;
    }
      
    return (
      <Row className="h-100">
        <Col lg="12">
          {display}
        </Col>
      </Row>
    );
  }
}

export default VideoDisplayComponent;
