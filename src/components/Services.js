import React, { Component } from 'react';

export default class Services extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (
			<div className="servicesPage">
				<div className="main-services">
					<div className="header-img">
						<div className="image"></div>
						<h2>Services</h2>
					</div>
					<div className="service hours">				 
						Greylawn Foods is open 24 hours a day from Sunday night at 10:00pm to Friday night at 6:00pm. Normal scheduled receiving hours are from 8am to 6pm. <br />We also schedule special receiving hours whenever needed - just give us a call. We will arrange for your shipment to be off-loaded, stored, then distributed as you require.
					</div>
					<div className="service refrigeration">
						<div className="info">
							<h2 className="title">Refrigeration</h2>
							<p>We offer our customers a 54,000 cubic ft. food cooler in which the temperature is kept at a constant 38 degrees air temperature. We also have a smaller cooler, 35,000 cubic feet kept at 36 degrees air temperature. In addition, we offer customers who need meat storage an even colder and bigger refrigerated warehouse 75,000 cubic feet, kept at 29 degrees air temperature. All refrigerated spaces are available for short and intermediated use. The 89,000 cubic feet of cooler space is available for both long and short term storage, it accommodates more than 23 trailer loads of product.</p>
						</div>
						<img src="https://www.raymondcorp.com/-/media/raymond/social-sharing-images/1200x697_dock_and_door.jpg" alt="pic1" />
					</div>
					<div className="service frozen">
						<img src="https://www.cheneybrothers.com/wp-content/uploads/2016/06/hp_img_2.jpg" alt="pic2" />
						<div className="info">
							<h2 className="title">Frozen</h2>
							<p>Greylawn Foods maintains a separate warehouse for frozen foods of 35,000 cubic feet capacity at which the temperature is -10 degrees air temperature, available for short and long term orders.</p>
							<p>Once in our warehouses, each producer's products can be consolidated and custom designed programs achieved. Your product can be delivered to your customer's warehouses, and/or their stores on the dates you desire. Together, we can design a distribution program to fit your needs.</p>
						</div>
					</div>
					<div className="service dands">
						<div className="info">
							<h2 className="title">D&S Logistics - Brokerage division</h2>
							<p>Greylawn's established brokerage division handles both truckload (TL) and less than truckload (LTL) shipments of your product. This allows us to supply you with service to all points within the Continental 48 States which are beyond the scope of Greylawn Foods's service area.Greylawn's network of carriers who work for our brokerage division have been selected to give you the same quality of service as provided by Greylawn Foods.</p>
							<p>Carriers that are used by D&S Logistics have in many instances delivered to our facility in Cranston, RI and have proven themselves reliable. In addition, D&S Logistics works with our Intermodal and LTL companies as well as our warehouse operations to get your product moved efficiently.</p>
						</div>
						<img src="https://www.sflcompanies.com/wp-content/uploads/2018/11/Coast-To-Coast-Transportation-Solutions2.jpg" alt="pic3" />
						
					</div>
					<div className="service tcl">
						<img src="https://www.trucking.org/sites/default/files/2020-02/Intermodal%20truck.jpg" alt="pic4" ></img>
						<div className="tclInfo">
							<div className="info">
								<h2 className="title">TCL Inc. - Intermodal</h2>
								<p>In 1995 a corporation was started by David Goldman. In association with Greylawn Foods, TCL expanded the service abilities of the Greylawn family of companies by offering it's  customers truck-rail and truck-water service.</p>
								<p>This added service provides our customers with an alternate means of transporting their products, both to and from national and international markets.</p>
							</div>
							<div className="extra-services">
								<div className="specialized">
								<h2 className="title">Specialized Services</h2>
									<ul>
										<li>Intermodal drayage to New England, NY ad NJ</li>
										<li>Warehousing and distribution</li>
										<li>Temperature controlled TL & LTL</li>
										<li>Liquor control Permits; all New England states, NY & NJ</li>
										<li>Intermodal Marketing Services</li>
										<li>Fully insured</li>
										<li>Bonded Carrier</li>
										<li>Private Tri-axle Chassis</li>
										<li>240v Refer Plugs</li>
									</ul>
								</div>
								<div className="ramps">
									<h2 className="title">
										Ramps & Piers Served
									</h2>					
									<ul>
										<li>ICI Southbridge St., Worcester, MA</li>
										<li>ICI Wiser Ave., Worcester, MA</li>
										<li>Conrail: Worcester, MA</li>
										<li>Conrail: Springfield, MA</li>
										<li>Conrail: Boston, MA</li>
										<li>Conley Terminal, Boston, MA</li>
										<li>CN - Gulford Terminals, Ayer, MA</li>
										<li>NY/NJ Ports</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>				
			</div>
		);
	}
}
