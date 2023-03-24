import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthLocation } from '../../hoc/withAuthLocation'
import { selectedDarkTheme } from '../../Redux/settingComponent-reduser'
import SettingComponent from './SettingComponent'

const mapStateToProps = (state) => {
    return {
        isSelected: state.settingPage.isSelectedDarkTheme
    }
}

const SettingCompContainer = compose(connect(mapStateToProps, {selectedDarkTheme}), withAuthLocation)(SettingComponent)

export default SettingCompContainer