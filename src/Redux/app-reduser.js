import { getAuthUserData } from "./auth"

const INITIALIZED__ACCESS = "INITIALIZED__ACCESS" 

const initialState = {
    initialized: false
}

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED__ACCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED__ACCESS })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())  
        })
}

export default appReduser