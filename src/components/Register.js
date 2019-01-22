import React, { Component } from 'react';
import FormComponent from './../form-validation/FormComponent';
import Header from './Header';

class Register extends Component {

	render() {
		return (
			<div>
				<Header />
				<FormComponent />
			</div>
		)
	}
}

export default Register;