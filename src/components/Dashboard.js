import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AssignUser from './AssignUser';
import Header from './Header';
import SelectComponent from './SelectComponent';

class Dashboard extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Header />
				<div style={{ position: 'absolute' }} className="w3-form w3-mb-1">
					<AssignUser /><br />
					<div className="w3-hr" />
					<div className="w3-mt-2">
						<Link to="/userlist"><a className="w3-link-reference"><i class="fas fa-users">&nbsp;&nbsp; UserList</i></a></Link><br /><br />
						<Link to="/data-communication"><a className="w3-link-reference"><i class='fas fa-american-sign-language-interpreting'>&nbsp;&nbsp; Data-communication</i></a></Link><br /><br />
						<Link to="/life-cycle"><a className="w3-link-reference"><i class="fas fa-recycle">&nbsp;&nbsp;&nbsp; Life-cycle</i></a></Link>
					</div>
				</div>
				<div className="w3-dashboard-form w3-text-center">
					<h3 className="font-color"> Welcome to Dashboard... </h3>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
					
						<img className="w3-mt-2 w3-text-center" src="https://image.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg" />
						
					</div>
					{/* <SelectComponent /> */}
				</div>
			</div>
		)
	}
}
export default Dashboard;
