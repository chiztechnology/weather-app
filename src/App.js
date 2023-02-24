import React from 'react';
import { MantineProvider } from '@mantine/core';
// import { useDispatch } from 'react-redux';
import Weather from './components/Weather';
// import { getWeatherFromRandomCities } from './redux/weather/weatherSlice';
// import { getWeatherDetails } from './redux/weather/DetailWeather';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {

  // }, [dispatch]);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Weather />
    </MantineProvider>
  );
}

export default App;
