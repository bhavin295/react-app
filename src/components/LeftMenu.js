import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import assignUserConnect from './../redux/connect/assignUserConnect';


class LeftMenu extends Component {

	render() {
		return (
			<aside className="LeftMenu">
				<ul className="dash_ul">
					<div className="row px-3">
						<div>
							<img
								src="./assets/images/admin.png"
								style={{ height: "100px", width: "100px" }}
							/>
						</div>
						<div className="text-center p-2 mt-4">
							<div className="w3-mt-1"><i class="fas fa-user"></i>&nbsp;&nbsp; <b>Assigned User </b></div>
							<div style={{ color: 'blue', textAlign: 'center' }}> {this.props.assignUserName} </div>
						</div>
					</div>
					
					<li>
						<NavLink to="/userlist" activeClassName="active">
							<i className="fas fa-users"></i>
							<span>UserList</span>
						</NavLink>

					</li>

					<li>
						<NavLink to="/data-communication" activeClassName="active">
							<i className="fas fa-american-sign-language-interpreting"></i>
							<span>&nbsp;Data-communication</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/life-cycle" activeClassName="active">
							<i className="fas fa-recycle"></i>
							<span>Life-cycle</span>
						</NavLink>
					</li>
				</ul>
			</aside>
		);
	}
}

export default assignUserConnect(LeftMenu);
