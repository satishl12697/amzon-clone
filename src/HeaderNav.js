import React from "react";
import "./HeaderNavStyle.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function HeaderNav() {
  return (
    <nav className="headernav">
      {/* 5 Links */}
      <div className="header_nav">
        <Link to="/" className="header_link">
          <div className="header_optionmenu">
            {/* shopping basket icon*/}
            <MenuIcon />
            {/* number of items in the basket */}
            <span className="header_optionLineOne header_text">All</span>
          </div>
        </Link>

        {/* 1st Link */}
        <Link to="/Bestsellers" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Best Sellers </span>
          </div>
        </Link>
        {/* 2nd Link */}
        <Link to="/Todaysdeals" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Today's Deals</span>
          </div>
        </Link>
        {/* 3rd Link */}
        <Link to="/Mobiles" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Mobiles</span>
          </div>
        </Link>

        {/* 4th Link */}
        <Link to="/Fashion" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Fashion</span>
          </div>
        </Link>

        <Link to="/Electronics" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne"> Electronics </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default HeaderNav;
