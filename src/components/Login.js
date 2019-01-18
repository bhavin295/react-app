import React, { PureComponent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserUtils from './../utils/user';

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
		console.log("will mount called...")
		const active  = localStorage.getItem('userData') ? true : false;
		this._LoggedIn(active)
	}

	 _LoggedIn(active) {
		if(active){
			this.props.history.push('/dashboard');
		} 
	}

	validateUser(user) {
		if(this.state.username == 'test@user.com' && this.state.password == 'test@user2019' ){
			localStorage.setItem("userData",JSON.stringify(user));
			this.props.history.push('/dashboard');
		}
		else{
			alert("Invalid Username or Password...!!!")
		}
	}
	
	render() {
		return (
			<div>
				<form className="w3-login-form" onSubmit={this.handleSubmit}>
					<h3 className="font-color"> Welcome to Login Page </h3>
					<div> Username : &nbsp;
							<input type="text" name="username" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }} placeholder="Username" /> <span className="error-msg"> {this.state.errors.username}</span>
					</div><br />
					<div> &nbsp; Password : &nbsp;
          				<input type="password" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} name="password" placeholder="Password" /><span className="error-msg"> {this.state.errors.password} </span>	<br /><br />
					</div>
					<div>
						<button className="w3-btn" type="submit"><b> Login </b></button>
					</div><br/>
					<div>
						<Link to="/register"> Create account </Link>
					</div>
				</form>
			</div>
		)
	}
}

export default Login;