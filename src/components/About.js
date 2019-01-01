import React, { Component } from 'react';
import Contact from './Contact';
import Summary from './Summary';
import { BrowserRouter as Router, Route, Link, Switch, browserHistory } from "react-router-dom";


class About extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let { match } = this.props;
		console.log("match", match)
		return (
			<div>
				<h4> Welcome to About US </h4>
				<Link to={`${match.url}/contact`}> Contact US </Link>
				<Route exact path={`${match.path}/contact`} component={Contact}/>
				<br />
				<Link to={`${match.url}/summary`}> Summary </Link>
				<Route exact path={`${match.path}/summary`} component={Summary} />

			</div>
		)
	}
}

export default About;