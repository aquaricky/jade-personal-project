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
        <Row >
          <Col lg='11'> 
            <Card className="aboutText">
              <CardBody body className="text-center">
                <CardTitle>About Jade</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>

          <Col lg='1'> <MediaLinksComponent/> </Col>
        </Row>
    );
  }
}

export default AboutDisplayComponent;
