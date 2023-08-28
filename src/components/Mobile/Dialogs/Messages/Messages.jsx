import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import userPhoto from "../../../../assets/img/user.jpg";
import classes from "./Messages.module.css";
import SendMessageReduxForm from "./SendMessageForm/SendMessageForm";

const Messages = ({ profile, urlProfilePhoto, photos, dialogs, messages }) => {
  const location = useLocation();

  const [message, setMessage] = useState([]);

  const dialogId = location.pathname.slice(-1);
  const dialogPhotoId = 5 + dialogId;
  const photos10 = photos.slice(0, 10);

  const isNumber =
    Number(location.pathname.slice(-2, -1)) && location.pathname.slice(-2);

  const onSubmit = (formData) => {
    if (formData.sendMessage) {
      setMessage([...message, { text: formData.sendMessage }]);
      formData.sendMessage = "";
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_message}>
        {message.map((myMessage, i) => {
          return (
            <div key={i} className={classes.my_message}>
              <img
                className={classes.my_img}
                src={profile.photos.large ?? urlProfilePhoto ?? userPhoto}
                onClick={() => setActive(!active)}
              />
              <div>
                <h4>{profile.fullName}</h4>
                <p>{myMessage.text}</p>
              </div>
            </div>
          );
        })}
        {messages.map((message, i) => {
          return (
            <div key={i}>
              {(dialogId == message.userId || isNumber == message.userId) && (
                <div className={classes.message}>
                  {photos10.map((photo, i) => {
                    return (
                      <div key={i}>
                        {(dialogPhotoId == photo.id) || (photo.id == 60) && (
                            <img
                              className={classes.my_img}
                              src={photo.thumbnailUrl}
                              alt="#"
                            />
                        )}
                      </div>
                    );
                  })}
                  <div>
                    {dialogs.map((dialog, i) => {
                      return (
                        <div key={i}>
                          {(dialogId == dialog.id || isNumber == dialog.id) && (
                            <h4>{dialog.name}</h4>
                          )}
                        </div>
                      );
                    })}
                    <p>{message.body}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className={classes.wrapperForm}>
        <SendMessageReduxForm onSubmit={onSubmit} message={message} />
      </div>
    </div>
  );
};

export default Messages;
