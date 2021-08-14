import React from "react";
import NewReleases from "../../common/LandingPage/NewReleases/NewReleases";
import './landingPage.scss';

const LandingPage = () => (
  <>
    <div className="landingPage-container">
      <div className="main-content" data-testid="main-content">
        <div className="main-info" data-testid="main-info">
          <h3>W!NGS</h3>
          
          <p>To be BOLD is to be FREE</p>
          <p>Stay fly with the new w!ngs edition</p>
          <button type="button" className="primary-button button rounded">shop now</button>
          <button type="button" className="white-button button rounded">learn more</button>
        </div>

        <div />
      </div>
      <div className="new-releases">
        <h2>New Releases</h2>
        <h2>View All</h2>
        <NewReleases />        
      </div>
    </div>
  </>
);

export default LandingPage;
