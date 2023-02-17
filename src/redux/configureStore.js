import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather/weatherSlice';

const rootReducer = {
  weather: weatherReducer,
};

const store = configureStore({
  reducer: rootReducer,
  //  ...
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['weather/FETCH/fulfilled'],
      // Ignore these field paths in all actions
      ignoredActionPaths: ['meta.arg', 'payload.headers'],
      // Ignore these paths in the state
      ignoredPaths: ['items.dates'],
    },
  }),
});

export default store;
