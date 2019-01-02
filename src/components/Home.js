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
		       		<h4 className="font-color"> Welcome to Home page </h4>
				</div>
				<div>
					<Link to="/life-cycle"> Life-cycle </Link>
					<br /><br />
					<Link to="/data-communication"> Data-communication </Link>
					<br /><br />
					<Link to="/form-validation"> Form-validation </Link>
					<br /><br />
					<Link to="/login"> Login </Link>
					<br /><br />
					<Link to="/register">Register</Link>
					<br /><br />
					<Link to="/about">About Us</Link>
				</div>
			</div>
		)
	}
}

export default Home;
