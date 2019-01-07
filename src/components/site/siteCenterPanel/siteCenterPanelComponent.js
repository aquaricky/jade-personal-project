import React, { Component } from 'react';
import './siteCenterPanelComponent.css';
import AboutDisplayComponent from '../../centerDisplays/about_me/about';

class SiteCenterPanelComponent extends Component {
  
  render() {
    var test =[<AboutDisplayComponent></AboutDisplayComponent>]
    return (
      <div className="row h-100 flex-grow test 4">
         <div className="col">
           {test[0]/*this.props.display*/}
          
         </div>
      </div>
    );
  }
}

export default SiteCenterPanelComponent;