import React, {Component} from 'react';

import MemoryCard from "./MemoryCard";
import shuffle from "../../util/helpers";
import ScoreDiv from "./ScoreDiv";
import { Button, Card, Col, Row } from 'reactstrap';


const gameCards = require("../../data/cardData.json").CardData;



export default class Main extends Component {
  // constructor(props) {
    // super(props);

  state = {
    currentCards: gameCards,
    selectedCards: [],
    lastSelectedCard: null,
    message: "Select a card!",
    messageAlertColor: "primary",
    score: 0
  };
 

  handleCardClick = cardId => {
    const selectedCard = parseInt(cardId);
    if (this.state.selectedCards.indexOf(selectedCard) > -1) {
      this.setState({
        score: 0, 
        currentCards: gameCards, 
        lastSelectedCard: null, 
        selectedCards: [],
        messageAlertColor: "danger",
        message: "Game Over. Begin a new game by selecting a card."
      })
    }
    else {
      const selectedCards = [].concat(this.state.selectedCards, [selectedCard] );
      this.setState({
        selectedCards, 
        lastSelectedCard: 
        selectedCard, 
        score: this.state.score + 1,
        messageAlertColor: "success",
        message: "Select a card that you have not selected yet!"
      })
    }
  }
 
  render() {
    return (
      <React.Fragment>
        <Row>
          <ScoreDiv {...this.state} />
        </Row>
        <Row>
          {shuffle(this.state.currentCards)
            .filter(gameCard => gameCard.id !== this.state.lastSelectedCard)
            .slice(0,12)
            .map(info => 
              <Col xs="4" sm="4" md="3" key={info.id} >
                <MemoryCard  {...info} handleCardClick={this.handleCardClick}/>
              </Col>
            )
          }
        </Row>
      </React.Fragment>
    );
  }
}
