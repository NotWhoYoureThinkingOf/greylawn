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
				<h1>This is the about page</h1>
			</div>
		);
	}
}
