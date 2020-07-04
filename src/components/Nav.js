import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
    }
    
    clickedMenu = () =>{
        const mobileLinks = document.querySelector('.mobile-links')
        mobileLinks.classList.toggle('mobile-clicked')
        console.log('bleh')       
    }

    hideMenu = () => {
        const mobileLinks = document.querySelector('.mobile-links')
        if (mobileLinks.classList.contains('mobile-clicked')) {
            mobileLinks.classList.remove('mobile-clicked')
            console.log('stonks')
        }  
    }

	render() {
		return (			
            <nav>
                <div className="mobile-links">
                    <Link to='/' onClick={this.hideMenu}>Home</Link>
                    <Link to='/about' onClick={this.hideMenu}>About Us</Link>
                    <Link to='/services' onClick={this.hideMenu}>Services</Link>
                    <Link to='/rate' onClick={this.hideMenu}>Rate Quote</Link>
                    <Link to='/contact' onClick={this.hideMenu}>Contact Us</Link>
                    <a href='https://www.infinitiworkforce.com/'>Drive Training</a>
                </div>
                <div className="logo">
                    <img src="/img/trucklogo.png" className="trucklogo" alt="logo"></img>Greenyard
                    Foods
                </div>
                <div className="menu">
                    <div className="mobile-menu">
                        <i className="fas fa-bars" onClick={this.clickedMenu}></i>
                    </div>
                    <div className="links">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About Us</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/rate'>Rate Quote</Link>
                        <Link to='/contact'>Contact Us</Link>
                        <a href='https://www.infinitiworkforce.com/'>Driver Training</a>
                    </div>
                </div>
            </nav>				
			
		);
	}
}
