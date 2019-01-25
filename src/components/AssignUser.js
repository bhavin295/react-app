import React, { Component } from 'react'
import assignUserConnect from './../redux/connect/assignUserConnect';

class AssignUser extends Component {
	render() {
		return (
			<div>
				<img style={{ height: '120px', width: '120px', marginLeft: '50px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxjRIYT8pG0zgzKTilbko-MOv8pSnmO63M9FkOvfHoR9FvInm" />
				<div className="w3-mt-1"><i class="fas fa-user"></i>&nbsp;&nbsp; <b>Assigned User </b></div>
				<br />
				<div style={{ color: 'blue', textAlign: 'center' }}> {this.props.assignUserName} </div>
			</div>
		)
	}
}

export default (assignUserConnect(AssignUser));