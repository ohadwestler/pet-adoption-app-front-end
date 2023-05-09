export const setLoading = (loading) => ({
    type: "SET_LOADING",
    payload: loading,
  });
  
  export const setLoadingSpinner = (loading) => ({
    type: "SET_LOADING_SPINNER",
    payload: loading,
  });
  
  export const setAuth = (authData) => ({
    type: "SET_AUTH",
    payload: authData,
  });

  export const setAllUsers = (users) => ({
    type: "SET_ALL_USERS",
    payload: users,
  });

  
export const setUserClicked = (user) => ({
    type: "SET_USER_CLICKED",
    payload: user,
  });
  
