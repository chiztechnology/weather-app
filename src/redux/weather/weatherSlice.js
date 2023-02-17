import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH = 'weather/FETCH';

const initialState = {
  weather: [],
};

export const getWeatherFromRandomCities = createAsyncThunk(FETCH, async () => {
  const weather = [{
    id: 1, name: 'london', country: 'United Kingdom', localtime: '12:09 PM', humidity: '80%', temp_c: '23',
  }, {
    id: 2, name: 'paris', country: 'France', localtime: '1:09 PM', humidity: '10%', temp_c: '12',
  }, {
    id: 3, name: 'kinshasa', country: 'DR Congo', localtime: '1:09 PM', humidity: '27%', temp_c: '32',
  }, {
    id: 4, name: 'san francisco', country: 'United States', localtime: '8:09 PM', humidity: '18%', temp_c: '15',
  }];
  return weather;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getWeatherFromRandomCities.fulfilled]: (state, action) => {
      const currState = state;
      currState.weather = action.payload;
    },
  },
});

export default weatherSlice.reducer;
