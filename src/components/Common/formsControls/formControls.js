import React from "react";
import { Field } from "redux-form";
import classes from "./formControls.module.css";

export const FormControl = ({ meta: {touched, error}, children }) => {
    const hasError = touched && error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span className={classes.formError}>{error}</span>}
        </div>
    )
}

const submitFormonEnter = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()
    }
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea onSubmit={submitFormonEnter} {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input className={classes.inputWrapper} {...input} {...restProps} autoComplete="off" /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div className={classes.fieldControl}>
        <Field placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props} /> <span className={classes.rememberMe}>{text}</span>
    </div>
)
