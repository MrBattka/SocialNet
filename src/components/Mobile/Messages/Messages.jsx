import React from 'react'
import classes from './Messages.module.css'

const Messages = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper_dev}>
                <h2 className={classes.dev}>Currently under development</h2>
            </div>
        </div>
    )
}

export default Messages