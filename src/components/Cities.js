import React, { useEffect, useState } from 'react';
import {
  Loader, Text, Image, Input,
} from '@mantine/core';
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import CityItem from './CityItem';
import './cities.css';

const Cities = () => {
  const { cities } = useSelector((state) => state.cities);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    // setTimeout(() => {
    if (cities.length > 0) {
      setLoading(false);
    }
    setFilteredData(cities);
    // }, 1000);
  }, [cities]);

  const handleChange = (text) => {
    const content = text.target.value;
    console.log(content);
    setFilteredData(cities.filter((e) => e.city.toLowerCase().includes(content.toLowerCase())));
  };

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

      <Input
        className="search-input"
        icon={<FaSearch />}
        placeholder="Search"
        onChange={handleChange}
      />

      <div className="list-cities-bar">
        <Text className="list-of-cities">List of cities</Text>
      </div>

      {/* display grid */}
      <div style={{ alignItems: 'center', justifyContent: 'center' }}>

        {loading ? (
          <div className="loading-container">
            <Loader variant="dots" style={{ alignSelf: 'center' }} />
          </div>
        ) : (
          filteredData.length > 0 && filteredData.map((city) => (
            <CityItem key={city.city} data={city} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cities;
