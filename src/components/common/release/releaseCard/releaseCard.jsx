/* eslint-disable no-underscore-dangle */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./releaseCard.scss";

const ReleaseCard = ({ ...props }) => (
  <>
    <Link to={`/releases/${props.release._id}`}>
      <div className="release-card">
        <div className="cover-photo">
          <img src={props.release.photos[0]} alt="release cover" />
        </div>
        <div className="details">
          <div className='name'>
            <p className="bold">{props.release.name}</p>
            <p>{props.release.collectionStyle}</p>
          </div>
          <p className=" bold price-header primary-header">
            KSH {props.release.price}
          </p>
        </div>
      </div>
    </Link>
  </>
);

ReleaseCard.propTypes = {
  release: PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    collectionStyle: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ReleaseCard;
