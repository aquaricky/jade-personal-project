import React, { Component } from 'react';
import './siteCarouselComponent.css';

class SiteCarouselComponent extends Component {
  render() {
    return (
      <div className="row h-100 flex-grow">
        <div className='col-12'>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default SiteCarouselComponent;
