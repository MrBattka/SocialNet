import { connect } from "react-redux";
import LoginPage from "./LoginPage";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.usersPage.isFetching,
        profile: state.profilePage.profile,
        captchaUrl: state.auth.captchaUrl
    }
}

const LoginPageContainer = connect(mapStateToProps)(LoginPage)

export default LoginPageContainer
