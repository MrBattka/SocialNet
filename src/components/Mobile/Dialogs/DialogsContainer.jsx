import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getMessages } from "../../../Redux/dialogs-reduser";
import { getMessage, getPhotos } from "../../../api/api";
import { withAuthLocation } from "../../../hoc/withAuthLocation";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ dialogs, getMessages }) => {
  const [photos, setPhotos] = useState([]);
  const [id, setId] = useState("");
  const [lastMessage, setLastMessage] = useState([]);

  useEffect(() => {
    getMessage(setLastMessage);
    getMessages();
    getPhotos(setPhotos);
  }, []);

  return (
    <Dialogs
      dialogs={dialogs}
      photos={photos}
      id={id}
      lastMessage={lastMessage}
      setId={setId}
    />
  );
};

let mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
});

export default compose(
  connect(mapStateToProps, { getMessages }),
  withAuthLocation
)(DialogsContainer);
