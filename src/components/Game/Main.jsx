import React, {Component} from 'react';

import MemoryCard from "./MemoryCard";
import shuffle from "../../util/helpers";
// const shuffle = require("../../util/helpers.js")
// ../util/helpers")

// import {Button, Navbar} from 'reactstrap';
import {
  Button,
  Card,
  Col,
  Row} from 'reactstrap';

const gameCards = [
  {id: 0, name: "Artie", image: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" },
  {id: 1, name: "Gus", image: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" },
  {id: 2, name: "Xena", image: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" },
  {id: 3, name: "Reis", image: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" },
  {id: 4, name: "Jimmy", image: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" },
]


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      currentCards: gameCards
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleCardClick(cardId) {
    console.log("hey");
    console.log(`element ${cardId} was clicked`)
  }
 
  render() {
    return (
        <Row>
            {shuffle(this.state.currentCards).map(info => (
              <Col xs="4" sm="4" md="2" key={info.id} >
                <MemoryCard id={info.id} name={info.name} image={info.image} handleCardClick={this.handleCardClick}/>
               </Col>
              ))}
        </Row>
            
   );
  }
}
