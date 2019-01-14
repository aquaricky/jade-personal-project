import React, { Component } from 'react';
import './App.css';

import SiteBannerComponent from './components/UI/SiteBannerComponent/SiteBannerComponent'
import SiteDisplayComponent from './screens/site/siteDisplay/siteDisplay';

/*configure the router so that the the banner and display will chaneg according to what is selected*/

class App extends Component {
  render() {
    return (
      <div className="App container-fluid d-flex flex-column flex-grow">
        <SiteBannerComponent/>
        <SiteDisplayComponent/>
      </div>
    );
  }
}

export default App;