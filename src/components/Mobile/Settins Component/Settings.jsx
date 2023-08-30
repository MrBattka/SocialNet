import React from 'react'
import SwitchInput from '../../Common/switchInput/SwitchInput'
import classes from './Settings.module.css'

const SettingComponent = ({ isSelected, selectedDarkTheme }) => {
    return (
        <div className={classes.wrapper}>
            <h2>Settings:</h2>
            <div className={classes.wrapperFields}>
                <fieldset>
                    <span>Dark theme:</span>
                    <div className={classes.inputLabel}>
                        <SwitchInput isSelected={isSelected} selectedDarkTheme={selectedDarkTheme} />
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default SettingComponent