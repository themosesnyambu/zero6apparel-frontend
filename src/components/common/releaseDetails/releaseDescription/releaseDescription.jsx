import React from "react";
import PropTypes from "prop-types";

const ReleaseDescription = ({ ...props }) => (
  <>
    <div className="details">
      <div>
        <h4 className="bold">{props.release.name}</h4>
        <h5>{props.release.collectionStyle}</h5>
      </div>
      <h4 className="primary-header bold price-header">
        KSH {props.release.price}
      </h4>
    </div>
    <div>
      <button type="button">S</button>
      <button type="button">M</button>
      <button type="button">L</button>
      <button type="button">XL</button>
      <button type="button">XXL</button>
    </div>
    <button type="button">Add to Bag</button>
    <button type="button">Add to Favourites</button>
    <p>{props.release.description}</p>
    Color shown: {props.release.color}
    Style: {props.release.collectionStyle}
    <hr />
    Reviews <button type="button">1</button>
    <button type="button">1</button>
    <button type="button">1</button>
    <button type="button">1</button>
    <button type="button">1</button>
  </>
);

ReleaseDescription.propTypes = {
  release: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    collectionStyle: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ReleaseDescription;
