import React from "react";
import { connect } from "react-redux";
import { logout } from "../../Redux/auth-reduser";
import { openNavMenu } from "../../Redux/Mobile/header-reduser";
import classes from "./AuthComponent.module.css";
import LogoutReduxForm from "./LogoutForm";

const AuthComponent = (props) => {
    
    const onSubmit = () => {
        props.logout()
        props.openNavMenu(false)
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

export default connect(mapStateToProps, { logout, openNavMenu })(AuthComponent)