import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_apiKey || '';

const FETCH = 'weather/FETCH';
const initialState = {
  weatherDetails: {
    location: {
      name: '...',
      region: '...',
      country: '...',
      localtime: '...',
    },
    current: {
      temp_c: 0,
      temp_f: 0,
      condition: {
        text: 'Clear',
        icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
        code: 1000,
      },
      wind_mph: 0,
      wind_kph: 0,
      wind_degree: 0,
      wind_dir: '',
      humidity: 0,
    },
  },
};

export const getWeatherDetails = createAsyncThunk(FETCH, async (name) => {
  const weatherDetails = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${name}`);
  return weatherDetails.data;
});

const weatherDetailsSlice = createSlice({
  name: 'weatherDetails',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherDetails.fulfilled, (state, action) => ({
      ...state,
      weatherDetails: action.payload,
    }));
  },
});

export default weatherDetailsSlice.reducer;
