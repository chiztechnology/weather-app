import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH = 'cities/FETCH';
const initialState = {
  cities: [],
};

export const getWeatherFromRandomCities = createAsyncThunk(FETCH, async () => {
  const cities = await axios.post('https://countriesnow.space/api/v0.1/countries/population/cities/filter', {
    limit: 20, order: 'rand', orderBy: 'name', country: 'france',
  });
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
