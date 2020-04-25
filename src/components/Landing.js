import React, { Component } from 'react';

export default class Landing extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (
			<div className="landingPage">
				<section className="banner-area">
					<div className="banner">
						<div className="slogan">
							A Leader in Northeast Warehousing and Distribution. <br />
							We have a solution for all your storage and transportation needs
						</div>
					</div>
				</section>
				<section className="content-area">
					<div className="info">
						<div className="tagline">
							We service 99% of the Northeast Food Warehouses 52 weeks a year,
							many of them daily
						</div>
						<div className="locations">
							<div className="state newEngland">
								<p>All the New England States:</p>
								<ul>
									<li>Rhode Island</li>
									<li>Massachusetts</li>
									<li>Connecticut</li>
									<li>Vermont</li>
									<li>New Hampshire</li>
									<li>Maine</li>
								</ul>
							</div>
							<div className="state newYork">
								<p>New York State:</p>
								<ul>
									<li>Metro, all of the boroughs including Long Island</li>
									<li>Weekly service Route 90</li>
								</ul>
							</div>
							<div className="state newJersey">
								<p>New Jersey:</p>
								<ul>
									<li>Metro, all points north of Edison</li>
									<li>Weekly service to Southern NJ points below Edison</li>
								</ul>
							</div>
							<div className="state newJersey">
								<p>Philadelphia, Pa - Weekly Service</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
