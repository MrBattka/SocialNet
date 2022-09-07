import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUserProfile } from '../../Redux/profile-reduser';
import Profile from './Profile';

const ProfileContainer = (props) => {

    const { userId } = useParams()

    const [appState, setAppState] = useState();
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                props.setUserProfile(response.data)
            }, [setAppState])
    })



    return (
        <Profile {...props} profile={props.profile} />
    )
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);