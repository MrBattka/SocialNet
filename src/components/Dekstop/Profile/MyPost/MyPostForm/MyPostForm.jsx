import React, { useRef, useState } from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../../../utils/validators/validators";
import { Textarea, TextareaMaterialUI } from "../../../../Common/formsControls/formControls";
import classes from "../MyPost.module.css";
import { Button } from "@mui/material";

const maxLength500 = maxLengthCreator(500);

const MyPostForm = (props) => {
  const [text, setText] = useState("");
  const refForm = useRef();

  return (
    <div>
      <form ref={refForm} onSubmit={props.handleSubmit}>
        <div className={classes.textarea__wrapper}>
          <Field
            component={TextareaMaterialUI}
            name="newPostText"
            className={classes.textarea}
            validate={[maxLength500]}
            placeholder={"Post message"}
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="New post"
            color="error"
          />
        </div>
        <div className={classes.btn__wrapper}>
          <Button
            variant="contained"
            color="error"
            size="small"
            type="submit"
            onClick={(e) => e.target.blur()}
          >
            New Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export const MyPostReduxForm = reduxForm({ form: "addMyPostForm" })(MyPostForm);
