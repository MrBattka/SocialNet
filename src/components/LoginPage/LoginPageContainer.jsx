import React from "react";
import { connect } from "react-redux";
import LoginPage from "./LoginPage";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.usersPage.isFetching
    }
}

const LoginPageContainer = connect(mapStateToProps)(LoginPage)

export default LoginPageContainer
