/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/footer";

const ContainerWrapper = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <>
        <Header />
        <div className="container">
          <Component {...props} />
        </div>
        <Footer />
      </>
    )}
  />
);

export default ContainerWrapper;
