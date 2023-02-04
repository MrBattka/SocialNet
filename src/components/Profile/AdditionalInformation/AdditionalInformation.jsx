import React, { useState } from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import classes from './AdditionalInformation.module.css';

const AdditionalInformation = (props) => {
    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const activetedMode = () => {
        setEditMode(!editMode)
    }

    return (
        <div className={classes.wrapperAddInf}>
            <div>
                <p><b>lookingForAJob:</b> {props.profile.lookingForAJob ? "Yes" : "No"}</p>
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <p><b>My profissional skill:</b> {props.profile.lookingForAJobDescription}</p>
                </div>
            }
            <div>
                <p><b>Full name:</b> {props.profile.fullName}</p>
            </div>
            <div className={classes.wrapperContacts}>
                <b>Contacts:</b>
                <span onClick={activetedMode}>
                        <p className={editMode ? classes.editModeActive : null}>&#5125;</p>
                </span>
                {editMode && Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key}
                        contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

const Contact = (props) => {

    return (
        <div className={classes.wrapperContact}>
            <p><b>{props.contactTitle}:</b> {!props.contactValue ? "-" : props.contactValue}</p>
        </div>
    )
}

export default AdditionalInformation