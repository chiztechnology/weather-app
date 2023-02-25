import React, { useEffect, useState } from 'react';
import {
  Loader, Text, Image,
} from '@mantine/core';
import { useSelector } from 'react-redux';
import CityItem from './CityItem';
import './cities.css';

const Cities = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const { cities } = useSelector((state) => state.cities);

  return (
    <div className="cities-container">
      {/* header status bar */}
      <div className="cities-status-bar">
        <Text className="city-header-title">My Weather App</Text>
      </div>

      {/* sub-header */}
      <div className="sub-header-city">
        <Image
          radius="md"
          src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
          alt="Weather icon"
          width={80}
        />
        <Text className="weather-desc-title">Weather App</Text>
      </div>

      <div className="list-cities-bar">
        <Text className="list-of-cities">List of cities</Text>
      </div>

      {/* display grid */}
      <div style={{ alignItems: 'center', justifyContent: 'center' }}>

        {loading ? (
          <Loader variant="dots" style={{ alignSelf: 'center' }} />
        ) : (
          cities.length > 0 && cities.map((city) => (
            <CityItem key={city.city} data={city} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cities;
