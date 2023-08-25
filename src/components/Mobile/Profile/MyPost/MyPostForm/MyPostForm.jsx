import React, { useRef, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator } from "../../../../../utils/validators/validators";
import { Input } from "../../../../Common/formsControls/formControls";
import classes from "../MyPost.module.css";
import { Button, TextField } from "@mui/material";

const maxLength200 = maxLengthCreator(200);

const MyPostForm = (props) => {
  const [text, setText] = useState("");
  const refForm = useRef();

  return (
    <div>
      <form ref={refForm} onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Input}
            name="newPostText"
            className={classes.input}
            validate={maxLength200}
            placeholder="Post message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className={classes.btn__wrapper}>
          <Button variant="contained" color="error" size="small" type="submit">
            New Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export const MyPostReduxForm = reduxForm({ form: "addMyPostForm" })(MyPostForm);
