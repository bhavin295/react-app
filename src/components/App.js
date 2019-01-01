import React, { Component } from 'react';
import Parent from '../life-cycle/Parent';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import About from './About'

class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
        <span> App component... </span>
				<br /><br />
				<Parent />
				<br /><br />
				<Link to="/login"> Login </Link>
				<br /><br />
				<Link to="/register">Register</Link>
				<br /><br />
				<Link to="/about">About Us</Link>
			</div>
		)
	}
}

export default App;
