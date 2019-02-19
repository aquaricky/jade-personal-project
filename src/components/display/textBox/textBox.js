import React, { Component } from 'react';
import './textBox.css';
import { Row, Col,Card,CardBody,CardTitle,CardSubtitle,CardText,CardLink,Button} from 'reactstrap';

class TextDisplayComponent extends Component {
constructor(props){
  super(props);
  this.state={
  };
}

renderButtons(buttonProps){
  let buttonWheel=[];
  for(let i=0; i<buttonProps.length; i++){
    buttonWheel.push( <Button key={buttonProps[i].id} className="buttonCleanup" color={buttonProps[i].buttonColor} >{buttonProps[i].buttonText}</Button>);
  }
  return buttonWheel;
}

renderList(ListProps){
  let List=[];

  for (let i=0; i<ListProps.length ; i++){
    List.push(<li key={ListProps[i].id}><b>{ListProps[i].text}</b></li>)
  }

  return List;
}

  render() {
    return (
      <Row className="h-100">
        <Col>
          <Card body className="Text" className="text-left h-100">
            <CardBody  className="h-100">
              <CardTitle><h5>{this.props.projectTitle}</h5></CardTitle>
              <CardSubtitle> {this.renderButtons(this.props.button)} </CardSubtitle>
              <br></br>
              <CardText> {this.props.projectDescText}</CardText>
              <CardText>
                <ul>
                  {this.renderList(this.props.List)}
                </ul>
              </CardText>
              <CardLink href={this.props.downloadURL} target="_blank">Download</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default TextDisplayComponent;
