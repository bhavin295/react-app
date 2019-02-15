import React, { Component } from 'react';
import Contact from './Contact';
import Summary from './Summary';
import { Route, Link } from "react-router-dom";
import Header from './Header';

class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { match } = this.props;
		return (
			<div>
				<Header />
				<h3 className="font-color w3-text-center"> Welcome to About US </h3>
				<div className="w3-text-center w3-contact-form">
						<Link className="w3-link-reference" to={`${match.url}/summary`}><b> Summary </b></Link>
						<Route exact path={`${match.path}/summary`} component={Summary} />
				</div>
				<div className="w3-text-center w3-contact-form">
						<Link className="w3-link-reference" to={`${match.url}/contact`}><b> Contact </b></Link>
						<Route exact path={`${match.path}/contact`} component={Contact}/>
				</div>
			</div>
		)
	}
}

export default About;