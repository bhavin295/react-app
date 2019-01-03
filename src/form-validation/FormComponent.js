import React, { Component } from 'react';

class FormComponent extends Component {

	constructor() {
		super();
		this.state = {
			firstname: '',
			lastname: '',
			address: '',
			city: '',
			email: '',
			gender: '',
			language: '',
			password: '',
			confpwd: '',
			errors: {}
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleSubmit(event) {
		console.log("Data..", this.state);
		event.preventDefault();
		if (this.validateForm()) {
			alert("Form submitted");
		}
	}

	handleBlur(event, field){
		event.preventDefault();
		this.validateForm(field);
	}

	validateForm(field) {
		let errors = {};
		let formIsValid = true;
		if ((field ? field === 'firstname' : true) && (!this.state.firstname)) {
			formIsValid = false;
			errors["firstname"] = "*Please Enter your FirstName.";
		}

		if ((field ? field === 'firstname' : true) && (this.state.firstname.match(/^[a-zA-Z ]*$/)[0] == "")) {
			formIsValid = false;
			errors["firstname"] = "*Please Enter alphabet characters only.";
		}
		else {
			errors["firstname"] = "";
		}
	

		if ((field ? field === 'lastname' : true) && (!this.state.lastname)) {
			formIsValid = false;
			errors["lastname"] = "*Please Enter your LastName.";
		}
		
		if ((field ? field === 'lastname' : true) && (this.state.lastname.match(/^[a-zA-Z ]*$/)[0] == "")) {
			formIsValid = false;
			errors["lastname"] = "*Please Enter alphabet characters only.";
		} else {
			errors["lastname"] = "";
		}
	
		if ((field ? field === 'address' : true) && (!this.state.address)) {
			formIsValid = false;
			errors["address"] = "*Please Enter Address.";
		}

		if ((field ? field === 'gender' : true) && (!this.state.gender)) {
			formIsValid = false;
			errors["gender"] = "*Please Select any one.";
		}

		if ((field ? field === 'city' : true) && (!this.state.city)) {
			formIsValid = false;
			errors["city"] = "*Please Select any one city.";
		}

		if ((field ? field === 'language' : true) && (!this.state.language)) {
			formIsValid = false;
			errors["language"] = "*Please Select any one Language.";
		}

		if ((field ? field === 'email' : true) && (!this.state.email)) {
			formIsValid = false;
			errors["email"] = "*Please Enter your Email-ID.";
		}

		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		if ((field ? field === 'email' : true) && (!pattern.test(!this.state.email))) {
			formIsValid = false;
			errors["email"] = "*Please Enter valid Email-ID.";
		}else{
			errors["email"] = "";
		}
		

		if ((field ? field === 'password' : true) && (!this.state.password)) {
			formIsValid = false;
			errors["password"] = "*Please enter your password.";
		}

		if ((field ? field === 'password' : true) && (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/))) {
			formIsValid = false;
			errors["password"] = "*Please Enter secure and strong password.";
		}
	

		if ((field ? field === 'confpwd' : true) && (!this.state.confpwd)) {
			formIsValid = false;
			errors["confpwd"] = "*Please Confirm your password.";
		}

		if ((field ? field === 'confpwd' : true) && (this.state.confpwd !== this.state.password)) {
				formIsValid = false;
				errors["confpwd"] = "*Please Enter same password.";
		}

		this.setState({
			errors: errors
		});
		return formIsValid;
	}

	render() {
		return (
			<div>
				<form className="w3-signup-form" onSubmit={this.handleSubmit} >
					<h3 className="font-color"> Sign Up </h3>
					<div> First Name : &nbsp;
							<input type="text" name="firstname" onBlur={(e) => this.handleBlur(e, 'firstname')} value={this.state.firstname} onChange={(e) => { this.setState({ firstname: e.target.value }) }} placeholder="First Name" /> <span className="error-msg"> {this.state.errors.firstname}</span>
					</div><br />
					<div> Last Name : &nbsp;
          		<input type="text" name="lastname" onBlur={(e) => this.handleBlur(e, 'lastname')} value={this.state.lastname} onChange={(e) => { this.setState({ lastname: e.target.value }) }} placeholder="Last Name" /><span className="error-msg"> {this.state.errors.lastname} </span><br /><br />
					</div>
					<div className="w3-flex"> Address : &nbsp;
          		<textarea style={{ height: '50px', width: '180px' }} type="text" name="address" onBlur={(e) => this.handleBlur(e, 'address')} value={this.state.address} onChange={(e) => { this.setState({ address: e.target.value }) }} placeholder="Address" /> <span className="error-msg"> {this.state.errors.address} </span><br /><br />
					</div><br />
					<div>
						Pick your City : &nbsp;
						<select value={this.state.city} onBlur={(e) => this.handleBlur(e, 'city')} onChange={(e) => { this.setState({ city: e.target.value }) }}>
						  <option value=""> Select city... </option>
							<option value="Ahmedabad">Ahmedabad</option>
							<option value="Surat">Surat</option>
							<option value="Vadodara">Vadodara</option>
							<option value="Rajkot">Rajkot</option>
						</select> <span className="error-msg"> {this.state.errors.city} </span>
					</div><br />
					<div> Gender : &nbsp;
							<input type="radio" onBlur={(e) => this.handleBlur(e, 'gender')} onChange={(e) => { this.setState({ gender: e.target.value }) }} value="Male" name="gender" /> Male &nbsp;&nbsp;
							<input type="radio" onBlur={(e) => this.handleBlur(e, 'gender')} onChange={(e) => { this.setState({ gender: e.target.value }) }} value="Female" name="gender" /> Female <span className="error-msg"> {this.state.errors.gender} </span><br /><br />
					</div>
					<div> Language : &nbsp;
							<input type="checkbox" onBlur={(e) => this.handleBlur(e, 'language')} onChange={(e) => { this.setState({ language: e.target.value }) }} value="English" name="english" /> English &nbsp;&nbsp;
							<input type="checkbox" onBlur={(e) => this.handleBlur(e, 'language')} onChange={(e) => { this.setState({ language: e.target.value }) }} value="Hindi" name="hindi" /> Hindi &nbsp;&nbsp;
							<input type="checkbox" onBlur={(e) => this.handleBlur(e, 'language')} onChange={(e) => { this.setState({ language: e.target.value }) }} value="Gujarati" name="gujarati" /> Gujarati <span className="error-msg"> {this.state.errors.language} </span><br /><br />
					</div>
					<div> Email : &nbsp;
						<input type="email" name="email" value={this.state.email} onBlur={(e) => this.handleBlur(e, 'email')} onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="Email" /><span className="error-msg"> {this.state.errors.email} </span> <br /><br />
					</div>
					<div> Password :&nbsp;
          		<input type="password" value={this.state.password} onBlur={(e) => this.handleBlur(e, 'password')} onChange={(e) => { this.setState({ password: e.target.value }) }} name="password" placeholder="Password" /><span className="error-msg"> {this.state.errors.password} </span>	<br /><br />
					</div>
					<div> Confirm Password :&nbsp;
          		<input type="password" value={this.state.confpwd} onBlur={(e) => this.handleBlur(e, 'confpwd')} onChange={(e) => { this.setState({ confpwd: e.target.value }) }} name="confpwd" placeholder="Confirm Password" /><span className="error-msg"> {this.state.errors.confpwd} </span><br /><br />
					</div>
					<div>
						<button className="w3-btn" type="submit"><b> Submit </b></button>
					</div>
				</form>
			</div>
		)	
	}
}

export default FormComponent