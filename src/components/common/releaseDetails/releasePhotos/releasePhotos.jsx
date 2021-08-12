/* eslint-disable no-plusplus */
import React from "react";
import PropTypes from "prop-types";
import "./releasePhotos.scss";

const getPhoto = (arr) => {
  const photo = arr.slice(0, 4).map((item) => (
    <div className="product-photo">
      <img key={Math.floor(Math.random() * 1000)} src={item} alt="" />
    </div>
  ));
  return photo;
};

const ReleasePhotos = ({ ...props }) => (
  <div className="product-photos">{getPhoto(props.photos)}</div>
);

ReleasePhotos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ReleasePhotos;
