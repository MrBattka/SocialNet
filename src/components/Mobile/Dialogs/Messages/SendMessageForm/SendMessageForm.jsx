import React, { useRef, useState } from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../../../utils/validators/validators";
import { Input } from "../../../../Common/formsControls/formControls";
import classes from "../Messages.module.css";
import submitIcon from "../../../../../assets/img/red_submit.png";

const maxLength100 = maxLengthCreator(100);

const SendMessageForm = ({ handleSubmit }) => {
  const [text, setText] = useState("");
  const refForm = useRef();

  return (
    <form ref={refForm} onSubmit={handleSubmit}>
      {/* {createField('sendMessage', "text", [required], Input)} */}
      <div className={classes.form}>
        <div className={classes.wrapper_input}>
          <Field
            component={Input}
            name="sendMessage"
            validate={[required, maxLength100]}
            placeholder="New message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className={classes.submit}>
          <button>
            <a href="#buttom">
              <img src={submitIcon} alt="Not found" />
            </a>
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
