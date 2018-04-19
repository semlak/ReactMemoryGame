import React from 'react';
import {Container, Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">ReactJS Memory Game</h1>
        <p className="lead">
          A simple memory game created with ReactJS.  
        </p>
        <hr className="my-2" />
        <Container className="instructions">
          <h3>Instructions</h3>
          <p>You select one of the available images.</p> 
          <p>The images will reload, and you need to keep selecting a new image.</p> 
          <p>Your score will continue to update with each succesful move, until the game ends.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
