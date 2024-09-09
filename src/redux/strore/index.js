import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../form/FormSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
