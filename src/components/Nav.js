import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (			
            <nav>
                <div className="logo">
                    <img src="/img/trucklogo.png" className="trucklogo"></img>Greylawn
                    Foods
                </div>
                <div className="menu">
                    {/* <div className="header">Welcome</div> */}
                    <div className="links">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About Us</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/rate'>Rate Quote</Link>
                        <Link to='/contact'>Contact Us</Link>
                        <Link to='/driver'>Driver Training</Link>
                    </div>
                </div>
            </nav>				
			
		);
	}
}
