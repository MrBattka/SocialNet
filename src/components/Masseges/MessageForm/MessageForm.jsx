import React from "react";
import classes from "../Messages.module.css"
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/formsControls/formControls";

const maxLength100 = maxLengthCreator(100)
const MessageForm = (props) => {
    return (
        <div className={classes.textMessage}>
            <form onSubmit={props.handleSubmit}>
                <div >
                    <Field className={classes.textarea} component={Textarea}
                        name="newMessageBody" placeholder="Enter your message" autoFocus
                        validate={[required, maxLength100]}  />
                </div>
                <div className={classes.btn}>
                    <div className={classes.btnSend}>
                        <button className={classes.button}>Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const MessageFormRedux = reduxForm({ form: "dilogAddMessageForm" })(MessageForm)