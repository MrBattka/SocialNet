import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const OUT_AUTH_USER_DATA = 'OUT_AUTH_USER_DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
    rememberMe: false,
    isAuth: false
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case OUT_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: false
            }
        default:
            return state
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } })
export const outAuthUserData = (userId, email, login, isAuth) => ({ type: OUT_AUTH_USER_DATA, payload: { userId, email, login, isAuth } })

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const login = (userId, email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(userId, email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        dispatch(stopSubmit("login", { _error: message }))
    }
}


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(outAuthUserData(null, null, null))
    }
}

export default authReduser