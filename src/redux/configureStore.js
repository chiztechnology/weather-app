import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather/weatherSlice';

const rootReducer = {
  weather: weatherReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
