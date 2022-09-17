import React from "react";
import { Navigate } from "react-router-dom";

const LoginPage = (props) => {
    if (props.isAuth) {
        return <Navigate replace to={"/profile/2"} />
    }
    return (
        <div>
            <p>LOGIN</p>
        </div>
    )
}

export default LoginPage