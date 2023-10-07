import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";

const store = configureStore({
  reducer: {
    auth,
    // modal,
    // appearance,
  },
});

export default store;
