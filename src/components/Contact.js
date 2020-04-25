import React, { Component } from 'react';

export default class Contact extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (
			<div className="contactPage">
				<h1>This is the contact page</h1>
			</div>
		);
	}
}
