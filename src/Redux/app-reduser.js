import { createAction } from "@reduxjs/toolkit";
import { getAuthUserData } from "./auth-reduser"

export const initializedSuccess = createAction("INITIALIZED__ACCESS");

const initialState = {
    initialized: false
}

const appReduser = (state = initialState, action ) => {
    switch (action.type) {
        case initializedSuccess.toString():
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())  
        })
}

export default appReduser