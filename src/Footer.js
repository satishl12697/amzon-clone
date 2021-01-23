import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img
        className="footer__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Footer Image"
      />
      <div className="footer__list">
        <ul className="footer__ul">
          <li>Australia</li>
          <li>Brazil</li>
          <li>Canada</li>
          <li>China</li>
          <li>France</li>
          <li>Italy</li>
          <li>Japan</li>
          <li>Mexico</li>
          <li>Netherlands</li>
          <li>Singapore</li>
          <li>Spain</li>
          <li>United Arab Emirates</li>
          <li>United Kingdom</li>
          <li>United States</li>
        </ul>
        <div className="copyrights">
          <span>
            Conditions of Use & Sale Privacy Notice Interest-Based Ads ©
            1996-2021, Amazon Clone, Inc. or its affiliates
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
