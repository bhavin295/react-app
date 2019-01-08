import React, { Component } from 'react';
import Contact from './Contact';
import Summary from './Summary';
import { Route, Link } from "react-router-dom";


class About extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let { match } = this.props;
		return (
			<div>
				<h3 className="font-color"> Welcome to About US </h3>
				<Link to={`${match.url}/contact`}> Contact US </Link>
				<br />
				<Route exact path={`${match.path}/contact`} component={Contact}/>
				<br />
				<Link to={`${match.url}/summary`}> Summary </Link>
				<br />
				<Route exact path={`${match.path}/summary`} component={Summary} />

			</div>
		)
	}
}

export default About;