import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./releaseCard.scss";

const ReleaseCard = ({ collectionName, itemName, price, thumbnail }) => (
  <>
    <Link to="*">
      <div className="release-card">
        <img src={thumbnail} alt="release cover" />
        <div className="details">
          <h3>{collectionName}</h3>
          <h3>{itemName}</h3>
          <h4>{price}</h4>
        </div>
      </div>
    </Link>
  </>
);

ReleaseCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  collectionName: PropTypes.number.isRequired,
};

export default ReleaseCard;
