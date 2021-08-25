/* eslint-disable no-underscore-dangle */
import React from "react";
import { useSelector } from "react-redux";
import './productList.scss';

const ProductList = () => {
  const itemsInCart = useSelector((state) => state.bag.cart);

  return (
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
  );
};


export default ProductList;
