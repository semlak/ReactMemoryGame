import React, { Component } from 'react';

// import {Button, Navbar} from 'reactstrap';
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  Col,
  Row
} from 'reactstrap';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
 render() {
   console.log(this.props);
    return (
      <Card onClick={() => this.props.handleCardClick(this.props.id)}>
        {/* <CardImg width="100%" src={this.props.image} alt="Card image cap" /> */}
        {/* <CardImgOverlay> */}
          <CardText>{this.props.name}</CardText>
        {/* </CardImgOverlay> */}
      </Card>

    );
  }
}
