"use strict";
import React from 'react';
import { Button, Card, CardImg, CardImgOverlay, CardText, Col, Row } from 'reactstrap';

const MemoryCard = props => (
      <Card 
        className="memory-card embed-responsive embed-responsive-1by1" 
        onClick={() => props.handleCardClick(props.id)}>
        <CardImg className="embed-responsive-item" width="100%" src={props.image} alt="Card image cap" />
      </Card>
)

export default MemoryCard;
