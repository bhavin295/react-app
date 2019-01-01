import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {

	render() {

		return (
			<div>
				<h4 className="font-color"> Welcome to Register Page </h4>
        		<Link to="/about">About Us</Link>
			</div>
		)
	}
}

export default Register;