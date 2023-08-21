import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Dialogs.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const Dialogs = ({ dialogs, photos, id, setId }) => {

  const [photo10, setPhoto10] = useState([])

  if (!photos) {
    return <Preloader />
  }

  const getPhotos10 = async () => setPhoto10(await photos.slice(0, 10))
  const navigate = useNavigate();

  const openDialog = () => {
    return navigate(`/dialogs/${id}`);
  };

  useEffect(() => {
    getPhotos10()
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
        {photo10.map((photo, i) => {
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
              {user.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dialogs;
