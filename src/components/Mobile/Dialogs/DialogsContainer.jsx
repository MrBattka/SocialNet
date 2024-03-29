import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getDialogs, getPhotos } from "../../../Redux/dialogs-reduser";
import { withAuthLocation } from "../../../hoc/withAuthLocation";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ dialogs, getDialogs, photos, getPhotos }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    getDialogs();
    getPhotos();
  }, []);

  const dilogs9 = dialogs.slice(0, -1)

  return (
    <Dialogs
      dialogs={dilogs9}
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
  connect(mapStateToProps, { getDialogs, getPhotos }),
  withAuthLocation
)(DialogsContainer);
