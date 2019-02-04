import React, { Component } from 'react';
import './resume.css';
import { ListGroup,ListGroupItem,ListGroupItemHeading,ListGroupItemText,CardGroup,Card,CardBody,CardTitle, Row, Col } from 'reactstrap';

class ResumeDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
  };
}

  render() {
    return (
      <Row >
        <Col lg='12'> 
        <Card className="Text">
          <CardBody body className="text-center">
            <CardTitle><h1>Resume</h1></CardTitle>
          </CardBody>
        </Card>

        <CardGroup>
          <Card className="Text">
            <CardBody body className="text-left">
              <CardTitle className="text-center"><h6>Work Experience</h6></CardTitle>
              <ListGroup flush>
                <ListGroupItem >
                  <ListGroupItemHeading><h6>Aye-Tech (2 Trafalgar Road, Kingston 5 Jamaica )</h6></ListGroupItemHeading>
                  <ListGroupItemText>
                    (July 2015 – current) Implementation Consultant 
                    Responsibilities:
                    <ul>
                      <li>Test, deploy and maintain Aye Technologies’ AyeLAB Laboratory Information System (LIS) in both Windows and Linux environments. </li>
                      <li>Presenting ideas for system improvements</li>
                      <li>Plan and execute user training exercises</li> 
                      <li>systems Maintainance</li> 
                      <li>Perform Quality Assurance tests on newly implemented features</li>
                      <li>Preparation of Technical Documents</li>
                    </ul>
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>

              <ListGroup flush>
                <ListGroupItem >
                  <ListGroupItemHeading><h6>Aye-Tech (2 Trafalgar Road, Kingston 5 Jamaica )</h6></ListGroupItemHeading>
                  <ListGroupItemText>
                    (July 2015 – current) Implementation Consultant 
                    Responsibilities:
                    <ul>
                      <li>Test, deploy and maintain Aye Technologies’ AyeLAB Laboratory Information System (LIS) in both Windows and Linux environments. </li>
                      <li>Presenting ideas for system improvements</li>
                      <li>Plan and execute user training exercises</li> 
                      <li>systems Maintainance</li> 
                      <li>Perform Quality Assurance tests on newly implemented features</li>
                      <li>Preparation of Technical Documents</li>
                    </ul>
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>

          <Card className="Text">
            <CardBody body className="text-left">
              <CardTitle className="text-center"><h6>Education</h6></CardTitle>
              <ListGroup flush>
                <ListGroupItem>
                  <ListGroupItemText>
                    <b>University of the West Indies (Mona Campus Jamaica)</b> - BSC Computer Science (Completion Date: November 2015)
                  </ListGroupItemText>

                  <ListGroupItemText>
                    <b>Manchester High School</b> - (Completion Date 2012) 
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>

          <Card className="Text">
            <CardBody body className="text-left">
              <CardTitle className="text-center"><h6>Skills</h6></CardTitle>

              <ListGroup flush>
                <ListGroupItem>
                  <ListGroupItemHeading><h6>Software and Technology Competencies</h6></ListGroupItemHeading>
                  
                  <ListGroupItemText>
                  <ul>
                    <li><b>Platforms:</b> NT Xp/Vista/8/10, Windows Server 2003/2008, Linux</li>
                    <li><b>Languages</b>: Java 2, HTML 5, CSS 3, JavaScript, NT BAT Scripts, Python, C# </li>
                    <li><b>RDBMS:</b>  PostgreSQL, MSSQL</li>
                    <li><b>Tools:</b> Microsoft Office Suite, Adobe Photoshop, GIT, Razor DB, PGadmin 3, Crystal Reports, Ecrion Reports, Unity 3D, Maven</li>
                  </ul>
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>

              <ListGroup flush>
                <ListGroupItem>
                  <ListGroupItemHeading><h6>Soft Skills</h6></ListGroupItemHeading>
                  
                  <ListGroupItemText>
                  <ul>
                    <li>•	Experienced in object-oriented programming; debugging, interface design and Problem solving.
                        •	Can quickly learn and  master new technologies; successful working in both team and self-directed settings.
                    </li>
                    <li>Exceptional communication skills
                          Excellent active and reflective listening skills   
                    </li>
                  </ul>
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>

          </CardGroup>
        </Col>
      </Row>
    );
  }
}

export default ResumeDisplayComponent;