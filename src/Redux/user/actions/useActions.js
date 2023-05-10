import axios from "axios";
import {
  setLoading,
  setLoadingSpinner,
  setAuth,
  setAllUsers,
  setUserClicked,
} from "./types";
import API_ENDPOINT from "../../api"

export const stopAuthLoading = () => {
  return async (dispatch) => {
    dispatch(setLoadingSpinner(true));
    try {
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
      dispatch(setLoadingSpinner(false));
    }
  };
};

export const fetchAuth = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingSpinner(true));
      dispatch(setLoading(true));
      const res = await axios.get(API_ENDPOINT + `/login`);
      const authData = res.data.result[0];
      dispatch(setAuth(authData));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
      dispatch(setLoadingSpinner(false));
    }
  };
};

export const postSignUp = (
  email,
  password,
  firstname,
  lastName,
  confirmPasswad,
  phone
) => {
  return async (dispatch) => {
    dispatch(setLoadingSpinner(true));
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(API_ENDPOINT + "/adduser", {
          email,
          firstname,
          lastName,
          password,
          phone,
          confirmPasswad,
        });
        const {accessToken} = res.data;
        localStorage.setItem("access-token", accessToken);
        dispatch(setAuth({ ...res.data }));
        resolve();
      } catch (err) {
        if (err.response.data[0]) {
          reject(
            new Error(
              `${err.response.data[0].instancePath.replace(API_ENDPOINT + "/", "")} ${
                err.response.data[0].message
              }`
            )
          );
        } else {
          reject(new Error(err.response.data.message || "Error signing up"));
        }
      } finally {
        dispatch(setLoadingSpinner(false));
      }
    });
  };
};

export const postLogin = (email, password) => {
  return async (dispatch) => {
    dispatch(setLoadingSpinner(true));
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(API_ENDPOINT + "/auth", {
          email,
          password,
        });
        const {accessToken} = res.data;
        localStorage.setItem("access-token", accessToken);
        dispatch(setAuth({ ...res.data.user[0] }));
        resolve();
      } catch (err) {
        if (err?.response?.data?.[0]?.message) {
          reject(new Error(err?.response?.data?.[0]?.message));
        } else {
          reject(new Error(err?.response?.data));
        }
      } finally {
        dispatch(setLoadingSpinner(false));
      }
    });
  };
};

export const dissconnectUser = () => {
  return async (dispatch) => {
    dispatch(setLoadingSpinner(true));
    localStorage.removeItem("access-token");
      dispatch(setAuth(null));
      dispatch(setLoadingSpinner(false));
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    dispatch(setLoadingSpinner(true));
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.put(API_ENDPOINT + "/changes", user);
        const {accessToken} = res.data;
        localStorage.setItem("access-token", accessToken);
  
        dispatch(setAuth({ ...user }));
        resolve();
      } catch (err) {
        console.log(err.response);
        if (err?.response?.data?.[0]) {
          reject(
            new Error(
              `${err.response.data[0].instancePath.replace(API_ENDPOINT + "/", "")} ${
                err.response.data[0].message
              }`
            )
          );
        } else {
          reject(new Error(err.response.data.message));
        }
      } finally {
        dispatch(setLoadingSpinner(false));
      }
    });
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    dispatch(setLoadingSpinner(true));
    try {
      const res = await axios.get(API_ENDPOINT + `/users`);
      dispatch(setAllUsers([...res.data.result]));
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      dispatch(setLoadingSpinner(false));
    }
  };
};

export const userClicked = (user) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingSpinner(true));
      dispatch(setUserClicked(user));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoadingSpinner(false));
    }
  };
};
