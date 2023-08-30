import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../../Redux/auth-reduser";
import classes from "./Login.module.css";
import LoginReduxForm from "./LoginForm/LoginForm";

const LoginPage = ({ isAuth, captchaUrl, login }) => {
  if (isAuth) {
    return <Navigate replace to={"/profile"} />;
  }

  const onSubmit = (formData) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  return (
    <div className={classes.wrapperLoginPage}>
      <div className={classes.wrapperForm}>
        <LoginReduxForm
          onSubmit={onSubmit}
          captchaUrl={captchaUrl}
          isAuth={isAuth}
        />
      </div>
    </div>
  );
};

export default connect(null, { login })(LoginPage);
