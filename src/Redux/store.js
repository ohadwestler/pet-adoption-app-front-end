import { configureStore } from "@reduxjs/toolkit";
import reducer from "./pets/reducers";
import authReducer from "./user/reducers";


const store = configureStore({
  reducer: {
    pets: reducer,
    auth: authReducer,

  },
});

export default store;