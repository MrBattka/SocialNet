import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthLocation } from '../../hoc/withAuthLocation';
import { getProfile } from '../../Redux/profile-reduser';
import Profile from './Profile';

const ProfileContainer = (props) => {
    const { userId } = useParams()
    useEffect(() => {
        props.getProfile(userId)
    }, [])
    return (
        <Profile {...props} profile={props.profile} />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, { getProfile }),
    withAuthLocation
)(ProfileContainer)