/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import search from "../../../../assets/icons/search1.png";
import person from "../../../../assets/icons/person1.png";
import close from "../../../../assets/icons/close1.png";
import bag from "../../../../assets/icons/bag1.png";

const UnAuthSideNav = ({ handleChange }) => {
    const cart = useSelector((state) => state.bag.cart);
return(
  <>
    <div className="close-menu-btn">
      <img onClick={handleChange} src={close} alt="menu-btn" />
    </div>
    <div className="sidenav-content">
      <div className="routes">
        <div>
          <Link to="/collections">Collections</Link>
        </div>
        <div>
          <Link to="*">Shop</Link>
        </div>
        <div>
          <Link to="*">New Releases</Link>
        </div>
      </div>
      <div className="logo">
        <Link to="/">
          <span className="brand-logo">
            <img src="" alt="logo" />
          </span>
        </Link>
      </div>
      <div className="profile">
        <div className="profile-item">
          <Link to="/">
            <img src={search} alt="my profile" />
          </Link>
        </div>
        <div className="profile-item">
          <Link to="/signin">
            <img src={person} alt="my profile" />
          </Link>
        </div>
        <div className="profile-item">
              <Link to="/bag">
                <img src={bag} alt="my profile" />
                {cart.length}
              </Link>
            </div>
      </div>
    </div>
  </>);
};

UnAuthSideNav.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default UnAuthSideNav;
