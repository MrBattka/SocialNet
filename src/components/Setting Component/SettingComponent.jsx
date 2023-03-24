import React from 'react'
import classes from './SettingComponent.module.css'
import { useTheme } from '../Common/useTheme/useTheme'
import SwitchInput from '../Common/switchInput/SwitchInput'

const SettingComponent = ({ isSelected, selectedDarkTheme }) => {
    const { theme, setTheme } = useTheme()
    
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