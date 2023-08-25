import classes from "./ProfileInfo.module.css";
import React, { useEffect, useState } from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from "../../../../assets/img/user.jpg";
import ModalWindow from "../../../Common/ModalWindow/ModalWindow";
import Lorem from "../../../Common/Lorem/Lorem";
import Preloader from "../../../Common/Preloader/Preloader";

const ProfileInfo = ({
  updateProfilePhoto,
  profile,
  urlProfilePhoto,
  status,
  updateProfileStatus,
}) => {
  const [active, setActive] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (photo) {
      updateProfilePhoto(photo);
    }
  });

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={classes.profile__wrapper}>
      <div className={classes.profile_bg}>
        <div className={classes.profile__info}>
          <div className={classes.userName}>{profile.fullName}</div>
          <div className={classes.about__user}>
            {<ProfileStatus /> != null ? (
              <ProfileStatus
                profile={profile}
                status={status}
                updateProfileStatus={updateProfileStatus}
              />
            ) : (
              <Lorem />
            )}
          </div>
        </div>
      </div>
      <div className={classes.wrapper_img}>
        <img
          className={classes.profile__img}
          src={profile.photos.large ?? urlProfilePhoto ?? userPhoto}
          onClick={() => setActive(!active)}
        />
      </div>
      <ModalWindow
        active={active}
        setEctive={setActive}
        setPhoto={setPhoto}
        profilePhotoLarge={profile.photos.large}
        children={profile.photos.large}
      />
    </div>
  );
};

export default ProfileInfo;
