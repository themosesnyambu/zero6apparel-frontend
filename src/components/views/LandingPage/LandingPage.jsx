import React from "react";
import NewReleases from "../../common/LandingPage/NewReleases/NewReleases";

const LandingPage = () => (
  <>
    <div className="landingPage-container">
      <div className="main-content" data-testid="main-content">
        <div />
      </div>
      <div className="new-releases">
        <h2>New Releases</h2>
        <hr />
        <NewReleases />
        <hr />
      </div>
    </div>
  </>
);

export default LandingPage;
