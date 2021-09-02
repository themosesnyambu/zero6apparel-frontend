import React from "react";
import { useSelector } from "react-redux";
import AuthentictedHeader from "./authenticatedHeader";
import UnauthenticatedHeader from "./unAuthenticatedHeader";
import "./header.scss";

export default () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>{isAuthenticated ? <AuthentictedHeader /> : <UnauthenticatedHeader />}</>
  );
};
