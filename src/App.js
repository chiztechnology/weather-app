import React, { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { useDispatch } from 'react-redux';
import Weather from './components/Weather';
import { getWeatherFromRandomCities } from './redux/weather/weatherSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherFromRandomCities());
  }, [dispatch]);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Weather />
    </MantineProvider>
  );
}

export default App;
