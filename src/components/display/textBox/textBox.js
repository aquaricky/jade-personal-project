import React, { Component } from 'react';
import './textBox.css';
import { Row, Col,Card,CardBody,CardTitle,CardSubtitle,CardText,CardLink,Button} from 'reactstrap';

class TextDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
    projectTitle:null,
    buttonList:[],
    text:null,
    responsibilities:[]
  };
}

  render() {

    let responsibilities;
    let description;
    let buttonList;
    let projectTitle;

    return (
      <Row className="h-100">
        <Col>
          <Card className="Text" className="text-left h-100">
            <CardBody body className="h-100">
              <CardTitle><h5>Project Title (2019)</h5></CardTitle>
              <CardSubtitle> <Button className="buttonCleanup">Button</Button> <Button className="buttonCleanup">Button</Button></CardSubtitle>
              <br></br>
              <CardText> Project Description dfasdilufsafua aiufdsau saidfusda sdaiuf sisda siauf saduf saiuf saiufsdifsadluf asifluashdifugsda sailsdufasd iuaiuda isdfisduf  sa</CardText>
              <CardText>
                <ul>
                  <li><b>Platforms:</b></li>
                  <li><b>Languages</b></li>
                  <li><b>RDBMS:</b></li>
                  <li><b>Tools:</b></li>
                </ul>
              </CardText>
              <CardLink href="#">Download</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default TextDisplayComponent;
