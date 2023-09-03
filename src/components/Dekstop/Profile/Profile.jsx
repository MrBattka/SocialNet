import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import AdditionalInformation from "../AdditionalInformation/AdditionalInformation";
import MyPostsContainer from "./MyPost/MyPostContainer";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PhotoSlider from "./PhotoSlider/PhotoSlider";

const Profile = ({
  profile,
  status,
  updateProfileStatus,
  urlProfilePhoto,
  updateProfilePhoto,
  lookingForAJob,
  lookingForAJobDescription,
  fullName,
  contacts,
}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={classes.content}>
      <div className={classes.profile__wrapper}>
        <ProfileInfo
          profile={profile}
          status={status}
          updateProfileStatus={updateProfileStatus}
          urlProfilePhoto={urlProfilePhoto}
          updateProfilePhoto={updateProfilePhoto}
        />
        <AdditionalInformation
          profile={profile}
          lookingForAJob={lookingForAJob}
          lookingForAJobDescription={lookingForAJobDescription}
          fullName={fullName}
          contacts={contacts}
        />
        <PhotoSlider />
        <MyPostsContainer profile={profile} />
      </div>
    </div>
  );
};

export default Profile;
