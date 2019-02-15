import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNewPassword } from './../redux/actions/index';

class ForgotPassword extends Component {

	constructor() {
		super();
		this.state = {
			curr_pwd: '',
			new_pwd: '',
			conf_pwd: '',
			errors: {}
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.validateForm()) {
			console.log("Value...", this.state);
			alert("Password successfully updated...!!!");
			this.props.history.push('/login')
		}
		this.props.dispatch(getNewPassword(this.state.conf_pwd));
	}

	handleBlur(event, field) {
		event.preventDefault();
		this.validateForm(field);
	}

	validateForm(field) {
		let errors = {};
		let formIsValid = true;

		if ((field ? field === 'curr_pwd' : true) && (!this.state.curr_pwd)) {
			formIsValid = false;
			errors["curr_pwd"] = "*Please enter current password.";
		}
		else {
			errors["curr_pwd"] = "";
		}

		if ((field ? field === 'new_pwd' : true) && (!this.state.new_pwd)) {
			formIsValid = false;
			errors["new_pwd"] = "*Please enter new password.";
		}
		else {
			errors["new_pwd"] = "";
		}

		if ((field ? field === 'conf_pwd' : true) && (!this.state.conf_pwd)) {
			formIsValid = false;
			errors["conf_pwd"] = "*Please confirm your password.";
		}
		else {
			errors["conf_pwd"] = "";
		}

		if ((field ? field === 'conf_pwd' : true) && (this.state.conf_pwd !== this.state.new_pwd)) {
			formIsValid = false;
			errors["conf_pwd"] = "*Please Enter same password.";
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
					<h3 className="font-color w3-mb-2"> Create a new password </h3>
					<div> &nbsp; Current Password : &nbsp;
          		<input type="password" onBlur={(e) => this.handleBlur(e, 'curr_pwd')} value={this.state.curr_pwd} onChange={(e) => { this.setState({ curr_pwd: e.target.value }) }} name="Current password" placeholder="Current Password" /><span className="error-msg"> {this.state.errors.curr_pwd}</span><br /><br />
					</div>
					<div> &nbsp; New Password : &nbsp;
          		<input type="password" onBlur={(e) => this.handleBlur(e, 'new_pwd')} value={this.state.new_pwd} onChange={(e) => { this.setState({ new_pwd: e.target.value }) }} name="New password" placeholder="New Password" /><span className="error-msg"> {this.state.errors.new_pwd}</span><br /><br />
					</div>
					<div> &nbsp; Confirm Password : &nbsp;
          		<input type="password" onBlur={(e) => this.handleBlur(e, 'conf_pwd')} value={this.state.conf_pwd} onChange={(e) => { this.setState({ conf_pwd: e.target.value }) }} name="Confirm password" placeholder="Confirm Password" /><span className="error-msg"> {this.state.errors.conf_pwd}</span><br /><br />
					</div>
					<div>
						<button className="w3-btn w3-mt-1 w3-mb-1" type="submit"><b> <i class="fas fa-key"></i>&nbsp;&nbsp;Change </b></button>
						<Link to="/login"><button className="w3-cancel-btn w3-mt-1"><b><i class="fas fa-times"></i>&nbsp;&nbsp; Cancel  </b></button> </Link>
					</div><br />
				</form>
			</div>
		)
	}
}

const select = state => ({
	NewPassword: state.passwordReducer.password
});
export default connect(select)(ForgotPassword);
