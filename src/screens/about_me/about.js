import React, { Component } from 'react';
import { Card,CardBody,CardTitle,CardText,Button, Row, Col } from 'reactstrap';
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
      <Row className="aboutOffset">
        <Col lg='11'> 
          <Card className="aboutText">
            <CardBody body className="text-center">
              <CardTitle><h1 className="display-4"> <strong> Game Designer And Programmer </strong> </h1></CardTitle>
              <CardText className="lead">
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h5>Want to get in touch? Check the media Links -></h5>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col lg='1'> <MediaLinksComponent/> </Col>
      </Row>
    );
  }
}

export default AboutDisplayComponent;
