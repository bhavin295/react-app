import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import UserUtils from './../utils/user';
import { connect } from 'react-redux';
import { setUserList, getAssignUser } from './../redux/actions/index';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
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
		const active = JSON.parse(sessionStorage.getItem('userData'));
		this.setState({
			loading: true,
		})
		UserUtils.getAllUserList(active.token).then((response) => {
			this.props.dispatch(setUserList(response));
			this.setState({
				users: response,
				loading: false,
			})
		});
	}

	_assignUser(val) {
		this.props.dispatch(getAssignUser(val));
		this.props.history.push('/dashboard')
	}

	render() {
		const { users } = this.state;
		const columns = [
			{
				Header: 'User Id',
				accessor: 'userId',
				width: 150,
				Cell: ({ original }) => {
					return original.id ? original.id : null;
				}
			},
			{
				Header: 'Name',
				accessor: 'name',
				width: 200,
				Cell: ({ original }) => {
					return original.name ? original.name : null;
				}
			},
			{
				Header: 'Email Id',
				accessor: 'email',
				width: 250,
				Cell: ({ original }) => {
					return original.email ? original.email : null;
				}
			},
			{
				Header: 'Phone Number',
				accessor: 'phone',
				width: 250,
				Cell: ({ original }) => {
					return original.phone ? original.phone : null;
				}
			},
			{
				Header: 'Address',
				accessor: 'address',
				width: 200,
				Cell: ({ original }) => {
					return original.address.city ? original.address.city : null;
				}
			},
			{
				Header: 'Website',
				accessor: 'website',
				width: 250,
				Cell: ({ original }) => {
					return original.website ? original.website : null;
				}
			},
			{
				Header: "Action",
				accessor: "action",
				width: 100,
				Cell: ({ original }) => {
					return (
						<div className="cursor-pointer">
							<a onClick={() => this._assignUser(original.name)}>
								<b>	{original.name === this.props.assignUserName ? <i className="fas fa-user fa-lg bg-assigned"></i> : <i className="far fa-user fa-lg"></i>} </b></a>
						</div>
					);
				}
			}
		]
		return (
			<div>
				<Header />
				<h3 className="font-color w3-text-center"> Welcome Users... </h3>
				<br />
				<div>
					<ReactTable
						data={users}
						columns={columns}
						defaultPageSize={10}
					/>
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