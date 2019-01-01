import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

	render() {

		return (
			<div>
				<h5> Welcome to Login Page </h5>
        <Link to="/register"> Register </Link>
			</div>
		)
	}
}

export default Login;