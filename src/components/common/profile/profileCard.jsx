import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const ProfileCard = ({ profile }) => (
  <>
    <div className="container profile-view">
      <div className="row">
        <div className="col s8 push-s4">
          <span className="flow-text">
            <div className="edit--profile">
              <h2 className="profile-author-name">{profile.firstName} {profile.lastName}</h2>
            </div>
          </span>
        </div>
      </div>
    </div>
  </>
);

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProfileCard;

