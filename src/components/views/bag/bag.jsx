/* eslint-disable no-underscore-dangle */
import React from "react";
import { useSelector } from "react-redux";
import isEmpty from "../../../../utils/isEmpty";
import NewReleases from "../../common/LandingPage/NewReleases/NewReleases";
import "./bag.scss";

const Bag = () => {
  const itemsInCart = useSelector((state) => state.bag.cart);

  const calculateTotals = () => {
    const subtotals = itemsInCart.map((item) => item.price * item.quantity);
    const total = subtotals.reduce((a, c) => a + c);
    return total;
  };

  const getDelivery = () => 200;
  const totalCost = getDelivery() + calculateTotals();

  if (!isEmpty(itemsInCart)) {
    return (
      <div className="bag">
        <div className="products">
        <p className="title">Bag</p> 
          {itemsInCart.map((item) => (
            <div key={item._id}>
              <div className="product">
                <img src={item.photos[0]} alt="" />
                <div className="actions">
                  <p className="release-name">{item.name}</p>
                  <p className="release-style">{item.collectionStyle}</p>
                  <span>
                    <p className="release-size">
                      Size {item.size}
                      Quantity {item.quantity}
                    </p>{" "}
                  </span>
                  <div className="button-group">
                    <button className="underlined-button" type="button">
                      Add to Favourites
                    </button>
                    <button className="underlined-button" type="button">
                      Remove
                    </button>
                  </div>
                </div>
                <div>
                  <p className="release-price">KSH {item.price}</p>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>

        <div className="summary">
         <p className="title">Summary</p> 
          <div className="totals">
            <div>
              <p className="subtotal">Subtotal </p>
              <p className="delivery-cost">Estimated Delivery Cost</p>
            </div>
            <div className="values">
              <p>{calculateTotals()}</p>
              <p>{getDelivery()}</p>
            </div>
          </div>
          <hr />
          <div className="totals">
            <p >Total</p>
            <p className="values">{totalCost}</p>
          </div>
          <hr />
          <button className="checkout rounded primary-button" type="button">
            checkout
          </button>
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
