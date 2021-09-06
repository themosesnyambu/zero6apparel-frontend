import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReleases } from "../../../redux/actions/landingPageActions";
import ReleaseList from "../release/releaseList/releaseList";
import isEmpty from "../../../../utils/isEmpty";

const CollectionContainer = () => {
  const releases = useSelector((state) => state.release.releases);
  let temp;
  const dispatch = useDispatch();

  function getData() {
    return () => {
      dispatch(getReleases());
    };
  }

  const display = () => {
    if (!isEmpty(temp)) return <ReleaseList releases={temp} />;
    return <ReleaseList releases={releases} />;
  };

  const filterReleases = (criteria) => {
    if (criteria.length > 0) {
      temp = releases.filter((release) => release.color === criteria);
    } else {
      temp = {};
    }
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <div className="tags">
        <button onClick={() => filterReleases("")} type="button">
          ALL
        </button>
        <button onClick={() => filterReleases("black")} type="button">
          HOODIES
        </button>
        <button onClick={() => filterReleases("red")} type="button">
          T-SHIRTS
        </button>
        <button onClick={() => filterReleases("CAPS")} type="button">
          CAPS
        </button>
      </div>
      {display()}
    </div>
  );
};

export default CollectionContainer;
