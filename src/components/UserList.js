import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import UserUtils from './../utils/user';
import { connect } from 'react-redux';
import { setUserList, getAssignUser } from './../redux/actions/index';
import AssignUser from './AssignUser';
import Header from './Header';

class UserList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: [],
			loading: false
		}
		this._assignUser = this._assignUser.bind(this);
	}

	componentDidMount() {
		const active = JSON.parse(localStorage.getItem('userData'));
		this.setState({
			loading: true,
		})
		UserUtils.getAllUserList(active.token).then((response) => {
			this.props.dispatch(setUserList(response.data));
			this.setState({
				users: response.data,
				loading: false,
			})
		});
	}

	_assignUser(val) {
		this.props.dispatch(getAssignUser(val));
	}

	render() {
		const { users } = this.state;
		return (
			<div>
				<Header />
				<h3 className="font-color w3-text-center"> Welcome Users... </h3>
				<AssignUser />
				<br />
				{this.state.loading ? <div className="w3-loading"> Loading... </div> : null}
				<div className="w3-userlist-form">	
					{
						(users || []).map((val, index) => (
							<div key={index}>
								<div>
									<div>{val.fullName}&nbsp;&nbsp;&nbsp;&nbsp;
											<button className={(val.fullName === this.props.assignUserName) ? "w3-assigned-btn" : "w3-assign-btn"} onClick={() => this._assignUser(val.fullName)}>
											<b>	{val.fullName === this.props.assignUserName ? 'Assigned' : 'Assign'} </b></button>
									</div>
									<br />
								</div>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

const select = state => ({
	userlist: state.userReducer.users,
	assignUserName: state.assignUserReducer.assignUser,
});
export default connect(select)(UserList);