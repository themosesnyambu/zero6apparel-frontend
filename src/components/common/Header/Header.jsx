import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <>
    <nav className="nav-extended">
      <div className="nav-wrapper">
        <Link to="/">
          <span className="brand-logo">
            <img src="" alt="logo" />
          </span>
        </Link>
        <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="*">Collections</Link></li>
          <li><Link to="*">Shop</Link></li>
          <li><Link to="*">New Releases</Link></li>
          <li><Link className="waves-effect waves-light btn" to="/signin">sign in</Link></li>
          <li><Link className="waves-effect waves-light btn" to="/signup">sign up</Link></li>
        </ul>
      </div>
    </nav>

  </>
);
