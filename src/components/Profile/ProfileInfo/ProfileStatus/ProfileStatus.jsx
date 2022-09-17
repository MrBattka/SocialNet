import React from "react";
import classes from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode() {
        this.setState({editMode: true})
    }
    deactivateEditeMode() {
        this.setState({editMode: false})
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span className={classes.aboutMe__editor} onClick={this.activateEditMode.bind(this)} >{this.props.profile.aboutMe}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.deactivateEditeMode.bind(this)} defaultValue={this.props.profile.aboutMe} type="text" />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus