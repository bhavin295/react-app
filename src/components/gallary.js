import React, { Component } from 'react';
import Header from './../components/Header';

class Gallary extends Component {
	render() {
		return (
			<div className="bg-banner">
				<Header />
				<h3 className="font-color w3-text-center"> Welcome to Gallary </h3>

				<div className="gallery">
					<div className="gallery-item">
						<img className="gallery-image" src="https://image.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://image.freepik.com/free-photo/happy-male-writing-positive-mail-client_1163-3986.jpg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://image.freepik.com/free-photo/diverse-corporate-employees-group-working-together-using-computers-office_1163-5124.jpg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://image.freepik.com/free-photo/happy-company-employees-using-laptop-office_1163-5372.jpg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://image.freepik.com/free-photo/team-professional-developer-programmer-cooperation-meeting-brainstorming-programming-website-working-software-coding-technology-writing-codes-database_122498-115.jpg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://image.freepik.com/free-photo/african-american-ceo-giving-presentation-corporate-team-meeting-concept_1163-4880.jpg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://image.freepik.com/free-photo/casual-entrepreneur-explaining-business-project-his-coworker_1163-3932.jpg" />
					</div>

					<div className="gallery-item">
						<img className="gallery-image" src="https://image.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg" />
					</div>

				</div>
			</div>
		)
	}
}

export default Gallary