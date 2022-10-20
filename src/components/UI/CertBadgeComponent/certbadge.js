import React, { Component } from 'react';
import './certbadge.css';

class CertBadgeComponent extends Component {
  constructor(props){
    super(props);
    this.state={
    };
  }

/*<script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>*/

  componentDidMount() {
    const script = document.createElement('script');
    script.setAttribute(
      'src', 
      '//cdn.credly.com/assets/utilities/embed.js');
    document.body.appendChild(script)
  }
  
  render() {

    return (
        <div><div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="31b82437-7f49-400e-adcb-e0a91d5d42e5" data-share-badge-host="https://www.credly.com"></div></div>
    );
  }
  
}

export default CertBadgeComponent;