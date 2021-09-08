import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { logoutAccount } from "../../../redux/actions/authActions";
import search from "../../../../assets/icons/search1.png";
import person from "../../../../assets/icons/person1.png";
import bag from "../../../../assets/icons/bag1.png";
import menu from "../../../../assets/icons/menu1.png";

const AuthenticatedHeader = ({ history }) => {
  const logoutUser = () => {
    const dispatch = useDispatch();
    dispatch(logoutAccount(history));
  };

  const user = useSelector((state) => state.auth.user);
  const { id } = user;

  const cart = useSelector((state) => state.bag.cart);

  return (
    <>
      <div className="navbar">
        <div className="top">
          <button type="button" onClick={logoutUser}>
            logout
          </button>
        </div>
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
              <Link to={`/profile/${id}`}>
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
          
          <div className="nav-menu-btn">
            <img src={menu} alt="menu-btn" />
          </div>
        </div>
      </div>
    </>
  );
};

AuthenticatedHeader.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default AuthenticatedHeader;
