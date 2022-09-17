import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthLocation = (Component) => {
    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })
    const LocationComponent = (props) => {
        if (!props.isAuth) { return <Navigate replace to={"/login"} /> }
        return <Component {...props} />
    }
    const ConnectedAuthLocation = connect(mapStateToProps)(LocationComponent)
    return ConnectedAuthLocation
}