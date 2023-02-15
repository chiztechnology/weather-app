import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const apikey = '45ef86c3a51d4ca7acc85658231502';
const FETCH = 'weather/FETCH';

const initialState = {
  weather: [],
};

const randomCities = JSON.stringify({
  locations: [
    {
      q: 'paris',
    },
    {
      q: 'chicago',
    },
    {
      q: 'washington',
    },
    {
      q: 'London',
    },
    {
      q: '90201',
    },
    {
      q: 'kinshasa',
    },
    {
      q: 'nairobi',
    },
    {
      q: 'madrid',
    },
    {
      q: 'tokyo',
    },
    {
      q: 'new york',
    },
  ],
});

export const getWeatherFromRandomCities = createAsyncThunk(FETCH, async () => {
  const weather = await api.get(`/current.json?key=${apikey}&q=bulk`, { data: randomCities });
  console.log(weather);
  // console.log(randomCities);

  return weather;
});

// export const getWeather = createAsyncThunk(FETCH, async () => {
//   const weather = await api.get('/missions');
//   console.log(missions);
//   return missions.data.map((mission) => ({
//     id: mission.mission_id,
//     name: mission.mission_name,
//     description: mission.description,
//     reserved: false,
//   }));
// });

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    // reserveMission(state, action) {
    //   const missions = state.missions.map((mission) => {
    //     if (mission.id === action.payload) {
    //       return {
    //         // set the reverse value
    //         ...mission, reserved: !mission.reserved,
    //       };
    //     }
    //     return mission;
    //   });
    //   return { ...state, missions };
    // },
  },
  extraReducers: {
    [getWeatherFromRandomCities.fulfilled]: (state, action) => {
      const currState = state;
      currState.weather = action.payload;
    },
  },
});

// export const { reserveMission } = missionsSlice.actions;
export default weatherSlice.reducer;
