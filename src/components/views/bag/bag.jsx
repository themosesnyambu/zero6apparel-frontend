/* eslint-disable no-underscore-dangle */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import isEmpty from "../../../../utils/isEmpty";
import NewReleases from "../../common/LandingPage/NewReleases/NewReleases";
import ProductList from "../../common/bag/productList/productList";
import TotalsComponent from "../../common/bag/totalsCalc/totals";
import "./bag.scss";

const Bag = () => {
  const itemsInCart = useSelector((state) => state.bag.cart);

  if (!isEmpty(itemsInCart)) {
    return (
      <div className="bag">
        <ProductList />
        <div className="summary">
          <TotalsComponent />
          <Link to="/checkout/information">
            <button className="checkout rounded primary-button" type="button">
              checkout
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      You have no items in the bag. <br />
      Some of these might interest you.
      <NewReleases />
    </div>
  );
};

export default Bag;
