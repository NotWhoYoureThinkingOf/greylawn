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
				<div className="main-contact">
					<div className="header-img">
						<div className="image"></div>
						<h2>Contact Us</h2>
					</div>
					<div className="contact-content">
						<div className="info">
							<div className="info-header">
								<p>Please complete all information below or call one of our toll-free numbers on the Greenyard Foods home page for immediate assistance.</p>
								<p>We will make every effort to respond within a 12-24 Hour period.</p>
							</div>
							<div className="image">
								<img src="https://go1staff.com/wp-content/uploads/2014/12/access-your-documents-anywhere-phones.png" alt="ratepic1"/>
							</div>							
						</div>
						<div className="contact-form">
							<form>
								<div className="labels">
									<div>
										<label htmlFor="fname" className="fname">First Name:</label>	<input type="text" id="fname" name="fname"></input>		
									</div>

									<div>
										<label htmlFor="lname" className="lname">Last Name:</label>
										<input type="text" id="lname" name="lname"></input>
									</div>

									<div>
										<label htmlFor="company-name" className="destination-zip">Company Name:</label>
										<input type="text" id="destination-zip" name="destination-zip"></input>
									</div>

									<div>
										<label htmlFor="contact-name" className="contact-name">Contact Name:</label>
										<input type="text" id="contact-name" name="contact-name"></input>
									</div>

									<div>
										<label htmlFor="address1" className="address1">Address Line 1:</label>
										<input type="text" id="address1" name="address1"></input>
									</div>

									<div>
										<label htmlFor="address2" className="address2">Address Line 2:</label>
										<input type="text" id="address2" name="address2"></input>
									</div>

									<div>
										<label htmlFor="city" className="city">City:</label>
										<input type="text" id="city" name="city"></input>
									</div>

									<div>
										<label htmlFor="state" className="state">State:</label>
										<input type="text" id="state" name="city"></input>
									</div>

									<div>
										<label htmlFor="zip-code" className="zip-code">Zip Code:</label>
										<input type="text" id="zip-code" name="zip-code"></input>
									</div>

									<div>
										<label htmlFor="phone-number" className="phone-number">Phone Number:</label>
										<input type="tel" id="phone-number" name="phone-number"></input>
									</div>

									<div>
										<label htmlFor="email" className="email">Email Address:</label>
										<input type="email" id="email" name="email"></input>
									</div>

									<div>
										<label htmlFor="type-product" className="type-product">Type of Product:</label>
										<select id="type=product" name="type-product">
											<option>Dry</option>
											<option>Frozen</option>
											<option>Cooled</option>
										</select>
									</div>

									<div>
										<label htmlFor="interested-in" className="interested-in">Interested In:</label>
										<select id="interested-in" name="interested-in">
											<option>Transportation</option>
											<option>Warehousing</option>
											<option>Intermodal</option>
											<option>Distribution</option>
										</select>
									</div>

									<div>
										<label htmlFor="product-desc" className="product-desc">Product Description:</label>
										<input type="text" id="product-desc" name="product-desc"></input>
									</div>
								</div>

								<div className="additional">
										<p>Please include any additional information or questions here:</p>
										<textarea rows="8" cols="100" name='additional-information'></textarea>
								</div>

								
								<button className="button">Submit</button>
								
																
							</form>
						</div>
					</div>
					
				</div>				
			</div>
		);
	}
}
