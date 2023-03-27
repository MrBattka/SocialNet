import React from 'react'
import { connect } from 'react-redux'
import { compose } from "redux";
import { withAuthLocation } from '../../../hoc/withAuthLocation'
import Profile from './Profile'

const mapStateToProps = (state) => {
  return {
    //some state
  }
}


export default compose(
  connect(mapStateToProps), withAuthLocation)(Profile)