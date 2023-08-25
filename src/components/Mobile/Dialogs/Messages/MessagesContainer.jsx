import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getMessages, getPhotos, setMessages } from "../../../../Redux/dialogs-reduser";
import { getProfile } from "../../../../Redux/profile-reduser";
import { withAuthLocation } from "../../../../hoc/withAuthLocation";
import Messages from "./Messages";

const MessagesContainer = ({
  profile,
  urlProfilePhoto,
  authUserId,
  getProfile,
  getMessages,
  dialogs,
  getPhotos,
  photos,
  messages
}) => {

  useEffect(() => {
    getProfile(authUserId);
    getPhotos();
    getMessages()
  }, []);

  return (
    <Messages
      dialogs={dialogs}
      profile={profile}
      urlProfilePhoto={urlProfilePhoto}
      photos={photos}
      messages={messages}
    />
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  dialogs: state.dialogsPage.dialogs,
  photos: state.dialogsPage.photos,
  messages: state.dialogsPage.messages,
  urlProfilePhoto: state.profilePage.urlProfilePhoto,
  authUserId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, { getProfile, getMessages, getPhotos }),
  withAuthLocation
)(MessagesContainer);
