import React, { Component } from 'react';
import Header from './../components/Header';

class Gallary extends Component {
	render() {
		return (
			<div>
				<Header />
				<h3 className="font-color w3-text-center"> Welcome to Gallary </h3>
				<div className="gallery">
					<div className="gallery-item">
						<img className="gallery-image" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://blog.flippa.com/wp-content/uploads/2015/08/how-to-sell-websites-with-no-traffic.jpg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://images.freecreatives.com/wp-content/uploads/2016/12/Free-Professional-Background-Image-for-Websites.jpeg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://designroast.org/wp-content/uploads/2015/08/ways-to-make-website-more-professional.jpg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/11/1447899031featured-image-e1447899081326.jpg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://www.viralservice.com/wp/wp-content/uploads/2016/02/hero-website-copywriting.jpg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://www.scribizzy.com/wp-content/uploads/2012/03/website-copywriting-04.jpg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://cdn.buyhttp.com/wp-content/uploads/2017/11/wp-admin.jpg" />
					</div>
				</div>
			</div>
		)
	}
}

export default Gallary