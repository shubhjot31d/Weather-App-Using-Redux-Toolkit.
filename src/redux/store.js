import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./WeatherSlice";

export default configureStore({
  reducer: {
    counter: WeatherReducer
  }
});