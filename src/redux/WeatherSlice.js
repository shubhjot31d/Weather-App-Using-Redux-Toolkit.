import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    location: '',
    weatherData: {}
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    }
  }
});

export const { setLocation, setWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
