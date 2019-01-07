import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import UserUtils from './../utils/user';
import { connect } from 'react-redux';
import { setUserList, getAssignUser } from './../redux/actions/index';
import AssignUser from './AssignUser';

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
				<h4 className="font-color"> Welcome Users... </h4>
				<AssignUser />
				<br />
				<Link to="/dashboard"> Dashboard </Link>
				<br /><br />
				{this.state.loading ? <div className="w3-loading"> Loading... </div> : null}
				{
					(users || []).map((val, index) => (
						<div key={index}>
							<div>
								<div>{val.fullName}&nbsp;&nbsp;&nbsp;&nbsp;
								<button className={(val.fullName === this.props.assignUserName) ? "w3-assigned-btn" : "w3-assign-btn"} onClick={() => this._assignUser(val.fullName)}>
									<b>	{val.fullName === this.props.assignUserName ?  'Assigned' : 'Assign'} </b></button>
								</div>
								<br />
							</div>
						</div>
					))
				}
			</div>
		)
	}
}

const select = state => ({
	userlist: state.userReducer.users,
	assignUserName: state.assignUserReducer.assignUser,
});
export default connect(select)(UserList);