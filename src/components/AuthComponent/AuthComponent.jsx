import React from "react";
import LogoutReduxForm from "./LogoutForm";
import classes from "./AuthComponent.module.css"
import { logout } from "../../Redux/auth-reduser";
import { connect } from "react-redux";

const AuthComponent = (props) => {
    const onSubmit = () => {
        props.logout()
    }
    return (
        <div className={classes.login__block}>
            <LogoutReduxForm {...props} onSubmit={onSubmit} isAuth={props.isAuth}
                login={props.login} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { logout})(AuthComponent)