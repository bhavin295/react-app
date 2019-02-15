import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import UserUtils from './../utils/user';
import passwordConnect from './../redux/connect/passwordConnect';

class Login extends PureComponent {

	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			errors: {}
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(event) {
		event.preventDefault();
		const user = await UserUtils.login({ email: this.state.username, password: this.state.password });
		this.validateUser(user);
	}

	componentWillMount() {
		const active = sessionStorage.getItem('userData') ? true : false;
		this._LoggedIn(active)
	}

	_LoggedIn(active) {
		if (active) {
			this.props.history.push('/dashboard');
		}
	}

	validateUser(user) {
		if (this.state.username == 'test@user.com' && this.state.password == this.props.NewPassword) {
			sessionStorage.setItem("userData", JSON.stringify(user));
			this.props.history.push('/dashboard');
		}
		else {
			alert("Invalid Username or Password...!!!")
		}
	}

	render() {
		return (
			<div>
				<form className="w3-login-form" onSubmit={this.handleSubmit}>
					<h3 className="font-color w3-mb-2"> Welcome to Login Page </h3>
					<div> Username : &nbsp;
							<input type="text" name="username" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }} placeholder="Username" /> <span className="error-msg"> {this.state.errors.username}</span>
					</div><br />
					<div> &nbsp; Password : &nbsp;
          				<input type="password" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} name="password" placeholder="Password" /><span className="error-msg"> {this.state.errors.password} </span>	<br /><br />
					</div>
					<div>
						<button className="w3-btn w3-mt-1 w3-mb-1" type="submit"><b> <i class="fas fa-sign-in-alt"></i>&nbsp;&nbsp;Login </b></button>
					</div><br />
					<div style={{ marginLeft: '30px' }}>
						<Link to="/register"><a className="w3-link-reference"><i class="fas fa-user-plus">&nbsp;&nbsp;Create account</i></a></Link>
						<Link to="/forgot-password"><a className="w3-link-reference"><i class="fas fa-key">&nbsp;&nbsp;Forgot Password?</i></a></Link><br /><br />
						<Link to="/home"><a className="w3-link-reference"><i class="fas fa-home">&nbsp; Home</i></a></Link>
					</div>
				</form>
			</div>
		)
	}
}

export default (passwordConnect(Login));