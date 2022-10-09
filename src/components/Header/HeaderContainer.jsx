import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getAuthUserData } from "../../Redux/auth";
import Header from "./Header";

const HeaderContainer = (props) => {
    return (
        <Header { ...props } />
        )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps)(HeaderContainer)