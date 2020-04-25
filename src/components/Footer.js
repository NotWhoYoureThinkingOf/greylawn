import React from 'react';

function Footer() {
  return (    
    <section className="footer">
        <div className="phoneNumbers">
            <div className="greylawn">
                <p className="name">Greylawn</p>
                <p className="phone">800-556-6490</p>
            </div>
            <div className="d&s">
                <p className="name">D & S Logistics</p>
                <p className="phone">877-461-1117</p>
            </div>
            <div className="tcl">
                <p className="name">TCL, Inc.</p>
                <p className="phone">800-852-4470</p>
            </div>
        </div>
        <div className="bottomInfo">
            <div className="copyright">
                <p>Copyright 2004 Greylawn Foods, Inc. | All Rights Reserved</p>
            </div>
            <div className="address">
                2032 Plainfield Pike Cranston, RI 02921
            </div>
        </div>
	</section>
    
  );
}

export default Footer;