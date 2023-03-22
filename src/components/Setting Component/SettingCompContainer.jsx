import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthLocation } from '../../hoc/withAuthLocation'
import SettingComponent from './SettingComponent'



const SettingCompContainer = compose(connect(), withAuthLocation)(SettingComponent)

export default SettingCompContainer