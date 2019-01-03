import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			errors: {}
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleBlur = this.handleBlur.bind(this);
	}

	handleSubmit(event) {
		console.log("Data..", this.state);
		event.preventDefault();
		if (this.validateForm()) {
			alert("Login Successfully...");
		}
	}

	validateForm() {
		let errors = {};
		let formIsValid = true;

		if (!this.state.username) {
			formIsValid = false;
			errors["username"] = "*Please Enter your Username.";
		}

		
		if (!this.state.password) {
			formIsValid = false;
			errors["password"] = "*Please enter your password.";
		}

		this.setState({
			errors: errors
		});
		return formIsValid;
	}


	render() {

		return (
			<div>
				<form className="w3-login-form" onSubmit={this.handleSubmit}>
					<h4 className="font-color"> Welcome to Login Page </h4>
					<div> Username : &nbsp;
							<input type="text" name="username" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }} placeholder="Username" /> <span className="error-msg"> {this.state.errors.username}</span>
					</div><br />
					<div> &nbsp; Password : &nbsp;
          				<input type="password" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} name="password" placeholder="Password" /><span className="error-msg"> {this.state.errors.password} </span>	<br /><br />
					</div>
					<div>
						<button className="w3-btn" type="submit"> Login </button>
					</div><br/>
					<div>
						<Link to="/register"> Register </Link>
					</div>
				</form>
			</div>
		)
	}
}

export default Login;