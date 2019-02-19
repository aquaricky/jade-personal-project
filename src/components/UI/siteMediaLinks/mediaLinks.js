import React, { Component } from 'react';
import './mediaLinks.css';
import { UncontrolledTooltip ,Container, Row, Col,Nav, NavItem, NavLink,ButtonGroup,Button } from 'reactstrap';

class MediaLinksComponent extends Component {
constructor(props){
  super(props);
  this.state={
  };
}

  render() {
    return (
      <Container fluid="true">
        <Row>
          <Col lg="1" sm="1" >
            <Nav rounded vertical >
              <NavItem>
                <NavLink id="twitter" className="fa fa-twitter" target="_blank" href="https://twitter.com/Imposter_Syndr"></NavLink>
                <UncontrolledTooltip placement="right" target="twitter">
                  @Imposter_Syndr
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink className="fa fa-facebook" target="_blank" href="https://www.facebook.com/jade.t.miller"></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="fa fa-youtube-play" target="_blank" href="https://www.youtube.com/channel/UCs_sURValk3HJFBpme5t6tQ?view_as=subscriber"></NavLink>
              </NavItem>

              <NavItem>
                <NavLink id="unityconnect" target="_blank" href="https://connect.unity.com/u/jade-a-miller"><img className="unityicon" src={require("../../../res/unity-master-black.png")}  title="UnityConnect" alt="UnityConnect"/></NavLink>
                <UncontrolledTooltip placement="right" target="unityconnect">
                  UnityConnect
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink className="fa fa-linkedin" target="_blank" href="https://www.linkedin.com/in/jade-miller-437997170/"></NavLink>
                <UncontrolledTooltip placement="right" target="envelope">
                  Jade.A.Miller93@gmail.com
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink id="github" className="fa fa-github-alt" target="_blank" href="https://github.com/aquaricky"></NavLink>
                <UncontrolledTooltip placement="right" target="github">
                  aquaricky
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink id="Discord" className="Discordicon" target="_blank" href="/"><img className="Discordicon" src={require("../../../res/Discord-Logo-Black.png")}  title="Discord" alt="Discord"/></NavLink>
                <UncontrolledTooltip placement="right" target="Discord">
                  Discord
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink id="envelope" className="fa fa-envelope" href="/contactme"></NavLink>
                <UncontrolledTooltip placement="right" target="envelope">
                  Jade.A.Miller93@gmail.com
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MediaLinksComponent;