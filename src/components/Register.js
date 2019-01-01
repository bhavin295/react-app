import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {

	render() {

		return (
			<div>
				<h5> Welcome to Register Page </h5>
        <Link to="/about">About Us</Link>
			</div>
		)
	}
}

export default Register;