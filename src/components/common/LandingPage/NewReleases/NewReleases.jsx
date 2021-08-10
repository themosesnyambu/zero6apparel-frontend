/* eslint-disable no-console */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewReleases } from "../../../../redux/actions/landingPageActions";

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

  // console.log(releases)
  if (releases)
    return (
      <div>
        {releases.map((release) => {
          // eslint-disable-next-line no-underscore-dangle
          const id = release._id;
          return <div key={id}>{release.name}</div>;
        })}
      </div>
    );

  return <div>None found</div>;
};

export default NewReleases;
