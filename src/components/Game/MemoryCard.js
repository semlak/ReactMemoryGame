import React, {Component} from 'react';

// import {Button, Navbar} from 'reactstrap';
import {
  Button,
  Card,
  Col,
  Row} from 'reactstrap';


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
    return (
        <Card>{this.props.name}
       </Card>
            
   );
  }
}
