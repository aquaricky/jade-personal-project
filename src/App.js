import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';

import SiteBannerComponent from './components/UI/SiteBannerComponent/SiteBannerComponent'
import SiteDisplayComponent from './screens/site/siteDisplay/siteDisplay';

/*configure the router so that the the banner and display will chaneg according to what is selected*/

class App extends Component {
  render() {
    return (
      <Container fluid={true} className="h-100 App">
        <SiteBannerComponent/>
        <SiteDisplayComponent/>
      </Container>
    );
  }
}

export default App;