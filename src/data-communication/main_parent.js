import React, { Component } from 'react'
import MainChild from './main_child'

class MainParent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: " ",
			number: 10,
		};
		this.child = React.createRef();
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);		
	}

	onChange(val) {
		this.setState({
			name: val,
		})
	};

	onClick(){
    this.child.current.getAlert();
  };

	render() {
		return (
			<div>
				<br />
				<span> Parent -> Name : {this.state.name} </span>
					<MainChild 
						name={this.state.name}
						onUpdate={this.onChange}
						number={this.state.number}
						ref={this.child}
					/>
					<br />
					<button onClick={this.onClick}> Parent </button>
			</div>
		)
	}
}

export default MainParent;
