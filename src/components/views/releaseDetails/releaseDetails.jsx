/* eslint-disable no-console */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getReleaseBySlug } from "../../../redux/actions/releaseActions";
import ReleaseDescription from "../../common/releaseDetails/releaseDescription/releaseDescription";
import ReleasePhotos from "../../common/releaseDetails/releasePhotos/releasePhotos";
import "./releaseDetails.scss";

const ReleaseDetails = ({ match }) => {
  // eslint-disable-next-line no-unused-vars
  const release = useSelector((state) => state.singleRelease.releases);
  const dispatch = useDispatch();

  function getData() {
    return () => {
      dispatch(getReleaseBySlug(match.params.id));
    };
  }

  useEffect(() => {
    dispatch(getData());
  }, []);
  if (Object.keys(release).length !== 0)
    return (
      <div className="release-details">
        <ReleasePhotos photos={release.photos} />
        <ReleaseDescription release={release} />
      </div>
    );
  return <>Could Not load details</>;
};

ReleaseDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default ReleaseDetails;
