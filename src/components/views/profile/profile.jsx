import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { fetchUserProfile } from "../../../redux/actions/profileActions";

const Profile = ({ match }) => {
  const user = useSelector((state) => state.auth.user);
//   const profile = useSelector((state) => state.profile);

  useEffect(() => {
    const getProfile = async () => {
      const { params } = match;
      await fetchUserProfile(params.userId);
    };
    getProfile();
  }, [match, fetchUserProfile, user]);

  return <></>;
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
