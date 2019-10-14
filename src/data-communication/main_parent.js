import React, { Component } from 'react';
import MainChild from './main_child';
import Header from './../components/Header';

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
				<Header />
				<br />
				
				<div className="w3-communication-form"> 
					<h3 className="font-color w3-text-center w3-mb-2"> * Parent to child and child to parent data-communication example * </h3>
					<ul style={{fontSize:'16px'}}>
							<li> On Input change of child textbox parent method called and displays the value. --> [ Using onChange method ] <br /><br /></li>
							<li> Pass the value of parent component in child componenet throgh props and display value. --> [ Number = 10 ] <br /><br /></li>
							<li> On Parent button clicks, it calls child component method or function. --> [ Using ref and this.child.current() ] <br /><br /></li>
					</ul>
					<div className="w3-hr w3-mb-2 w3-mt-1" />
					<span> Parent -->  Name :- {this.state.name} </span>
						<MainChild 
							name={this.state.name}
							onUpdate={this.onChange}
							number={this.state.number}
							ref={this.child}
						/>
						<br />
						<button onClick={this.onClick}> Parent </button>
				</div>
			</div>
		)
	}
}

export default MainParent;
