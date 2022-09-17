
import classes from './../Messages.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink className={classes.DialogItem__link} to={path}>{props.name}</NavLink>
        </div>
    )
};


export default DialogItem;