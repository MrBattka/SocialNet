import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthLocation } from '../../../hoc/withAuthLocation';
import { getProfile, getProfileStatus, updateProfilePhoto, updateProfileStatus } from '../../../Redux/profile-reduser';
import Profile from './Profile';

const ProfileContainer = (props) => {
    let { userId } = useParams()

    useEffect(() => {
        if (!userId) {
            userId = props.authUserId
            props.getProfile(userId)
            props.getProfileStatus(userId)
        }
        props.getProfile(userId)
        props.getProfileStatus(userId)
    }, [userId])

    return (
        <Profile {...props} profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    urlProfilePhoto: state.profilePage.urlProfilePhoto
})

export default compose(
    connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus, updateProfilePhoto }),
    withAuthLocation
)(ProfileContainer)