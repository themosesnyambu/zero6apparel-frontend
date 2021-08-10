import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./releaseCard.scss";

const ReleaseCard = ({ ...props }) => (
  <>
    <Link to="*">
      <div className="release-card">
        <div className="cover-photo">
          <img src={props.release.photos[0]} alt="release cover" />
        </div>
        <div className="details">
          <div >
            <h4 className="bold">{props.release.name}</h4>
            <h5>{props.release.collectionStyle}</h5>
          </div>
          <h4 className="primary-header bold price-header">KSH {props.release.price}</h4>
        </div>
      </div>
    </Link>
  </>
);

ReleaseCard.propTypes = {
  release: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    collectionStyle: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ReleaseCard;
