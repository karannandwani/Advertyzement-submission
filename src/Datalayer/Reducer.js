export const initialState = {
  loadLogoState: false,
  userData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOAD_STATE":
      return {
        ...state,
        loadLogoState: action.loadLogoState,
      };
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.userData,
      };

    default:
      return state;
  }
};

export default reducer;
