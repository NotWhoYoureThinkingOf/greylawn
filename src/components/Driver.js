import React, { Component } from 'react';

export default class Driver extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (
			<div className="driverPage">
				<h1>This is the driver training page</h1>
			</div>
		);
	}
}
