import React, { Component } from 'react'
import Child from './Child'

class App extends Component {

	constructor(props) {
		super(props);
		console.log("Constructor called...")
		this.state = {
			name: "",
			number:10,
		};
		this._onUpdate = this._onUpdate.bind(this);
	}

	componentWillMount() {
		console.log("In ComponentWillMount method...");
	}

	componentDidMount() {
		console.log("In ComponentDidMount method...");
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("In componentWillUpdate method... ");
	}

	_onUpdate(val) {
    this.setState({
			name: val,
			number:11
    })
  };

	render() {
		console.log("Render called...")
		return (
			<div>
        <span>Value in Parent Component State : {this.state.name}</span>

				<Child onUpdate={this._onUpdate} number={this.state.number}/>
			</div>
		)
	}
}

export default App;
