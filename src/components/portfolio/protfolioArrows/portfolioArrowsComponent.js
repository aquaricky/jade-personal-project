import React, { Component } from 'react';
import './portfolioArrowsComponent.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class PortfolioArrowsComponent extends Component {
  render() {
    return (
      <div className="row h-100 flex-grow tests">
        {/*Add logic to descide if this is the left or the right arrow*/}
        <div className='col-12'>
          <div className='row spacings'></div>

          <div className='row spacings'>
            <div className='col-12'>
              <div className='row'></div>

              <div className='row'>
                <MaterialIcon icon="keyboard_arrow_left" />
                <MaterialIcon icon="keyboard_arrow_right" />
              </div>

              <div className='row'></div>
            </div>
          </div>

          <div className='row spacings'></div>
        </div>
      </div>
    );
  }
}

export default PortfolioArrowsComponent;