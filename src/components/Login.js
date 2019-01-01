import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

	render() {

		return (
			<div>
				<h4 className="font-color"> Welcome to Login Page </h4>
       			<Link to="/register"> Register </Link>
			</div>
		)
	}
}

export default Login;