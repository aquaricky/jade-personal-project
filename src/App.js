import React, { Component } from 'react';
import './App.css';

import SiteBannerComponent from './components/UI/SiteBannerComponent/SiteBannerComponent'
import SiteDisplayComponent from './screens/site/siteDisplay/siteDisplay';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid d-flex flex-column flex-grow"> {/* className here is used to mark for CSS*/}
      {/*Dont forget to add the main page background on teh index body element and then make all other tabs transparent unless necessary */}
        <SiteBannerComponent/>
        <SiteDisplayComponent/> {/* Now we just need to change what custom component is rendered here on each nav link */}
      </div>
    );
  }
}

export default App;