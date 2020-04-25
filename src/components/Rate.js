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
				<h1>This is the rate quote</h1>
			</div>
		);
	}
}
