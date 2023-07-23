import React from "react";
import "../components/Footer.css";
import Logo from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally sourced menu with daily specials.
          </p>
          <div className="footer-content">
            <div className="locations">
              <h5>LOCATIONS</h5>
              <ul>
                <li>Vancouver</li>
                <li>Toronto</li>
                <li>Alberta</li>
                <li>Montreal</li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>MON - WED: 10:30AM - 12:00AM</li>
                <li>FRI: 12:00PM - 1:00AM</li>
                <li>SAT - SUN: 10:30AM - 12:00AM</li>
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>1771 18th E Ave, Vancouver, BC</li>
                <li>TEL: +1(778)-926-9774</li>
                <li>EMAIL: karlenovich@yahoo.com</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
