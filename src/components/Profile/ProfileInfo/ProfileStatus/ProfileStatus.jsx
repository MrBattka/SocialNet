import React from "react";
import classes from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {
    updateStatusEnter = React.createRef()
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({ editMode: true })
    }
    deactivateEditeMode = () => {
        this.setState({ editMode: false })
        if (!this.state.status) {
            this.props.updateProfileStatus("Установить статус")
        } else {
            this.props.updateProfileStatus(this.state.status)
        }
    }
    deactivateEditeModeOnBlur = () => {
        this.setState({ editMode: false })
        return this.props.status
    }
    clickButtonEnten = () => {
        this.updateStatusEnter.current.addEventListener('keydown', (keyPress) => {
            if (keyPress.keyCode === 13) {
                keyPress.preventDefault()
                this.deactivateEditeMode()
            }
        }, { once: true })
    }
    onStatusChange = (e) => {
        this.clickButtonEnten()
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !==this.props.status) {
            this.setState({ status: this.props.status })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span className={classes.aboutMe__editor} onClick={this.activateEditMode} >
                            {this.props.status ? this.props.status : "Установить статус"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input ref={this.updateStatusEnter}
                            onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditeModeOnBlur}
                            defaultValue={this.props.status} maxLength={300} placeholder='Введите статус' type="text" />
                        <div>
                            <button onClick={this.deactivateEditeMode}
                                onMouseDown={this.deactivateEditeMode} type="submit">Сохранить</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus