import React from 'react';
import {Col, Row, Alert, Badge} from 'reactstrap';


const ScoreDiv = props => (
	<React.Fragment>
		<Col xs="6" sm="4" md="4">
			<Alert color="dark" className="score-div">
				Score: <Badge color="primary">{props.score}</Badge>
			</Alert>
		</Col>
		<Col xs="6" sm="4" md="8">
			<Alert color={props.messageAlertColor}>{props.message}</Alert>
		</Col>
	</React.Fragment>
)

export default ScoreDiv;