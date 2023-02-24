import { configureStore } from '@reduxjs/toolkit';
import WeatherDetailsReducer from './weather/DetailWeather';
import weatherSlice from './weather/weatherSlice';
// import CitiesReducer from './weather/weatherSlice';

const rootReducer = {
  cities: weatherSlice,
  weatherDetails: WeatherDetailsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
