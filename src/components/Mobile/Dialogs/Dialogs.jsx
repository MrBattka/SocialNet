import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Dialogs.module.css";

const Dialogs = ({ dialogs, photos, id, setId }) => {
  const photos10 = photos.slice(0, 10);
  const navigate = useNavigate();

  const openDialog = () => {
    return navigate(`/dialogs/${id}`);
  };

  useEffect(() => {
    const timeFunc = setTimeout(() => {
      openDialog();
    }, 100);
    return () => clearTimeout(timeFunc);
  }, [id]);

  return (
    <div className={classes.wrapper} onClick={openDialog}>
      <div>
        {photos10.map((photo, i) => {
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
