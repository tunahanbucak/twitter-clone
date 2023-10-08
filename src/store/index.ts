import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"; // auth reducer'ının yolu

const rootReducer = combineReducers({
  auth: authReducer,
  // Diğer slicelar burada olur...
});

export type RootStateType = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
