import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import {
  getProfile,
  getProfileStatus,
  updateProfilePhoto,
  updateProfileStatus,
} from "../../../Redux/profile-reduser";
import { withAuthLocation } from "../../../hoc/withAuthLocation";
import Profile from "./Profile";

const ProfileContainer = ({
  profile,
  status,
  authUserId,
  isAuth,
  urlProfilePhoto,
  getProfile,
  getProfileStatus,
  updateProfileStatus,
  updateProfilePhoto,
  lookingForAJob,
  lookingForAJobDescription,
  fullName,
  contacts,
}) => {
  let { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      userId = authUserId;
      getProfile(userId);
      getProfileStatus(userId);
    }
    getProfile(userId);
    getProfileStatus(userId);
  }, [userId]);

  return (
    <Profile
      profile={profile}
      status={status}
      updateProfileStatus={updateProfileStatus}
      updateProfilePhoto={updateProfilePhoto}
      urlProfilePhoto={urlProfilePhoto}
      isAuth={isAuth}
      lookingForAJob={lookingForAJob}
      lookingForAJobDescription={lookingForAJobDescription}
      fullName={fullName}
      contacts={contacts}
    />
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  urlProfilePhoto: state.profilePage.urlProfilePhoto,
  lookingForAJob: state.profilePage.profile?.lookingForAJob,
  lookingForAJobDescription: state.profilePage.profile?.lookingForAJobDescription,
  fullName: state.profilePage.profile?.fullName,
  contacts: state.profilePage.profile?.contacts,
});

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getProfileStatus,
    updateProfileStatus,
    updateProfilePhoto,
  }),
  withAuthLocation
)(ProfileContainer);
