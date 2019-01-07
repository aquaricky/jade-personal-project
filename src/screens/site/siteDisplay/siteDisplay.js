import React, { Component } from 'react';
import './siteDisplay.css';
import SiteCarouselComponent from '../../../components/site/siteCarousel/siteCarouselComponent';
import SiteCenterPanelComponent from '../../../components/site/siteCenterPanel/siteCenterPanelComponent';
import SiteArrowsComponent from '../../../components/site/siteArrows/siteArrowsComponent';

class SiteDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
    screens: [<div>test</div>,<div>test2</div>,null,null,null],
    currentDisplay: 0,
    leftArrow: -1,
    rightArrow: 1
  };
}

  render() {

    function checkDisplayedValue(value, currentDisplay){
      if((value < 0)&(currentDisplay <= 0)){
        alert("cannot change this value")
        return(currentDisplay);
      }else{
        currentDisplay= currentDisplay + value;
        alert(currentDisplay);

        return (currentDisplay);
      }
    }

    function handleArrowDisplayValueChange(value){
      if((value < 0) & (this.state.currentDisplay <= 0)){
        alert("cannot change this value " + this.state.currentDisplay)

      }else if((value > 0) & (this.state.currentDisplay > this.state.screens.length)){
        alert("value out of range " + this.state.currentDisplay)

      }else {
        let val = this.state.currentDisplay + value;
        alert(val);
        this.setState({currentDisplay:val})
      }
    }

    function handleDisplayValue(value){ /*Using The carousel you only nee dto return a value that is in range of the display array.*/      
      if (value <= this.state.screens.length ){
        return(value);
      }
    }

    return (
      <div className="row test2 h-100 flex-grow"> {/*Note that h-100 and flex-grow allows this div to fill all remaining space. Use this to display all main pages below the banner */}
        <div className='col'>
          <div id = 'centerpanel' className='row'>
            <div className='col-1'>
              <SiteArrowsComponent ArrowValue = {this.state.leftArrow} onClick={() => handleArrowDisplayValueChange(this.state.leftArrow)}/>
            </div>

            <div className='col-10'>
              <SiteCenterPanelComponent display = {this.state.screens[this.state.currentDisplay]}/>
            </div>
              
            <div className='col-1'>
              <SiteArrowsComponent ArrowValue= {this.state.rightArrow} onClick={() => this.setState({currentDisplay: checkDisplayedValue(this.state.rightArrow,this.state.currentDisplay)})}/>
            </div>
          </div>

          <div id = 'carousel' className='row'>
            <div className='col'>
              <SiteCarouselComponent/>
            </div>
          </div>
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