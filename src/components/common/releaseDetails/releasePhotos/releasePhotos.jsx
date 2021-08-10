import React from 'react';
import PropTypes from "prop-types";

const ReleasePhotos =({...props}) =>(
    <>
    <img src={props.photos[0]} alt=""/>
    <img src={props.photos[1]} alt=""/>
    <img src={props.photos[2]} alt=""/>
    <img src={props.photos[3]} alt=""/>    
    </>
);

ReleasePhotos.propTypes = {
      photos: PropTypes.arrayOf(PropTypes.string).isRequired
  };
  

export default ReleasePhotos;