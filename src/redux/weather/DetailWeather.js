import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH = 'weather/FETCH';
const apiKey = '45ef86c3a51d4ca7acc85658231502';
const initialState = {
  WeatherDetails: {
    location: {
      name: '...',
      region: '...',
      country: '...',
      localtime: '2023-02-18 21:28',
    },
    current: {
      temp_c: 26.6,
      temp_f: 79.9,
      condition: {
        text: 'Clear',
        icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
        code: 1000,
      },
      wind_mph: 2.9,
      wind_kph: 4.7,
      wind_degree: 243,
      wind_dir: 'WSW',
      humidity: 65,
    },
  },
};

export const getWeatherDetails = createAsyncThunk(FETCH, async (name) => {
  const WeatherDetails = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${name}`);
  return WeatherDetails.data;
});

const weatherDetailsSlice = createSlice({
  name: 'WeatherDetails',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getWeatherDetails.fulfilled]: (state, action) => {
      const currState = state;
      currState.WeatherDetails = action.payload;
    },
  },
});

export default weatherDetailsSlice.reducer;
