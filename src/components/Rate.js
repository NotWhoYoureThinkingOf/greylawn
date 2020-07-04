import React, { Component } from 'react';

export default class Rate extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (
			<div className="ratePage">
				<div className="main-rate">
					<div className="header-img">
						<div className="image"></div>
						<h2>Rate Quote</h2>
					</div>
					<div className="rate-content">
						<div className="info">
							<div className="info-header">
								<p>Please complete all information below or call one of our toll-free numbers on the Greenyard Foods home page for immediate assistance.</p>
								<p>We will make every effort to respond within a 12-24 Hour period.</p>
							</div>
							<div className="image">
								<img src="https://actiondeafness.org.uk/wp-content/uploads/2018/09/Office-worker.jpg" alt="ratepic1"/>
							</div>							
						</div>
						<div className="quote-form">
							<form>
								<div className="labels">
									<div>
										<label htmlFor="origin-zip" className="origin-zip">Origin Zip Code:</label>	<input type="text" id="origin-zip" name="origin-zip"></input>					
									</div>

									<div>
										<label htmlFor="origin-city" className="origin-city">Origin City, State:</label>
										<input type="text" id="origin-city" name="origin-city"></input>
									</div>

									<div>
										<label htmlFor="destination-zip" className="destination-zip">Destination Zip Code:</label>
										<input type="text" id="destination-zip" name="destination-zip"></input>
									</div>

									<div>
										<label htmlFor="destination-city" className="destination-city">Destination City, State:</label>
										<input type="text" id="destination-city" name="destination-city"></input>
									</div>

									<div>
										<label htmlFor="product-desc" className="product-desc">Product Description:</label>
										<input type="text" id="product-desc" name="product-desc"></input>
									</div>

									<div>
										<label htmlFor="product-weight" className="product-weight">Product weight:</label>
										<input type="text" id="product-weight" name="product-weight"></input>
									</div>

									<div>
										<label htmlFor="pallets" className="pallets">Number of Pallets:</label>
										<input type="number" id="pallets" name="pallets" min="0"></input>
									</div>

									<div>
										<label htmlFor="customer-name" className="customer-name">Customer Name:</label>
										<input type="text" id="customer-name" name="customer-name"></input>
									</div>

									<div>
										<label htmlFor="contact-person" className="contact-person">Contact Person:</label>
										<input type="text" id="contact-person" name="contact-person"></input>
									</div>

									<div>
										<label htmlFor="phone-number" className="phone-number">Phone Number:</label>
										<input type="tel" id="phone-number" name="phone-number"></input>
									</div>

									<div>
										<label htmlFor="email" className="email">Email Address:</label>
										<input type="email" id="email" name="email"></input>
									</div>
								</div>

								<div className="additional">
										<p>Please include any additional information or questions here:</p>
										<textarea name='additional-information'></textarea>
								</div>

								<button className="button">
									Submit
								</button>

																
							</form>
						</div>
					</div>
					
				</div>				
			</div>
		);
	}
}
