import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class UserList extends Component {
	render () {
		return (
			<div>
					<h4 className="font-color"> Welcome Users... </h4>
					<Link to="/dashboard"> Dashboard </Link>
				  <br /><br />
			</div>
		)
	}
}

export default UserList