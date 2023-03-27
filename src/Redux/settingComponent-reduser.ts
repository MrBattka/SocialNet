const SELECTED_DARK_THEME = 'SELECTED_DARK_THEME'

const initialState = {
    isSelectedDarkTheme: null
}

export type InitialStateType = typeof initialState

const settingPageRedusers = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SELECTED_DARK_THEME:
            return {
                ...state,
                isSelectedDarkTheme: action.isSelected
            }
        default:
            return state
    }
}

type selectedDarkTheme = {
    type: typeof SELECTED_DARK_THEME
    isSelected: boolean
  }

export const selectedDarkTheme = (isSelected: boolean) => ({ type: SELECTED_DARK_THEME, isSelected })


export default settingPageRedusers