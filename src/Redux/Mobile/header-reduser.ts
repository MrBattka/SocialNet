const SET_NAV_MENU = 'SET_NAV_MENU'

const initialState = {
    isOpenNavMenu: false
}

export type InitialStateType = typeof initialState

const headerRedusers = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_NAV_MENU:
            return {
                ...state,
                isOpenNavMenu: action.isOpen
            }
        default:
            return state
    }
}

type OpenNavMenuType = {
    type: typeof SET_NAV_MENU
    isOpen: boolean
  }
export const openNavMenu = (isOpen: boolean): OpenNavMenuType => ({ type: SET_NAV_MENU, isOpen })

export default headerRedusers