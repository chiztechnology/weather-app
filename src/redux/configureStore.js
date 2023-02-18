import { configureStore } from '@reduxjs/toolkit';
import WeatherDetailsReducer from './weather/DetailWeather';
import weatherReducer from './weather/weatherSlice';

const rootReducer = {
  weather: weatherReducer,
  WeatherDetails: WeatherDetailsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
