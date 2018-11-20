import React, { Component } from 'react';
import './SiteNavBarComponent.css';

class SiteNavBarComponent extends Component {
  render() {
    return (
      <div className='row'>
        <div className = 'col'>
          <nav>
            <ul class="nav nav-tabs justify-content-end">
              <li class="nav-item">
                <a class="nav-link active" href="#">Portfolio</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Others</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            </nav>
        </div>
      </div>
    );
  }
}

export default SiteNavBarComponent;
