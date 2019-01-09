import React, { Component } from 'react';
import './siteDisplay.css';
import AboutDisplayComponent from '../../about_me/about';
import ResumeDisplayComponent from '../../resume/resume';

class SiteDisplayComponent extends Component {
  render() {
    var test =[<ResumeDisplayComponent></ResumeDisplayComponent>,<AboutDisplayComponent></AboutDisplayComponent>]

      return (
      <div className="row test2 h-100 flex-grow"> {/*Note that h-100 and flex-grow allows this div to fill all remaining space. Use this to display all main pages below the banner */}
        <div className='col'>
        {/**1)strip out the arrow and display components and just leave the header and the bottom display 
        2) rig header to the different web pages
        3) add these components to the different pages
        4) connect router to manage moving between scenes*/}
          {test[0]/*this.props.display*/}
        </div>
      </div>
    );
  }
}

export default SiteDisplayComponent;

/**Pass a value or positive or neg 1 to the arrow containers so that they can add or subtract from the display value array. subtract should be left and add should be right.
 * Also display appropriate arrow based on the side */

/* Add a new var called screen to render, make it a number and pass it to the centerpanel which will rerender based on that number. Use arrow keys to trigger onclick to change the number
- not sure if this will cause a re-render automatically or not. */