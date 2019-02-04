import React, { Component } from 'react';
import './slideComponent.css';
import VideoDisplayComponent from '../videoBox/videoBox';
import TextDisplayComponent from '../textBox/textBox';
import { Row, Col } from 'reactstrap';

class SlideDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
  };
}

  render() {
    return (
      <Row className="h-100">
        <Col lg="1"></Col>

        <Col lg="6">
          <VideoDisplayComponent></VideoDisplayComponent>
        </Col>

        <Col lg="4">
          <TextDisplayComponent></TextDisplayComponent>
        </Col>

        <Col lg="1"></Col>
      </Row>
    );
  }
}

export default SlideDisplayComponent;
