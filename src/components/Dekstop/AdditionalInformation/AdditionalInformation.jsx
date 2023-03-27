import React, { useState } from 'react';
import classes from './AdditionalInformation.module.css';

const AdditionalInformation = (props) => {
    const [editMode, setEditMode] = useState(false)

    const activetedMode = () => {
        setEditMode(!editMode)
    }

    return (
        <div className={classes.wrapperAddInf}>
            <div>
                <p>
                    <b>lookingForAJob:</b>
                    <span>{props.profile.lookingForAJob ? "Yes" : "No"}</span>
                </p>
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <p>
                        <b>My profissional skill:</b>
                        <span>{props.profile.lookingForAJobDescription}</span>
                    </p>
                </div>
            }
            <div>
                <p>
                    <b>Full name:</b> 
                    <span>{props.profile.fullName}</span>
                    </p>
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