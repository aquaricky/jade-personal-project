import React, { Component } from 'react'
import './siteDisplay.css'
import { Row, Col } from 'reactstrap'
import AboutDisplayComponent from '../../about_me/about'
import ResumeDisplayComponent from '../../resume/resume'
import {Switch, Route} from "react-router-dom"
import ProjectDisplayComponent from '../../project/project'
import ContactDisplayComponent from '../../contact_me/contact'
import NoMatchComponent from '../../notfound/Notfound'

class SiteDisplayComponent extends Component {
  render() {
      return (
      <Row>
        <Col lg="12">
          <Switch>
            <Route exact path="/" component = {AboutDisplayComponent}/> {/**Turn About into a more comprehensive marketing page */}
            <Route exact path="/Resume" component = {ResumeDisplayComponent}/>
            {/*<Route exact path="/ContactMe" component = {ContactDisplayComponent}/> 
            <Route exact path="/Projects" component = {ProjectDisplayComponent}/>*/}
            <Route component={NoMatchComponent} />
          </Switch>
        </Col>
      </Row>
    );
  }
}

export default SiteDisplayComponent;