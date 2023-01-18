import { getAuthUserData } from "./auth-reduser"

const INITIALIZED__ACCESS = "INITIALIZED__ACCESS" 

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

const appReduser = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccessType = {
    type: typeof INITIALIZED__ACCESS
}
export const initializedSuccess = (): InitializedSuccessType => ({ type: INITIALIZED__ACCESS })

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())  
        })
}

export default appReduser