import React from 'react'
import classes from './ModalWindow.module.css'
import userPhoto from '../../../assets/img/user.jpg'
import cx from 'classnames'

const ModalWindow = ({ active, setEctive, children }) => {
    return (
        <div className={classes.modalWrapper} onClick={() => setEctive(!active)}>
            <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
                <div className={classes.closedBtn} onClick={() => setEctive(!active)}>x</div>
                <img src={children ? children : userPhoto} />
            </div>
        </div>
    )
}

export default ModalWindow