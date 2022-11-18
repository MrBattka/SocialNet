import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../Redux/auth-reduser";
import LoginReduxForm from "./LoginForm/LoginForm";
import classes from "./LoginPage.module.css"

const LoginPage = (props) => {
    if (props.isAuth) {
        return <Navigate replace to={"/profile"} />
    }
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <div className={classes.wrapperLoginPage}>
            <div className={classes.titleLogin}>
                <p className={classes.loginTitle}>LOGIN</p>
            </div>
            <div>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default connect(null, { login })(LoginPage)