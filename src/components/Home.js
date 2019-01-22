import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Home extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div>
					<h3 className="w3-font-color w3-main-form"> Welcome to Home page </h3>
				</div>
			</div>
		)
	}
}

export default Home;
