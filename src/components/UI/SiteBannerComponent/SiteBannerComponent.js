import React, { Component } from 'react';
import './SiteBannerComponent.css';
import SiteNavBarComponent from '../SiteNavBar/SiteNavBarComponent';

class SiteBannerComponent extends Component {
  render() {
    return (
      <div className='row banner'>
        <div className='col-4'>
          <h1>Test Banner</h1>
        </div>

        <div className='col-8'>
          <SiteNavBarComponent/>
        </div>
      </div>
    );
  }
}

export default SiteBannerComponent;
