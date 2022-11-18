import React from "react";
import { reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { createField, Input } from "../../Common/formsControls/formControls";
import classes from "../LoginPage.module.css";

const LoginForm = ({ handleSubmit, error, props }) => {
    return (
        <div className={error ? classes.formSummaryError : classes.form}>
            <form onSubmit={handleSubmit}>
                {createField("Email", "email", [required], Input)}
                {createField("Password", "password", [required], Input, { type: "password" })}
                {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "Remember Me")}
                <div className={classes.submit}>
                    <button>Sign In</button>
                    <span className={classes.error}>{error && <div> {error} </div>}</span>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default LoginReduxForm