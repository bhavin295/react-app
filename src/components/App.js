import React, { Component } from 'react'
import Parent from '../life-cycle/Parent'

class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				
        <span>App component...</span>
				<br /><br />
				<Parent />
			</div>
		)
	}
}

export default App;
