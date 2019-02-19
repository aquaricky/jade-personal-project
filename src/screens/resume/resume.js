import React, { Component } from 'react';
import './resume.css';
import { ListGroup,ListGroupItem,ListGroupItemHeading,ListGroupItemText,CardGroup,Card,CardBody,CardTitle, Row, Col } from 'reactstrap';
import {resumeDownloadLinks} from "../../res/resumeLinks";

class ResumeDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
  };
}

  render() {
    return (
      <Row>
        <Col lg='12'> 
        <Card className="Text">
          <CardBody body className="text-center">
            <CardTitle>
              <h1>Resume</h1>
              <span className=""><b>Download: </b>
                <a href={resumeDownloadLinks[0].link} target="_blank">PDF </a> 
                <a href={resumeDownloadLinks[1].link} target="_blank">DOCX </a>
              </span>
            </CardTitle>
          </CardBody>
        </Card>

        <CardGroup>
          <Card className="Text border-right">
            <CardBody body className="text-left">
              <CardTitle className="text-center"><h6><strong>Work Experience</strong></h6></CardTitle>

              <ListGroup flush>
                <ListGroupItem >
                  <ListGroupItemHeading><h6>Digicel group (The Digicel Building 14 Ocean Boulevard ,Kingston, Jamaica)</h6></ListGroupItemHeading>
                  <ListGroupItemText>
                    Senior Group Carrier Billing Executive  (Feb 2018 – current)
                    Responsibilities:
                    <ul>
                      <li>Generate timely and accurate billing reports for each billing period </li>
                      <li>Manage and communicate mediation requirements for new carriers, trunks, products and services.</li>
                      <li>Support the carrier invoice reconciliation and dispute resolution process.</li> 
                      <li>Project Manage InterconnecT Billing, BriteAccount, Reporting & Optimized Routing systems upgrades and enhancements.</li> 
                      <li>Perform call and system testing after all system patches and upgrades</li>
                      <li>Manage the interconnect system reference data archive policy</li>
                    </ul>
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>

              <ListGroup flush>
                <ListGroupItem >
                  <ListGroupItemHeading><h6>Digicel group (The Digicel Building 14 Ocean Boulevard ,Kingston, Jamaica)</h6></ListGroupItemHeading>
                  <ListGroupItemText>
                    Billing Support Executive  (Feb 2017 – Feb 2018) 
                    Responsibilities:
                    <ul>
                      <li> Manage the dispute resolution process with International carriers</li>
                      <li>Ensure that CDRs are priced correctly</li>
                      <li>Maintain business relation between Digicel and all International, regional and domestic carriers</li>
                      <li>Liaise with and provide support for the wholesale settlement process.</li>
                      <li> Manage various internal reconciliation processes to increase Revenue Assurance</li>
                    </ul>
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>

              <ListGroup flush>
                <ListGroupItem >
                  <ListGroupItemHeading><h6>Aye - Tech (8 1/2 Worthington Terr. , Kingston 5 Jamaica )</h6></ListGroupItemHeading>
                  <ListGroupItemText>
                    Implementation Consultant/ Jr. Programmer  (July 2015 – Feb 2017)
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

          <Card className="Text border-right">
            <CardBody body className="text-left">
              <CardTitle className="text-center"><h6><strong>Education</strong></h6></CardTitle>
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
              <CardTitle className="text-center"><h6><strong>Skill summary</strong></h6></CardTitle>

              <ListGroup flush>
                <ListGroupItem>
                  <ListGroupItemHeading><h6>Software and Technology Competencies</h6></ListGroupItemHeading>
                  
                  <ListGroupItemText>
                  <ul>
                    <li><b>Platforms:</b>NT Xp/Vista/8/10, Windows Server 2003/2008, Linux</li>
                    <li><b>Languages:</b>Java , HTML 5, CSS 3, JavaScript, NT BAT Scripts, C#, React Js, Node Js </li>
                    <li><b>RDBMS:</b>PostgreSQL, MSSQL, Oracle 11g</li>
                    <li><b>Tools:</b>Microsoft Office Suite, GIT, Razor DB, PGadmin 3, Crystal Reports, Ecrion Reports, Unity 3D, Maven, Microsoft Power BI, Pentaho Data Integration,Trello </li>
                  </ul>
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>

              <ListGroup flush>
                <ListGroupItem>
                  <ListGroupItemHeading><h6>Soft Skills</h6></ListGroupItemHeading>
                  
                  <ListGroupItemText>
                  <ul>
                    <li>A broad understanding of all areas of game design, gameplay and systems design</li>
                    <li>Native English speaker</li>
                    <li>Experienced in object-oriented programming, debugging, interface design and Problem solving.</li>
                    <li>Can quickly learn and  master new technologies; successful working in both team and self-directed settings.</li>
                    <li>Exceptional communication skills</li>
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