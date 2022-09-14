import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
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
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { getProfile })(ProfileContainer);