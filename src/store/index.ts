import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth";
import modal from "./modal";
import appearance from "./appearance";

const rootReducer = combineReducers({
  auth: authReducer,
  modal,
  appearance,
});

export type RootStateType = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
