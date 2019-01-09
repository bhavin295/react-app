import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormComponent from './../form-validation/FormComponent'

class Register extends Component {

	render() {

		return (
			<div>
					{/* <Link to="/about">About Us</Link> */}
				{/* <h3 className="font-color"> Welcome to Register Page </h3> */}
						<FormComponent />		
			</div>
		)
	}
}

export default Register;