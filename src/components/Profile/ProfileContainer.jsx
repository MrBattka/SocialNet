import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { setUserProfile } from '../../Redux/profile-reduser';
import Profile from './Profile';

const ProfileContainer = (props) => {

    const { userId } = useParams()
    useEffect(() => {
        usersAPI.getUserProfile(userId)
            .then(data => {
                props.setUserProfile(data)
            })
    }, [])
    
    return (
        <Profile {...props} profile={props.profile} />
    )
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);