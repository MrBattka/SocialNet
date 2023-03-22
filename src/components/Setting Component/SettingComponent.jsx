import React from 'react'
import classes from './SettingComponent.module.css'
import { useTheme } from '../Common/useTheme/useTheme'

const SettingComponent = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className={classes.wrapper}>
            <h2>Settings:</h2>
            <div className={classes.wrapperFields}>
                <fieldset>
                    <span>Theme:</span>
                    <input type="radio" id='light' name="theme" value='light' checked={theme === 'light'} onClick={() => setTheme('light')} />
                    <label htmlFor="light">light</label>

                    <input type="radio" id='dark' name="theme" value='dark' checked={theme === 'dark'} onClick={() => setTheme('dark')} />
                    <label htmlFor="dark">dark</label>
                </fieldset>
            </div>
        </div>
    )
}

export default SettingComponent