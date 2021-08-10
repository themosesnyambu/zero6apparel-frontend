import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./releaseCard.scss";

const ReleaseCard = ({...props}) => (
  <>
    <Link to="*">
      <div className="release-card">
      
        <img src={props.release.photos[0]} alt="release cover" />)
        <div className="details">
          {props.release.name}
          <h3>{props.release.collectionStyle}</h3>
          <h4>{props.release.price}</h4>
        </div>
      </div>
    </Link>
  </>
);

ReleaseCard.propTypes = {
  release : PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    collectionStyle: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ReleaseCard;
