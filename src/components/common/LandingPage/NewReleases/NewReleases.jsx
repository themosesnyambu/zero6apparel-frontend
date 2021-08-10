/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReleaseCard from "../../releaseCard/releaseCard";
import { getNewReleases } from "../../../../redux/actions/landingPageActions";
import "./newrelease.scss";

const NewReleases = () => {
  const releases = useSelector((state) => state.release.newReleases);
  const dispatch = useDispatch();

  function getData() {
    return () => {
      dispatch(getNewReleases());
    };
  }

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (releases)
    return (
      <div className="new-release">
        {releases.map((release) => 
          <ReleaseCard release={release} key={release._id} />
        )}
      </div>
    );

  return <div>None found</div>;
};

export default NewReleases;
