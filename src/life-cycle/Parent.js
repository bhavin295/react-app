import React, { Component } from 'react';
import Child from './Child';
import Header from './../components/Header';

class Parent extends Component {

	constructor(props) {
		super(props);
		console.log("Parent : Constructor called...")
		this.state = {
			name: " ",
			number: 10,
		};
		this.onChange = this.onChange.bind(this);
	}

	componentWillMount() {
		console.log("Parent : In ComponentWillMount method...");
	}

	componentDidMount() {
		console.log("Parent : In ComponentDidMount method...");
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("Parent : In componentWillUpdate method... ");
	}

	onChange(val) {
		this.setState({
			name: val,
			number: 11
		})
	};

	render() {
		console.log("Parent : Render called...")
		return (
			<div>
				<Header />
				<br />
				<div className="w3-life-cycle-form">
					<h3 className="font-color w3-text-center"> * React Life-cycle example *  </h3>
					<span>Value in Parent Component State : {this.state.name}</span>
					<Child onUpdate={this.onChange} number={this.state.number} />
					<div>
						<p>
							<ul>
								<h4 className="font-color"> * Mounting... </h4>
								<li>Parent : Constructor called...</li>
								<li>Parent : In ComponentWillMount method...</li>
								<li>Parent : Render called...</li>
								<li>Child : Constructor called...</li>
								<li>Child : In ComponentWillMount method...</li>
								<li>Child : Render called...</li>
								<li>Child : In ComponentDidMount method...</li>
								<li>Parent : In ComponentDidMount method...</li>
								<h4 className="font-color"> * Updating... </h4>
								<li>Parent : In componentWillUpdate method...</li>
								<li>Parent : Render called...</li>
								<li>Child : In componentWillReceiveProps method...</li>
								<li>Child : In shouldComponentUpdate method...</li>
								<li>Child : Render called...</li>
							</ul>
						</p>
					</div>

				</div>
			</div>
		)
	}
}

export default Parent;
