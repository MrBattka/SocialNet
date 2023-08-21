import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getMessages, getPhotos } from "../../../Redux/dialogs-reduser";
import { getMessage,  } from "../../../api/api";
import { withAuthLocation } from "../../../hoc/withAuthLocation";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ dialogs, getMessages, photos, getPhotos }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    getMessages();
    getPhotos();
  }, []);
  console.log(photos);
  return (
    <Dialogs
      dialogs={dialogs}
      photos={photos}
      id={id}
      setId={setId}
    />
  );
};

let mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  photos: state.dialogsPage.photos
});

export default compose(
  connect(mapStateToProps, { getMessages, getPhotos }),
  withAuthLocation
)(DialogsContainer);
