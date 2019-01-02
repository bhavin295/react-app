import React, { Component } from 'react'

class MainChild extends React.Component {
  constructor(props) {
		super(props);
	}

	getAlert() {
    alert("Child component called...");
  }

  render() {
    return (
      <div>
				<br />
				Child -> First name : <input type="text" onChange={(e) => {this.props.onUpdate(e.target.value)}} value={this.props.name} />
				<br /><br />
				<span> Child -> Number : {this.props.number}</span>
      </div>
    )
  }
}
export default MainChild;