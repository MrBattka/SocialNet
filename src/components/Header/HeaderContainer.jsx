import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";
import { setAuthUserData } from "../../Redux/auth";
import Header from "./Header";

const HeaderContainer = (props) => {

    useEffect(() => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    props.setAuthUserData(id, email, login)
                }
            })
    }, [])

    return (
        <Header { ...props } />
        )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)