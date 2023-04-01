import React from "react";
import { reduxForm } from "redux-form";
import { required } from "../../../../utils/validators/validators";
import { createField, Input } from "../../../Common/formsControls/formControls";
import classes from "../Login.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <div className={error ? classes.formSummaryError : classes.form}>
            <form onSubmit={handleSubmit}>
                <div className={classes.titleLogin}>
                    <p className={classes.loginTitle}>LOGIN</p>
                </div>
                {createField('Email', "email", [required], Input)}
                {createField("Password", "password", [required], Input, { type: "password" })}
                {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "Remember Me")}

                {captchaUrl && <img className={classes.imgCaptcha} src={captchaUrl} />}
                {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
                <div className={classes.submit}>
                    <button className={classes.loginBtn}>Log In</button>
                    <span className={classes.error}>{error && <div> {error} </div>}</span>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default LoginReduxForm