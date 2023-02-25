import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import {
//   AppShell, Navbar, Header, Burger, MediaQuery,
// } from '@mantine/core';
import { useDispatch } from 'react-redux';
import Cities from './Cities';
import Details from './Details';
// import LeftNavbar from './LeftNavbar';
// import MenuBar from './MenuBar';
// import { getWeatherDetails } from '../redux/weather/DetailWeather';
import { getWeatherFromRandomCities } from '../redux/weather/weatherSlice';

const Weather = () => {
  // const [opened, setOpened] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherFromRandomCities());
  }, []);

  return (
    <BrowserRouter>
      {/* Your application here */}
      <Routes>
        <Route path="/" element={<Cities />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Weather;
