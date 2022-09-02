import React from "react";
import preloader from '../../../assets/img/preloader.svg'
import classes from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={classes.loader}>
        <img src={preloader} />
    </div>
}

export default Preloader;