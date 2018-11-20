import React, { Component } from 'react';
import './portfolioDisplay.css';
import PortfolioCarouselComponent from '../../../components/portfolio/portfolioCarousel/PortfolioCarouselComponent';
import PortfolioCenterPanelComponent from '../../../components/portfolio/portfolioCenterPanel/portfolioCenterPanelComponent';
import PortfolioArrowsComponent from '../../../components/portfolio/protfolioArrows/portfolioArrowsComponent';

class PortfolioDisplayComponent extends Component {
  render() {
    return (
      <div className="row test2 h-100 flex-grow"> {/*Note that h-100 and flex-grow allows this div to fill all remaining space. Use this to display all main pages below the banner */}
        <div className='col'>
          <div id = 'centerpanel' className='row'>
            <div className='col-1'>
              <PortfolioArrowsComponent/>
            </div>

            <div className='col-10'>
              <PortfolioCenterPanelComponent/>
            </div>
              
            <div className='col-1'>
              <PortfolioArrowsComponent/>
            </div>
          </div>

          <div id = 'carousel' className='row'>
            <div className='col'>
              <PortfolioCarouselComponent/>
            </div>
          </div>
        </div>
        
        
        
      </div>
    );
  }
}

export default PortfolioDisplayComponent;
