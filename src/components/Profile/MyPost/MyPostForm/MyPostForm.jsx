import React, {useRef, useState} from "react";
import classes from "../MyPost.module.css"
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../../utils/validators/validators";
import { Textarea } from "../../../Common/formsControls/formControls";
import { createField } from '../../../Common/formsControls/formControls'

const maxLength100 = maxLengthCreator(100)

const MyPostForm = (props) => {
    const [text, setText] = useState('')
    const refForm = useRef()

    // let deletePostText = (value) => {
    //     props.newPostText(value.newPostText = "")
    // }

    return (
        <div>
            <form ref={refForm} onSubmit={props.handleSubmit}>
                <div className={classes.textarea__wrapper}>
                    <Field component={Textarea} name="newPostText" className={classes.textarea}
                        validate={[required, maxLength100]} placeholder={"Post message"} value={text} onChange={(e) => setText(e.target.value)} />
                        {/* { createField("Post message", "newPostText", [required], Textarea, {}) } */}
                </div>
                <div className={classes.btn__wrapper}>
                    <button className={classes.btn} type="submit">Post</button>
                    <button className={classes.btn} type="button" >Remove</button>
                </div>
            </form>
        </div>
    )
}

export const MyPostReduxForm = reduxForm({ form: "addMyPostForm" })(MyPostForm)