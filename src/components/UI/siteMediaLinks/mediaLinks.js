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
          <Col>
            <Nav vertical>
              <NavItem>
                <NavLink id="twitter" className="fa fa-twitter" href="https://twitter.com/Imposter_Syndr"></NavLink>
                <UncontrolledTooltip placement="right" target="twitter">
                  @Imposter_Syndr
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink className="fa fa-facebook" href="https://www.facebook.com/jade.t.miller"></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="fa fa-youtube-play" href="https://www.youtube.com/channel/UCs_sURValk3HJFBpme5t6tQ?view_as=subscriber"></NavLink>
              </NavItem>

              <NavItem>
                <NavLink id="unityconnect" className="Discordicon" href="https://connect.unity.com/u/jade-a-miller"><img className="unityicon" src={require("../../../res/unity-master-black.png")}  title="UnityConnect" alt="UnityConnect"/></NavLink>
                <UncontrolledTooltip placement="right" target="unityconnect">
                  UnityConnect
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink className="fa fa-linkedin" href="https://www.linkedin.com/in/jade-miller-437997170/"></NavLink>
                <UncontrolledTooltip placement="right" target="envelope">
                  Jade.A.Miller93@gmail.com
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink id="github" className="fa fa-github-alt" href="https://github.com/aquaricky"></NavLink>
                <UncontrolledTooltip placement="right" target="github">
                  aquaricky
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink id="Discord" className="Discordicon" href="/"><img className="Discordicon" src={require("../../../res/Discord-Logo-Black.png")}  title="Discord" alt="Discord"/></NavLink>
                <UncontrolledTooltip placement="right" target="Discord">
                  Discord
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink id="envelope" className="fa fa-envelope" href="Jade.a.miller93@gmail.com"></NavLink>
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