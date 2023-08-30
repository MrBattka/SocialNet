import React, { useRef, useState } from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../../../utils/validators/validators";
import { Input, TextareaMaterialUI } from "../../../../Common/formsControls/formControls";
import classes from "../Messages.module.css";
import submitIcon from "../../../../../assets/img/red_submit.png";

const maxLength100 = maxLengthCreator(100);

const SendMessageForm = ({ handleSubmit }) => {
  const [text, setText] = useState("");
  const refForm = useRef();

  return (
    <form ref={refForm} onSubmit={handleSubmit}>
      <div className={classes.form}>
        <div className={classes.wrapper_input}>
          <Field
            component={TextareaMaterialUI}
            name="sendMessage"
            validate={[maxLength100]}
            placeholder="New message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="New message"
            color="error"
          />
        </div>
        <div className={classes.submit}>
          <button>
            <img src={submitIcon} alt="Not found" />
          </button>
        </div>
      </div>
    </form>
  );
};

const SendMessageReduxForm = reduxForm({ form: "sendMessage" })(
  SendMessageForm
);

export default SendMessageReduxForm;
