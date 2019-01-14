import React, { Component } from 'react';
import './textBox.css';

class TextDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
    text:null,
  };
}

  render() {

    let text;

    if (this.state.text != null) {
      text = this.state.text;
    } else {
      text = null;
    }

    return (
      <div className="scroll row h-100 remove2 flex-grow">
        <div className="col-12">
          <p>{text}</p>
        </div>
      </div>
      
    );
  }
}

export default TextDisplayComponent;
