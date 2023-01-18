import { type } from "os"
import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const OUT_AUTH_USER_DATA = 'OUT_AUTH_USER_DATA'

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    rememberMe: boolean,
    isAuth: boolean
}

const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    rememberMe: false,
    isAuth: false
}

const authReduser = (state = initialState, action: any): InitialStateType => {
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

type PayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataType = {
    type: typeof SET_AUTH_USER_DATA
    payload: PayloadType
}
export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean): SetAuthUserDataType =>
    ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } })

type OutAuthUserDataType = {
    type: typeof OUT_AUTH_USER_DATA
    payload: PayloadType
}
export const outAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): OutAuthUserDataType =>
    ({ type: OUT_AUTH_USER_DATA, payload: { userId, email, login, isAuth } })

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const login = (userId: number | null, email: string | null, password: string | null, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authAPI.login(userId, email, password)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        dispatch(stopSubmit("login", { _error: message }))
    }
}


export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(outAuthUserData(null, null, null, false))
    }
}

export default authReduser