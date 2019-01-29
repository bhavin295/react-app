import React, { Component } from 'react';
import Select from 'react-select';
import Header from './Header';

const data = [
	{
		value: "Yellow",
		label:
			<span className="w3-text">
				<img className="w3-icon" src="https://www.scribizzy.com/wp-content/uploads/2012/03/website-copywriting-04.jpg" />
				{" " + ('Yellow')}
			</span>
	},
	{
		value: "Green",
		label:
			<span className="w3-text">
				<img className="w3-icon" src="https://www.viralservice.com/wp/wp-content/uploads/2016/02/hero-website-copywriting.jpg" />
				{" " + ('Green')}
			</span>
	},
	{
		value: "Blue",
		label:
			<span className="w3-text">
				<img className="w3-icon" src="https://designroast.org/wp-content/uploads/2015/08/ways-to-make-website-more-professional.jpg" />
				{" " + ('Blue')}
			</span>
	},
];

class SelectComponent extends Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<h4> React select demo </h4>
					<div style={{ width: '25%' }}>
						<Select
							closeMenuOnSelect={false}
							isMulti
							options={data}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default SelectComponent