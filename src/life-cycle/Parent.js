import React, { Component } from 'react';
import Child from './Child';
import Header from './../components/Header';

class Parent extends Component {

	constructor(props) {
		super(props);
		console.log("Parent : Constructor called...")
		this.state = {
			name: " ",
			number:10,
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
			number:11
    })
  };

	render() {
		console.log("Parent : Render called...")
		return (
			<div>
				<Header />
				<br />
        		<span>Value in Parent Component State : {this.state.name}</span>
				<Child onUpdate={this.onChange} number={this.state.number}/>
			</div>
		)
	}
}

export default Parent;
