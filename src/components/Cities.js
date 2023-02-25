import React, { useEffect, useState } from 'react';
import {
  Loader, Input, Text, Image,
} from '@mantine/core';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import CityItem from './CityItem';
import './cities.css';

const Cities = () => {
  const [loading, setLoading] = useState(true);
  // const [myCities, setMyCities] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  // const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.cities);

  // const handleChange = (text) => {
  //   // console.log(text.target.value);
  //   if (text.target.value.length === 0) {
  //     setMyCities(cities);
  //   } else {
  //     const tempCities = myCities.filter((item) => item.city !== text.target.value);
  //     console.table(tempCities);
  //   }
  // };

  console.log(cities.length);

  return (
    <div className="cities-container">
      {/* header status bar */}
      <div className="cities-status-bar">
        <Text className="city-header-title">Town/Cities</Text>
      </div>
      <Input
        placeholder="Search for a city or Town"
        rightSection={<FaSearch size={14} />}
        style={{ width: '95%', margin: 10 }}
      // onChange={(text) => handleChange(text)}
      />

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

        {/* <Loader variant="dots" style={{ alignSelf: 'center' }} /> */}
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
