import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Dialogs.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const Dialogs = ({ dialogs, photos, id, setId }) => {

  const [photo9, setPhoto9] = useState([])

  if (!photos) {
    return <Preloader />
  }

  const getPhotos9 = async () => setPhoto9(await photos.slice(0, 9))
  const navigate = useNavigate();

  const openDialog = () => {
    return navigate(`/dialogs/${id}`);
  };

  useEffect(() => {
    getPhotos9()
  }, [photos])

  useEffect(() => {
    const timeFunc = setTimeout(() => {
      openDialog();
    }, 100);
    return () => clearTimeout(timeFunc);
  }, [id]);

  return (
    <div className={classes.wrapper} onClick={openDialog}>
      <div>
        {photo9.map((photo, i) => {
          return (
            <div className={classes.wrapper_avatar} key={i}>
              <img
                className={classes.avatar}
                src={photo.thumbnailUrl}
                alt="#"
              />
            </div>
          );
        })}
      </div>
      <div className={classes.wrapper_dialog}>
        {dialogs.map((user, i) => {
          return (
            <div
              key={i}
              onClick={() => setId(user.id)}
              className={classes.dialog}
            >
              <h4>{user.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dialogs;
