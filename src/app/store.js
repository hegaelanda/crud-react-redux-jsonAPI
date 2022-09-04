import { configureStore } from "@reduxjs/toolkit";
import hadirinReducer from "../features/hadirinSlice";

const store = configureStore({
  reducer: {
    hadirin: hadirinReducer,
  },
});

export default store;
