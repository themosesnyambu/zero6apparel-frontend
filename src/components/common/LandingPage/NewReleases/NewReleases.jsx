/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReleaseCard from "../../release/releaseCard/releaseCard";
import { getNewReleases, getReleases } from "../../../../redux/actions/landingPageActions";
import "./newrelease.scss";

const NewReleases = () => {
  const releases = useSelector((state) => state.release.newReleases);
  const dispatch = useDispatch();

  function getData() {
    return () => {
      dispatch(getReleases());
      dispatch(getNewReleases());
    };
  }

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (releases)
    return (
      <div className="new-release">
        {releases.slice(0,2).map((release) => 
          <ReleaseCard release={release} key={release._id} />
        )}
      </div>
    );

  return <div>None found</div>;
};

export default NewReleases;
