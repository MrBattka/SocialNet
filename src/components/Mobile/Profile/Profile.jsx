import React from 'react'
import Preloader from '../../Common/Preloader/Preloader'
import AdditionalInformation from './AdditionalInformation/AdditionalInformation'
import MyPostsContainer from './MyPost/MyPostContainer'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ profile, status, authUserId, isAuth, urlProfilePhoto, getProfile,
                updateProfileStatus, getProfileStatus, updateProfilePhoto, lookingForAJob,
                lookingForAJobDescription, fullName, contacts }) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div className={classes.profile__wrapper}>
      <ProfileInfo profile={profile} status={status}
        updateProfileStatus={updateProfileStatus} urlProfilePhoto={urlProfilePhoto} updateProfilePhoto={updateProfilePhoto} />
      <AdditionalInformation profile={profile} lookingForAJob={lookingForAJob}
        lookingForAJobDescription={lookingForAJobDescription}
        fullName={fullName} contacts={contacts} />
      <MyPostsContainer profile={profile} />
    </div>
  )
}

export default Profile