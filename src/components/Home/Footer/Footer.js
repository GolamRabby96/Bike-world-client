import React from "react";
import './Footer.css'
import bike from '../../../photos/bw.png'

const Footer = () => {
	return (
		<div className="container-fluid">
            <div className="row bgcolor mt-5">
			<div className="col-md-6 ">
                <img className="fooimgcenter" src={bike} alt=""/>
            </div>
			<div className="col-md-2 col-sm-4 pt-3">
                <h2 className="h2edit">Shop</h2>
                <p>Sell online</p>
                <p>Features</p>
                <p>Examples</p>
                <p>Website editors</p>
                <p>Online retail</p>
            </div>
            <div className="col-md-2 col-sm-4 pt-3">
                <h2 className="h2edit">Press</h2>
                <p>Events</p>
                <p>News</p>
                <p>Awards</p>
                <p>Testimonials</p>
                <p>Online retail</p>
            </div>
            <div className="col-md-2 col-sm-4 pt-3">
                <h2 className="h2edit">About</h2>
                <p>Contact</p>
                <p>Services</p>
                <p>Team</p>
                <p>Career</p>
                <p>Contacts</p>
            </div>
		</div>
        </div>
	);
};

export default Footer;
