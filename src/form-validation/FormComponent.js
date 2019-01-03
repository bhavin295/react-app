import React, { Component } from 'react';

class FormComponent extends Component {

	constructor() {
		super();
		this.state = {
			firstname: '',
			lastname: '',
			address: '',
			city: ' ',
			email: '',
			gender: '',
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

	handleBlur(event){
		event.preventDefault();
		if (this.validateForm()) {
			alert("Blur called...");
		}
	}
	validateForm() {
		let errors = {};
		let formIsValid = true;

		if (!this.state.firstname) {
			formIsValid = false;
			errors["firstname"] = "*Please Enter your FirstName.";
		}

		if (typeof !this.state.firstname !== "undefined") {
			if (!this.state.firstname.match(/^[a-zA-Z ]*$/)) {
				formIsValid = false;
				errors["firstname"] = "*Please Enter alphabet characters only.";
			}
		}

		if (!this.state.lastname) {
			formIsValid = false;
			errors["lastname"] = "*Please Enter your LastName.";
		}

		if (typeof !this.state.lastname !== "undefined") {
			if (!this.state.lastname.match(/^[a-zA-Z ]*$/)) {
				formIsValid = false;
				errors["lastname"] = "*Please Enter alphabet characters only.";
			}
		}

		if (!this.state.address) {
			formIsValid = false;
			errors["address"] = "*Please Enter Address.";
		}

		if (!this.state.gender) {
			formIsValid = false;
			errors["gender"] = "*Please Select any one.";
		}

		if (!this.state.email) {
			formIsValid = false;
			errors["email"] = "*Please Enter your Email-ID.";
		}

		if (typeof !this.state.email !== "undefined") {
			//regular expression for email validation
			var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			if (!pattern.test(!this.state.email)) {
				formIsValid = false;
				errors["email"] = "*Please Enter valid Email-ID.";
			}
		}

		if (!this.state.password) {
			formIsValid = false;
			errors["password"] = "*Please enter your password.";
		}

		if (typeof !this.state.password !== "undefined") {
			if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
				formIsValid = false;
				errors["password"] = "*Please Enter secure and strong password.";
			}
		}

		if (!this.state.confpwd) {
			formIsValid = false;
			errors["confpwd"] = "*Please Confirm your password.";
		}

		if (this.state.confpwd !== this.state.password) {
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
				<form className="w3-signup-form" onSubmit={this.handleSubmit} onBlur={this.handleBlur}>
					<h2 className="font-color"> Sign Up </h2>
					
					<div> First Name : &nbsp;
							<input type="text" name="firstname" value={this.state.firstname} onChange={(e) => { this.setState({ firstname: e.target.value }) }} placeholder="First Name" /> <span className="error-msg"> {this.state.errors.firstname}</span>
						{/* <div className="error-msg"> {this.state.errors.firstname} </div> */}
					</div><br />
					<div> Last Name : &nbsp;
          		<input type="text" name="lastname" value={this.state.lastname} onChange={(e) => { this.setState({ lastname: e.target.value }) }} placeholder="Last Name" /><span className="error-msg"> {this.state.errors.lastname} </span><br /><br />
					</div>
					<div className="w3-flex"> Address : &nbsp;
          		<textarea style={{ height: '50px', width: '180px' }} type="text" name="address" value={this.state.address} onChange={(e) => { this.setState({ address: e.target.value }) }} placeholder="Address" /> <span className="error-msg"> {this.state.errors.address} </span><br /><br />
					</div><br />
					<div>
						Pick your City : &nbsp;
						<select value={this.state.city} onChange={(e) => { this.setState({ city: e.target.value }) }}>
						  <option> Select city... </option>
							<option value="Ahmedabad">Ahmedabad</option>
							<option value="Surat">Surat</option>
							<option value="Vadodara">Vadodara</option>
							<option value="Rajkot">Rajkot</option>
						</select> <span className="error-msg"> {this.state.errors.city} </span>
					</div><br />
					<div> Gender : &nbsp;
							<input type="radio" onChange={(e) => { this.setState({ gender: e.target.value }) }} value="Male" name="gender" /> Male &nbsp;&nbsp;
							<input type="radio" onChange={(e) => { this.setState({ gender: e.target.value }) }} value="Female" name="gender" /> Female <span className="error-msg"> {this.state.errors.gender} </span><br /><br />
					</div>
					<div> Email : &nbsp;
						<input type="email" name="email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="Email" /><span className="error-msg"> {this.state.errors.email} </span> <br /><br />
					</div>
					<div> Password :&nbsp;
          				<input type="password" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} name="password" placeholder="Password" /><span className="error-msg"> {this.state.errors.password} </span>	<br /><br />
					</div>
					<div> Confirm Password :&nbsp;
          				<input type="password" value={this.state.confpwd} onChange={(e) => { this.setState({ confpwd: e.target.value }) }} name="confpwd" placeholder="Confirm Password" /><span className="error-msg"> {this.state.errors.confpwd} </span><br /><br />
					</div>
					<div>
						<button className="w3-btn" type="submit"> Submit </button>
					</div>
				</form>
			</div>
		)	
	}
}

export default FormComponent