/* eslint-disable no-underscore-dangle */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { removeFromBag } from "../../../redux/actions/bagActions";

const Bag = () => {
  const itemsInCart = useSelector((state) => state.bag.cart);
  // const dispatch = useDispatch();

  // const removeFromCart = (id, size) => {
  //   dispatch(removeFromBag(id, size));
  // };

  return (
    <>
      Bag
      {itemsInCart.map((item) => (
        <div className="product" key={item._id}>
          <img src={item.photos[0]} alt="" />
          <h5>{item.name}</h5>
          <h5>{item.collectionStyle}</h5>
          <h5>{item.price}</h5>
          <h5>{item.quantity}</h5>
          <h5>{item.size}</h5>
          <button type="button">Add to Favourites</button>
          {/* <button type="button" onClick={removeFromCart(item._id, item.size)}>
            Remove
          </button> */}
        </div>
      ))}
      <div className="summary">
          Subtotal
          Estimated Delivery Cost
          Total
          <button className="primary-button" type="button">checkout</button>
      </div>
    </>
  );
};

export default Bag;
