/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToBag } from "../../../../redux/actions/bagActions";
import "./releasedescription.scss";

const ReleaseDescription = ({ ...props }) => {
  const dispatch = useDispatch();

  const addToCartFunc = () => {
    dispatch(addToBag(props.release._id, "M"));
  };
  return (
    <div className="product-description">
      <div className="details">
        <div>
          <h4 className="bold">{props.release.name}</h4>
          <h5>{props.release.collectionStyle}</h5>
        </div>
        <h4 className="primary-header bold price-header">
          KSH {props.release.price}
        </h4>
      </div>
      <div className="thumbnails">
        <img src={props.release.photos[0]} alt="" />
        <img src={props.release.photos[0]} alt="" />
      </div>
      Select Size <br />
      <div className="sizes button-group">
        <button className="black-button" type="button">
          S
        </button>
        <button className="black-button" type="button">
          M
        </button>
        <button className="black-button" type="button">
          L
        </button>
        <button className="black-button" type="button">
          XL
        </button>
        <button className="black-button" type="button">
          XXL
        </button>
      </div>
      <div className="call-to-action">
        <button
          onClick={addToCartFunc}
          className="primary-button rounded"
          type="button"
        >
          Add to Bag
        </button>
        <button className="black-button rounded" type="button">
          Add to Favourites
        </button>
      </div>
      <p>{props.release.description}</p>
      <p>Color shown: {props.release.color}</p>
      <p>Style: {props.release.collectionStyle}</p>
      <hr />
      Reviews
      <div className="favourite button-group">
        <button type="button">1</button>
        <button type="button">1</button>
        <button type="button">1</button>
        <button type="button">1</button>
        <button type="button">1</button>
      </div>
      <hr />
    </div>
  );
};

ReleaseDescription.propTypes = {
  release: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    collectionStyle: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ReleaseDescription;
