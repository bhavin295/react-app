import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Slide } from 'react-slideshow-image';

const slideImages = [
	'http://e-cloudtechnologies.com/Images/Slider1.jpg',
	'https://www.eded.ca/wp-content/uploads/2017/09/webdesign-services.jpg',
	'http://www.duproduction.com.au/wp-content/uploads/2013/11/slider-06.jpg',
	'https://emmsalabsdigital.com.ng/wp-content/uploads/2017/06/slider11-1.png',
	'https://design.saveonhosting.com/images/slider/slider_4.jpg'
];

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true
}

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div>
					<Slide {...properties}>
						{
							slideImages.map((image, index) => <img key={index} style={{ width: '100%', height: '590px' }} src={image} />)
						}
					</Slide>
				</div>
			</div>
		)
	}
}

export default Home;
