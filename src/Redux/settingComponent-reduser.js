const SELECTED_DARK_THEME = 'SELECTED_DARK_THEME'

const initialState = {
    isSelectedDarkTheme: null
}

const settingPageRedusers = (state = initialState, action) => {
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

export const selectedDarkTheme = (isSelected) => ({ type: SELECTED_DARK_THEME, isSelected })


export default settingPageRedusers