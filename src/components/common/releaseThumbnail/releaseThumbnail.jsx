import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReleaseThumbnail = ({  thumbnail }) => (
  <>
    <Link to="*">
      <div className="release-card">
        <img src={thumbnail} alt="release cover" />
      </div>
    </Link>
  </>
);

ReleaseThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
};

export default ReleaseThumbnail;
