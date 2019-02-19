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
                <p>Hi my name is Jade Miller and I have a passion for understanding the game mechanics that have defined our lives for years. 
                With a background in programming I strive to bring  these odd mechanics that govern real life to as much virtual worlds as possible. 
                What fuels my interest in game design is the potential that each improvement in technology has to consume life as we know it, constantly blurring the line between real and fake.
                This allows game designers to shift the designs they use to shape player choice and behaviors to a new landscape, Influencing human behavior in new unforeseen ways.
                I think God made the first RPG, I'm just here to add the mods :D
                </p>
                <h5>Want to get in touch? Send me an email at <strong>Jade.a.miller93 [at] gmail.com</strong></h5>
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
