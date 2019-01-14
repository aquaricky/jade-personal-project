import React, { Component } from 'react';
import './siteDisplay.css';
import AboutDisplayComponent from '../../about_me/about';
import ResumeDisplayComponent from '../../resume/resume';
import ProjectDisplayComponent from '../../project/project';

class SiteDisplayComponent extends Component {
  render() {
    var test =[<ProjectDisplayComponent></ProjectDisplayComponent>,<ResumeDisplayComponent></ResumeDisplayComponent>,<AboutDisplayComponent></AboutDisplayComponent>]

      return (
      <div className="row centerpanel">
        <div className='col'>
          {test[2]}
        </div>
      </div>
    );
  }
}

export default SiteDisplayComponent;