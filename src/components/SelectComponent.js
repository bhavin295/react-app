import React, { Component } from 'react';
import Select from 'react-select';
import Header from './Header';

const data = [
	{
		value: "Option1",
		label:
			<span className="w3-text">
				<img className="w3-icon" src="https://image.freepik.com/free-photo/happy-company-employees-using-laptop-office_1163-5372.jpg" />
				{" " + ('Option1')}
			</span>
	},
	{
		value: "Option2",
		label:
			<span className="w3-text">
				<img className="w3-icon" src="https://www.viralservice.com/wp/wp-content/uploads/2016/02/hero-website-copywriting.jpg" />
				{" " + ('Option2')}
			</span>
	},
	{
		value: "Option3",
		label:
			<span className="w3-text">
				<img className="w3-icon" src="https://designroast.org/wp-content/uploads/2015/08/ways-to-make-website-more-professional.jpg" />
				{" " + ('Option3')}
			</span>
	},
];

class SelectComponent extends Component {
	render() {
		return (
			<div style={{marginLeft:'10px'}}>
				<div style={{ width: '25%' }}>
					<Select
						closeMenuOnSelect={false}
						isMulti
						options={data}
					/>
				</div>
			</div>

		)
	}
}

export default SelectComponent