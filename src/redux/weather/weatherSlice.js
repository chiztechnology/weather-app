import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import api from '../../api';

const FETCH = 'cities/FETCH';
// const apiKey = process.env.REACT_APP_apiKey || '';

const initialState = {
  cities: [],
};

// const towns = {
//   locations: [
//     {
//       q: 'paris',
//     },
//     {
//       q: 'chicago',
//     },
//     {
//       q: 'washington',
//     },
//     {
//       q: '90201',
//     },
//     {
//       q: 'kinshasa',
//     },
//     {
//       q: 'nairobi',
//     },
//     {
//       q: 'madrid',
//     },
//     {
//       q: 'tokyo',
//     },
//     {
//       q: 'new york',
//     },
//   ],
// };

export const getWeatherFromRandomCities = createAsyncThunk(FETCH, async () => {
  const cities = await axios.post('https://countriesnow.space/api/v0.1/countries/population/cities/filter', {
    limit: 20, order: 'rand', orderBy: 'name', country: 'france',
  });
  console.log('data from api');
  console.log(cities.data.data);
  return cities.data.data;
});

const weatherSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherFromRandomCities.fulfilled, (state, action) => ({
      ...state,
      cities: action.payload,
    }));
  },
});

export default weatherSlice.reducer;
