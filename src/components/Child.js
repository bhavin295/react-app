import React, { Component } from 'react'

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
		}
		this._update = this._update.bind(this);
		this.state = {number: this.props.number};
		
  }
	componentWillReceiveProps(nextProps) {
			console.log("In componentWillReceiveProps method... ");
	}

  _update(e){
    this.props.onUpdate(e.target.value);
    this.setState({name: e.target.value});
  };

  render() {
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