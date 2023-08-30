import React, { useState } from "react";
import classes from "./AdditionalInformation.module.css";

const AdditionalInformation = ({
  profile,
  lookingForAJob,
  lookingForAJobDescription,
  fullName,
  contacts,
}) => {
  const [editMode, setEditMode] = useState(false);

  const activetedMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className={classes.wrapperAddInf}>
      <div>
        <p>
          <b>looking for a Job:</b>
          <span>{lookingForAJob ? "Yes" : "No"}</span>
        </p>
      </div>
      {lookingForAJob && (
        <div>
          <p>
            <b>My profissional skill:</b>
            <span>{lookingForAJobDescription}</span>
          </p>
        </div>
      )}
      <div>
        <p>
          <b>Full name:</b>
          <span>{fullName}</span>
        </p>
      </div>
      <div className={classes.wrapperContacts}>
        <b className={classes.wrapperMode}>Contacts:</b>
        <span onClick={activetedMode}>
          <p className={editMode ? classes.editModeActive : null}>&#5125;</p>
        </span>
        {editMode &&
          Object.keys(contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={contacts[key]}
              />
            );
          })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.wrapperContact}>
      <p>
        <b>{contactTitle}:</b>{" "}
        {!contactValue ? "-" : contactValue}
      </p>
    </div>
  );
};

export default AdditionalInformation;
