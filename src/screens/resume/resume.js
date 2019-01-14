import React, { Component } from 'react';
import './resume.css';

class ResumeDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
  };
}

  render() {
    return (
      <div className="scroll row  h-100 flex-grow"> {/**Add bootstrap css tags this window will also need to be scrollable*/}
        {/** Use iframe if from youtube or video tags if local, Change length and width to match using bootstrap  <iframe width="560" height="315" src="https://www.youtube.com/embed/d2R937A0heM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
        
        {/*<p>take inspiration from http://www.michaellevall.com/resume/ </p>*/}

        <div className="col-12"> 
          <div className="row">
            <p>
              <h1>Resume</h1>
              <hr></hr>
            </p>
          </div>
          
          <div className="row">
            <p>
              <h6>Work</h6>
              <br></br>

              <ul>
                <li>
                  Aye-Tech (2 Trafalgar Road, Kingston 5 Jamaica ) - Implementation Consultant/ Programmer (July 2015 – current)
                  <ul>
                    <li>
                      Responsibilities:
                      <ul>
                        <li>Test, deploy and maintain Aye Technologies’ AyeLAB Laboratory Information System (LIS) in both Windows and Linux environments. </li>
                        <li>Presenting ideas for system improvements</li>
                        <li>Plan and execute user training exercises</li> 
                        <li>systems Maintainance</li> 
                        <li>Perform Quality Assurance tests on newly implemented features</li>
                        <li>Preparation of Technical Documents</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>

          <div className="row">
            <p>
              <h6>Education</h6>
              <br></br>
              
              <ul>
                <li> University of the West Indies (Mona Campus Jamaica) - BSC Computer Science (Completion Date: November 2015) </li>
                <li> Manchester High School (Completion Date 2012) </li>
              </ul>
            </p>
          </div>
          
          <div className="row">
            <p>
              <h6>Soft Skills</h6>
              <br></br>
              
              <ul>
                <li>•	Experienced in object-oriented programming; debugging, interface design and Problem solving.
•	Can quickly learn and  master new technologies; successful working in both team and self-directed settings.
</li>
                <li>Exceptional communication skills
Excellent active and reflective listening skills  </li>
              </ul>
            </p>
          </div>

          <div className="row">
            <p>
              <h6>Software and Technology Competencies</h6>
              <br></br>
              
              <ul>
                <li>Platforms: NT Xp/Vista/8/10, Windows Server 2003/2008, Linux</li>
                <li>Languages: Java 2, HTML 5, CSS 3, JavaScript, NT BAT Scripts, Python, C# </li>
                <li>RDBMS:  PostgreSQL, MSSQL</li>
                <li>Tools: Microsoft Office Suite, Adobe Photoshop, GIT, Razor DB, PGadmin 3, Crystal Reports, Ecrion Reports, Unity 3D, Maven</li>
              </ul>
            </p>
          </div>
       
       </div>
      </div>
    );
  }
}

export default ResumeDisplayComponent;
