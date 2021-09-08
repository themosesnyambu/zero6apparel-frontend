import React, { useState } from "react";
import { useSelector } from "react-redux";
import AuthentictedHeader from "./authenticatedHeader";
import UnauthenticatedHeader from "./unAuthenticatedHeader";
import "./header.scss";

export default () => {
  const [sideNav, setSidenav] = useState(false);
  const showSideBar = () => setSidenav(!sideNav);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {isAuthenticated ? (
        <AuthentictedHeader sideNav={sideNav} handleChange={showSideBar} />
      ) : (
        <UnauthenticatedHeader sideNav={sideNav} handleChange={showSideBar}/>
      )}
    </>
  );
};
