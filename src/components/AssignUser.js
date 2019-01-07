import React, { Component } from 'react'
import assignUserConnect from './../redux/connect/assignUserConnect';

class AssignUser extends Component {
	render() {
		return (
			<div style={{ color: 'blue' }}>
				<span>Assigned User : {this.props.assignUserName}</span>
			</div>
		)
	}
}

export default (assignUserConnect(AssignUser));