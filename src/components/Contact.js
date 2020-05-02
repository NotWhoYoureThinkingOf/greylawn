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
								<p>Please complete all information below or call one of our toll-free numbers on the Greylawn Foods home page for immediate assistance.</p>
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
										<label htmlFor="fname" className="fname">First Name:</label>						
									</div>

									<div>
										<label htmlFor="lname" className="lname">Last Name:</label>
									</div>

									<div>
										<label htmlFor="company-name" className="destination-zip">Company Name:</label>
									</div>

									<div>
										<label htmlFor="contact-name" className="contact-name">Contact Name:</label>
									</div>

									<div>
										<label htmlFor="address1" className="address1">Address Line 1:</label>
									</div>

									<div>
										<label htmlFor="address2" className="address2">Address Line 2:</label>
									</div>

									<div>
										<label htmlFor="city" className="city">City:</label>
									</div>

									<div>
										<label htmlFor="state" className="state">State:</label>
									</div>

									<div>
										<label htmlFor="zip-code" className="zip-code">Zip Code:</label>
									</div>

									<div>
										<label htmlFor="phone-number" className="phone-number">Phone Number:</label>
									</div>

									<div>
										<label htmlFor="email" className="email">Email Address:</label>
									</div>

									<div>
										<label htmlFor="type-product" className="type-product">Type of Product:</label>
									</div>

									<div>
										<label htmlFor="interested-in" className="interested-in">Interested In:</label>
									</div>

									<div>
										<label htmlFor="product-desc" className="product-desc">Product Description:</label>
									</div>
								</div>

								<div className="inputs">
									<input type="text" id="origin-zip" name="origin-zip"></input>
									<input type="text" id="origin-city" name="origin-city"></input>
									<input type="text" id="destination-zip" name="destination-zip"></input>
									<input type="text" id="destination-city" name="destination-city"></input>
									<input type="text" id="product-desc" name="product-desc"></input>
									<input type="text" id="product-weight" name="product-weight"></input>
									<input type="number" id="pallets" name="pallets" min="0"></input>
									<input type="text" id="customer-name" name="customer-name"></input>
									<input type="text" id="contact-person" name="contact-person"></input>
									<input type="tel" id="phone-number" name="phone-number"></input>
									<input type="email" id="email" name="email"></input>
									<select name="type-product">
										<option>Dry</option>
										<option>Frozen</option>
										<option>Cooled</option>
									</select>
									<select name="interested-in">
										<option>Transportation</option>
										<option>Warehousing</option>
										<option>Intermodal</option>
										<option>Distribution</option>
									</select>
									<input type="text" id="product-desc" name="product-desc"></input>
								</div>

								<div className="additional">
										<p>Please include any additional information or questions here:</p>
										<textarea rows="8" cols="100" name='additional-information'></textarea>
								</div>
																
							</form>
						</div>
					</div>
					<div className="button-container">
						<div className="button"><span>Submit</span></div>
					</div>
				</div>				
			</div>
		);
	}
}
