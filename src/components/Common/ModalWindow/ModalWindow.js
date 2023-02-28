import React, { useState } from 'react'
import userPhoto from '../../../assets/img/user.jpg'
import './ModalWindow.css'

const ModalWindow = ({ active, setEctive, setPhoto, children, profilePhotoLarge }) => {
    const [userImage, setUserPhoto] = useState(null)

    const deactiveModalWindow = () => {
        if (!profilePhotoLarge && userImage) {
            let photoImg = URL.createObjectURL(userImage)
            setPhoto(photoImg)
        }
        setEctive(!active)
    }

    return (
        <div className={active ? "modalWrapper active" : "modalWrapper"} onClick={deactiveModalWindow}>
            <div className="closedBtn" onClick={() => setEctive(!active)}>x</div>
            <div className={active ? "modalContent active" : "modalContent"} onClick={e => e.stopPropagation()}>
                {userImage && <img src={URL.createObjectURL(userImage)} />}
                {!userImage && <img src={children ? children : userPhoto} />}
                <div className='wrapperFileInput'>
                    <label htmlFor="file" className='labelFileInput'>Loading image</label>
                    <input type="file" id='file' className='fileInput' name="file"
                        onChange={(e) => setUserPhoto(e.target.files[0])}></input>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow