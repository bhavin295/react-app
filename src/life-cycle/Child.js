import React, { Component } from 'react'

class Child extends React.Component {
  constructor(props) {
    super(props);
		console.log("Child : Constructor called...")
		this._update = this._update.bind(this);
		this.state = {number: this.props.number};	
	}
	
	componentWillMount() {
		console.log("Child : In ComponentWillMount method...");
	}

	componentDidMount() {
		console.log("Child : In ComponentDidMount method...");
	}

	shouldComponentUpdate(){
		console.log("Child : In shouldComponentUpdate method...");
		return true;
	}

	componentWillReceiveProps(nextProps) {
			console.log("Child : In componentWillReceiveProps method... ");
	}

  _update(e){
    this.props.onUpdate(e.target.value);
  };

  render() {
		console.log("Child : Render called...")
    return (
      <div>
				<br />
        <input
					type="text"
          placeholder="type here"
          onChange={this._update}
          value={this.state.name}
        />
      </div>
    )
  }
}
export default Child;