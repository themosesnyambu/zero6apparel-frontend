import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../../../redux/actions/profileActions";
import ProfileCard from "../../common/profile/profileCard";

const Profile = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const profile = useSelector((state) => state.profile.profile);

  function getProfile() {
    return () => {
      dispatch(fetchUserProfile(match.params.userId));
    };
  }

  useEffect(() => {
    dispatch(getProfile());
  }, [match, fetchUserProfile, user]);

  return (
    <>
      <ProfileCard profile={profile} />
    </>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired,
    }),
  }).isRequired,
  user: PropTypes.shape({}).isRequired,
};

export default Profile;
