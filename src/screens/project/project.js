import React, { Component } from 'react';
import './project.css';
import VideoDisplayComponent from '../../components/display/videoBox/videoBox'
import TextDisplayComponent from '../../components/display/textBox/textBox'
import SiteCarouselComponent from '../../components/UI/siteCarousel/siteCarouselComponent'
import SiteArrowsComponent from '../../components/UI/siteArrows/siteArrowsComponent'

class AboutDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
  };
}

  render() {
    {/**State for video and text has been set up, create a res page with an array for the text+ video combo and pass it to the components
combine this with carosel and arrows. Do array of url+text combinations first then do the pagination*/}

    return (
      <div className="row display h-100 flex-grow"> 
        <div className="col">
          <div className= "row display flex-grow">
            <div className="col-1">
              <SiteArrowsComponent></SiteArrowsComponent>
            </div>

            <div className="col-6">
              <VideoDisplayComponent></VideoDisplayComponent>
            </div>

            <div className="col-4">
              <TextDisplayComponent></TextDisplayComponent>
            </div>

            <div className="col-1">
              <SiteArrowsComponent></SiteArrowsComponent>
            </div>
          </div>

          <div className= "row banner flex-grow">
            <div className = "col">
              <SiteCarouselComponent></SiteCarouselComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutDisplayComponent;

