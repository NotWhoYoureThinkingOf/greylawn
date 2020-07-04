import React from 'react';

function Footer() {
  return (    
    <section className="footer">
        <div className="phoneNumbers">
            <div className="greylawn">
                <p className="name">Greenyard</p>
                <p className="phone">835-675-4695</p>
            </div>
            <div className="d&s">
                <p className="name">A & C Logistics</p>
                <p className="phone">871-234-9685</p>
            </div>
            <div className="tcl">
                <p className="name">TBN, Inc.</p>
                <p className="phone">800-695-4617</p>
            </div>
        </div>
        <div className="bottomInfo">
            <div className="copyright">
                <p>Copyright 2004 Greenyard Foods, Inc. | All Rights Reserved</p>
            </div>
            <div className="address">
                6032 Middlefield Pike Cranston, TX 02921
            </div>
        </div>
	</section>
    
  );
}

export default Footer;