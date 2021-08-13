import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import search from "../../../../assets/search1.png";
import person from "../../../../assets/person1.png";
import bag from "../../../../assets/bag1.png";
import "./header.scss";

export default () => {
  const cart = useSelector((state) => state.bag.cart);
  return (
    <>
      <div className="navbar">
        <div className="top">join us</div>
        <div className="bottom">
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
              <Link to="/profile">
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
      </div>
    </>
  );
};
