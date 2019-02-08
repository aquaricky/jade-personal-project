import React, { Component } from 'react';
import './ytIframe.css';

class YTIframeComponent extends Component {
  constructor(props){
    super(props);
    this.state={
    };
  }
  

  formatUrl(){
    return this.props.url + "?version=3&loop=1&mute=1&controls=0&autoplay=1"
  }

  render() {

    return (
        <iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" width= {this.props.width} height={this.props.height} src= {this.formatUrl()}></iframe>
    );
  }
  
}

export default YTIframeComponent;
