import React, { useEffect, useState } from "react";
import classes from "./ProfileStatus.module.css";

const ProfileStatus = ({ status, updateProfileStatus }) => {
  const updateStatusEnter = React.createRef();

  let [editMode, setEditMode] = useState(false);
  let [newStatus, setNewStatus] = useState(status);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditeMode = () => {
    setEditMode(false);
    if (!status) {
      updateProfileStatus("Установить статус");
    } else {
      updateProfileStatus(newStatus);
    }
  };
  const deactivateEditeModeOnBlur = () => {
    setEditMode(false);
    return status;
  };
  const clickButtonEnten = () => {
    updateStatusEnter.current.addEventListener(
      "keydown",
      (keyPress) => {
        if (keyPress.keyCode === 13) {
          keyPress.preventDefault();
          deactivateEditeMode();
        }
      },
      { once: true }
    );
  };
  const onStatusChange = (e) => {
    clickButtonEnten();
    setNewStatus(e.currentTarget.value);
  };
  useEffect(() => {
    if (newStatus !== status) {
        setNewStatus(status);
    }
  }, [status]);

  return (
    <div>
      {!editMode && (
        <div>
          <span
            data-testid="status"
            className={classes.aboutMe__editor}
            onClick={activateEditMode}
          >
            {status ? status : "Установить статус"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            data-testid="status-input"
            ref={updateStatusEnter}
            onChange={onStatusChange}
            autoFocus
            onBlur={deactivateEditeModeOnBlur}
            defaultValue={newStatus}
            maxLength={300}
            placeholder="Введите статус"
            type="text"
          />
          <div>
            <button
              data-testid="btn-status"
              onClick={deactivateEditeMode}
              onMouseDown={deactivateEditeMode}
              type="submit"
            >
              Сохранить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
