import React, {Component} from 'react';

import MemoryCard from "./MemoryCard"

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
        <Row>
            <Col><MemoryCard name="Artie" /></Col>
            <Col><MemoryCard name="Gus"/></Col>
            <Col><MemoryCard name="Xena"/></Col>
            <Col><MemoryCard name="Reis"/></Col>
            <Col><MemoryCard name="Jimmy"/></Col>
        </Row>
            
   );
  }
}
