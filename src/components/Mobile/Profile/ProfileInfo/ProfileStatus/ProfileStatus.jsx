import React, { useEffect, useState } from "react";
import classes from "./ProfileStatus.module.css"

const ProfileStatus = (props) => {
    const updateStatusEnter = React.createRef()

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditeMode = () => {
        setEditMode(false)
        if (!props.status) {
            props.updateProfileStatus("Установить статус")
        } else {
            props.updateProfileStatus(status)
        }
    }
    const deactivateEditeModeOnBlur = () => {
        setEditMode(false)
        return props.status
    }
    const clickButtonEnten = () => {
        updateStatusEnter.current.addEventListener('keydown', (keyPress) => {
            if (keyPress.keyCode === 13) {
                keyPress.preventDefault()
                deactivateEditeMode()
            }
        }, { once: true })
    }
    const onStatusChange = (e) => {
        clickButtonEnten()
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        if (status !== props.status) {
            setStatus(props.status)
        }
    }, [props.status]) 

    return (
        <div>
            {!editMode &&
                <div>
                    <span data-testid="status" className={classes.aboutMe__editor} onClick={activateEditMode} >
                        {props.status ? props.status : "Установить статус"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input data-testid="status-input" ref={updateStatusEnter}
                        onChange={onStatusChange} autoFocus onBlur={deactivateEditeModeOnBlur}
                        defaultValue={status} maxLength={300} placeholder='Введите статус' type="text" />
                    <div>
                        <button data-testid="btn-status" onClick={deactivateEditeMode}
                            onMouseDown={deactivateEditeMode} type="submit">Сохранить</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProfileStatus