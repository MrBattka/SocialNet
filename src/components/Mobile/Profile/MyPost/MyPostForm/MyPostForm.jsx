import React, { useRef, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator } from "../../../../../utils/validators/validators";
import {
  Input,
  TextareaMaterialUI,
} from "../../../../Common/formsControls/formControls";
import classes from "../MyPost.module.css";
import { Button } from "@mui/material";

const maxLength200 = maxLengthCreator(200);

const MyPostForm = ({ handleSubmit }) => {
  const [text, setText] = useState("");
  const refForm = useRef();

  return (
    <div>
      <form ref={refForm} onSubmit={handleSubmit}>
        <div>
          <Field
            className={classes.input}
            component={TextareaMaterialUI}
            name="newPostText"
            validate={maxLength200}
            placeholder="Post message"
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
