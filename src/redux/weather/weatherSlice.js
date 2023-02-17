import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import api from '../../api';

// const apikey = '45ef86c3a51d4ca7acc85658231502';
// const apiKey = 'f0cad4d31278ac0a6fd7a4034450e580';
const FETCH = 'weather/FETCH';

const initialState = {
  weather: [],
};

// const randomCities = JSON.stringify({
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
//       q: 'London',
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
// });

export const getWeatherFromRandomCities = createAsyncThunk(FETCH, async () => {
  // const weather = await api.get(`/current.json?key=${apikey}&q=paris`, { data: randomCities });
  // const weather = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=bulk`, randomCities);

  // api.get(`/current.json?key=${apikey}&q=bulk`, randomCities).then((dat) => {
  //   console.log(dat.data);
  // });
  // console.log(weather.data);
  // console.log(randomCities);

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
