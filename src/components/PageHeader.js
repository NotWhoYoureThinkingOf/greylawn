import React, { Component } from 'react';

export default class PageHeader extends Component {
	constructor() {
		super();
		this.state = {
            name: 'Joe',
            page: '',
            image: ''
		};
	}

	render() {
		return (
			<div className="header-img" style={{
                
            }}>
                <div className="image"></div>
                <h2>{this.state.page}</h2>
            </div>
		);
	}
}
