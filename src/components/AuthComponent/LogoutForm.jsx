import React from "react";
import classes from "./AuthComponent.module.css"
import { reduxForm } from "redux-form"
import { NavLink } from "react-router-dom"
import LogoutSvg from "../Common/LogoutSvg/LogoutSvg";

const LogoutForm = (props) => {
    return (
        <div className={classes.login__block}>
            <form className={classes.login__form} onSubmit={props.handleSubmit}>
                <p className={classes.login}> {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>} {props.isAuth ?
                        <button className={classes.btn__logout}><LogoutSvg /></button> : ""}</p>
            </form>
        </div>
    )
}

const LogoutReduxForm = reduxForm({ form: 'logout' })(LogoutForm)

export default LogoutReduxForm