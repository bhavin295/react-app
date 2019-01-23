import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AssignUser from './AssignUser';
import Header from './Header';

class Dashboard extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Header />
				<h3 className="font-color w3-text-center"> Welcome to Dashboard... </h3>
				<div className="w3-login-form">
					<Link to="/userlist"><a className="w3-link-reference"><i class="fas fa-users">&nbsp;&nbsp;UserList</i></a></Link><br /><br />
					<AssignUser /><br />
				</div>
			</div>
		)
	}
}
export default Dashboard;
