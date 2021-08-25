import React from "react";
import { useSelector } from "react-redux";
import './totals.scss';

const TotalsComponent = () => {
  const itemsInCart = useSelector((state) => state.bag.cart);

  const calculateTotals = () => {
    const subtotals = itemsInCart.map((item) => item.price * item.quantity);
    const total = subtotals.reduce((a, c) => a + c);
    return total;
  };

  const getDelivery = () => 200;
  const totalCost = getDelivery() + calculateTotals();
  return (
    <div>
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
        <p>Total</p>
        <p className="values">{totalCost}</p>
      </div>
      <hr />
    </div>
  );
};

export default TotalsComponent;
