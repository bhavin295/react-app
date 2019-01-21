import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="w3-left-form w3-underline">
					<Link to="/data-communication"><i class='fas fa-american-sign-language-interpreting'>&nbsp; Data-communication </i></Link>
					<br /><br />
					<Link to="/form-validation"><i class="fas fa-user-tie">&nbsp;&nbsp; Form-validation </i></Link>
					<br /><br />
					<Link to="/life-cycle"><i class="fas fa-recycle">&nbsp;&nbsp; Life-cycle </i></Link>
					<br /><br />
					<Link to="/dashboard"><i class="fas fa-tachometer-alt">&nbsp;&nbsp; Dashboard </i></Link>
					<br /><br />
					<Link to="/about"><i class="fas fa-user">&nbsp;&nbsp; About Us </i></Link>
					<br /><br />
					<Link to="/register"><i class="fas fa-user-plus">&nbsp; Sign Up </i></Link>
					<br /><br />
					<Link to="/login"><i class="fas fa-sign-in-alt">&nbsp;&nbsp; Login </i></Link>
				</div>
				<div>
					<h3 className="w3-font-color w3-main-form"> Welcome to Home page </h3>
				</div>
			</div>
		)
	}
}

export default Home;
