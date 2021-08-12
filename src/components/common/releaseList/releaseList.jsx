/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import ReleaseCard from "../releaseCard/releaseCard";
import "./releaseList.scss";

const ReleaseList = ({ ...props }) => {
  if (Object.keys(props.releases).length !== 0) {
    return (
      <div className="release-list">
        {props.releases[0].map((release) => (
          <ReleaseCard release={release} key={release._id} />
        ))}
      </div>
    );
  }
  return <></>;
};

ReleaseList.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default ReleaseList;
