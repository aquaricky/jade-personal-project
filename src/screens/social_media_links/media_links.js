import React, { Component } from 'react';
import './about.css';

class AboutDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
  };
}

  render() {
    return (
      <div className="row  h-100 flex-grow"> {/**Add bootstrap css tags*/}
        {/** Use iframe if from youtube or video tags if local, Change length and width to match using bootstrap  <iframe width="560" height="315" src="https://www.youtube.com/embed/d2R937A0heM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
        <div className="col-12">
          twitter
          facebook
          youtube
          email
          UnityConnect
          github
          linked in
          upwork??

          Email sender app here

          **could merge this page as a small bar to teh side of teh resume page**
        </div>
      </div>
    );
  }
}

export default AboutDisplayComponent;
