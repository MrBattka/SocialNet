import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import { withAuthLocation } from "../../../../hoc/withAuthLocation";
import { connect } from "react-redux";
import { compose } from "redux";
import { getProfile } from "../../../../Redux/profile-reduser";
import { getPhotos } from "../../../../api/api";
import { getMessages } from "../../../../Redux/dialogs-reduser";

const MessagesContainer = ({
  profile,
  urlProfilePhoto,
  authUserId,
  getProfile,
  getMessages,
  dialogs
}) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getProfile(authUserId);
    getPhotos(setPhotos);
    getMessages()
  }, []);

  return (
    <Messages
      dialogs={dialogs}
      profile={profile}
      urlProfilePhoto={urlProfilePhoto}
      photos={photos}
    />
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  dialogs: state.dialogsPage.dialogs,
  urlProfilePhoto: state.profilePage.urlProfilePhoto,
  authUserId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, { getProfile, getMessages }),
  withAuthLocation
)(MessagesContainer);
