import React from 'react'
import './ModalWindow.css'
import userPhoto from '../../../assets/img/user.jpg'
import cx from 'classnames'

const ModalWindow = ({ active, setEctive, children }) => {
    return (
        <div className={active ? "modalWrapper active" : "modalWrapper"} onClick={() => setEctive(!active)}>
            <div className="closedBtn" onClick={() => setEctive(!active)}>x</div>
            <div className={active ? "modalContent active" : "modalContent"} onClick={e => e.stopPropagation()}>
                <img src={children ? children : userPhoto} />
            </div>
        </div>
    )
}

export default ModalWindow