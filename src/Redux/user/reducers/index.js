const initialState = {
  userDetails: null,
  allUsers: [],
  userClicked: null,
  loading: true,
  loadingSpinner: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return { ...state, userDetails: action.payload };
    case "SET_ALL_USERS":
      return { ...state, allUsers: action.payload };
    case "SET_USER_CLICKED":
      return { ...state, userClicked: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_LOADING_SPINNER":
      return { ...state, loadingSpinner: action.payload };
    default:
      return state;
  }
};

export default authReducer;