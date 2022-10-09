import React from "react";
import { Field, reduxForm } from "redux-form"
import { required } from "../../../utils/validators/validators";
import { Input } from "../../Common/formsControls/formControls";
import classes from "../LoginPage.module.css"

const LoginForm = (props) => {
    return (
        <div className={ props.error ? classes.formSummaryError : classes.form }>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input}
                        validate={[required]} />
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input}
                        validate={[required]} />
                </div>
                <div className={classes.checkbox}>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input} /> <span> Remember Me </span>
                </div>
                { props.error && <div> {props.error} </div>}
                <div>
                    <button>Sign In</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default LoginReduxForm