import React from "react";
import classes from "../MyPost.module.css"
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../../utils/validators/validators";
import { Textarea } from "../../../Common/formsControls/formControls";

const maxLength10 = maxLengthCreator(10)

const MyPostForm = (props) => { 
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className={classes.textarea__wrapper}>
                    <Field component={Textarea} name="newPostText" className={classes.textarea}
                        validate={[required, maxLength10]} placeholder={"Post message"} />
                </div>
                <div className={classes.btn__wrapper}>
                    <button className={classes.btn}>Post</button>
                    <button className={classes.btn}>Remove</button>
                </div>
            </form>
        </div>
    )
}

export const MyPostReduxForm = reduxForm({ form: "addMyPostForm" })(MyPostForm)