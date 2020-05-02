import React, { Component } from 'react';

export default class About extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (
			<div className="aboutPage">
				<div className="main-about">
					<div className="header-img">
						<div className="image"></div>
						<h2>About Us</h2>
					</div>
					<div className="about-content">
						<p className="paragraph paragraph1">
							Greylawn Foods is a privately owned warehousing and distribution company which has been run by four generations of the Goldman Family. Greylawn was started by the present owner's grandfather as a poultry company almost 100 years ago.
						</p>
						<p className="paragraph paragraph2">
							The transportation division of the business was started in 1974 and since 1985, when Sidney Goldman Took over the company, Greylawn has become one of the larger refrigerated/frozen LTL carriers in the Northeast.
						</p>
						<p className="paragraph paragraph3">
							With easy on/off access to Interstate 95, 195, 295, Greylawn Foods is based in central Rhode Island, minutes away from Providence and highway, railroad, airfreight and water facilities. Within 300 miles of Providence (the overnight trucking market) live 45 million people, making it one of the highest ranking population centers in the nation. More than 8 million people live within 75 miles of Providence. This population is greater than that of Chicago or Los Angeles.
						</p>
						<p className="paragraph paragraph4">
							Greylawn Foods does more than move product. We also help food manufacturers solve a variety of distribution and warehousing problems. We provide our customers with product consolidation as well as design distribution programs for product stored in our temperature controlled warehouse. Together, we can design a distribution program to achieve your regional marketing objectives by regular delivery of less then truckload (LTL) quantities of your product.
						</p>
					</div>	
				</div>				
			</div>
		);
	}
}
