import React, { Component } from 'react';
import './Notfound.css';
import { Row, Col, Card, CardBody, CardTitle,CardText } from 'reactstrap';

class NoMatchComponent extends Component {
  render() {
      return (
      <Row className="aboutOffset">
        <Col lg="12">
            <Card className="aboutText">
                <CardBody body className="text-center">
                <CardTitle></CardTitle>
                <CardText className="lead">
                    <h1 className="display-4"> <strong> 404 - Page Not Found </strong> </h1>
                </CardText>
                </CardBody>
            </Card>
        </Col>
      </Row>
    );
  }
}

export default NoMatchComponent;