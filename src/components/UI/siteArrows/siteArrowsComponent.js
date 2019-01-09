import React, { Component } from 'react';
import './siteArrowsComponent.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class SiteArrowsComponent extends Component {

  render() {
    //const ArrowValue = this.props.ArrowValue;
    let Arrow;

    if (this.props.ArrowValue < 0) {
      Arrow = <MaterialIcon icon="keyboard_arrow_left"/>
    }else{
      Arrow = <MaterialIcon icon="keyboard_arrow_right"/>
    }


    return (
      <div className="row h-100 flex-grow tests" onClick={() => this.props.onClick()}>
        {/*Add logic to descide if this is the left or the right arrow*/}
        <div className='col-12'>
          <div className='row spacings'></div>

          <div className='row spacings'>
            <div className='col-12'>
              <div className='row'></div>

              <div className='row'>
                {Arrow}
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

export default SiteArrowsComponent;