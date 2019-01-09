import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					<h2 className="w3-font-color w3-main-form"> Welcome to Home page </h2>
				</div>
				<div className="w3-left-form">
					<Link to="/login"> Login </Link>
					<br /><br />
					<Link to="/register">Register</Link>
					<br /><br />
					<Link to="/about">About Us</Link>
					<br /><br />
					<Link to="/data-communication"> Data-communication </Link>
					<br /><br />
					<Link to="/form-validation"> Form-validation </Link>
					<br /><br />
					<Link to="/life-cycle"> Life-cycle </Link>
				</div>
			
			</div>
		)
	}
}

export default Home;
