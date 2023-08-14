const SET_NAV_MENU = "SET_NAV_MENU";

const initialState = {
  isOpenNavMenu: false,
};

const headerRedusers = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAV_MENU:
      return {
        ...state,
        isOpenNavMenu: action.isOpen,
      };
    default:
      return state;
  }
};

export const openNavMenu = (isOpen) => ({ type: SET_NAV_MENU, isOpen });

export default headerRedusers;