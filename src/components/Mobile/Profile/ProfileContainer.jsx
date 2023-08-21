import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import { compose } from "redux";
import { withAuthLocation } from '../../../hoc/withAuthLocation'
import { getProfile, getProfileStatus, updateProfilePhoto, updateProfileStatus } from '../../../Redux/profile-reduser';
import Profile from './Profile'

const ProfileContainer = ({ profile, status, updateProfileStatus, authUserId, getProfile, getProfileStatus }) => {

  let { userId } = useParams()
  
  useEffect(() => {
    if (!userId) {
      userId = authUserId
      getProfile(userId)
      getProfileStatus(userId)
    }
    getProfile(userId)
    getProfileStatus(userId)
  }, [userId])

  return (
    <Profile profile={profile} status={status} updateProfileStatus={updateProfileStatus} />
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