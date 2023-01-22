import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import classes from '../Profile.module.css';

const AdditionalInformation = (props) => {

    if (!props.profile) {
        return <Preloader />
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
            <div>
                <b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key}
                        contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>
    )

}

const Contact = (props) => {

    return (
        <div className={classes.wrapperContacts}>
            <p><b>{props.contactTitle}:</b> {!props.contactValue ? "No contacts" : props.contactValue}</p>
        </div>
    )
}

export default AdditionalInformation