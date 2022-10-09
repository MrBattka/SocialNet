import React from "react";
import logout from "../../../assets/img/logout.svg"
import classes from "./LogoutSvg.module.css"

const LogoutSvg = () => {
    return (
        <div className={classes.logout__img}>
            <img src={logout}/>
        </div>
    )
}

export default LogoutSvg