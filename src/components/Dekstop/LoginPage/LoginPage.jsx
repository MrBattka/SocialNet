import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../../Redux/auth-reduser";
import LoginReduxForm from "./LoginForm/LoginForm";
import classes from "./LoginPage.module.css";

const LoginPage = (props) => {

    if (props.isAuth) {
        return <Navigate replace to={"/profile"} />
    }
    
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    return (
        <div className={classes.wrapperLoginPage}>
            <div className={classes.wrapperForm}>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
            </div>
        </div>
    )
}

export default connect(null, { login })(LoginPage)