import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import UserUtils from './../utils/user';
import { FadeLoader } from 'react-spinners';

class UserList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: [],
			loading: false
		}
	}

	async componentDidMount() {
		const active = JSON.parse(localStorage.getItem('userData'));
		this.setState({
			msg: 'Fetching User Data...',
			loading: true,
		})
		UserUtils.getAllUserList(active.token).then((response) => {
			console.log("response", response);
			this.setState({
				users: response.data,
				loading: false,
			})
		});
	}

	render() {
		const { users } = this.state;
		return (
			<div>
				<h4 className="font-color"> Welcome Users... </h4>
				<Link to="/dashboard"> Dashboard </Link>
				<br />
				<div className="w3-loading w3-flex">
					<FadeLoader
						sizeUnit={"px"}
						size={50}
						loading={ this.state.loading}
					/>
				</div>
				{
					(users || []).map((val, index) => (
						<div key={index}>
							<div>
								<div>{val.fullName}&nbsp;&nbsp;&nbsp;&nbsp;
								<button className="w3-assign-btn"><b> Assign </b></button>
								</div>
								<br/>
							</div>
						</div>
					))
				}
			</div>
		)
	}
}

export default UserList