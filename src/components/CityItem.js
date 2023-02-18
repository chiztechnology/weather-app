/* eslint-disable */
import { Image, Text } from '@mantine/core';
import React, { useEffect } from 'react';
import { FaCity } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams, useNavigate } from "react-router-dom";
import { getWeatherDetails } from '../redux/weather/weatherSlice';
import './cityitem.css';
// import { useSelector } from 'react-redux';

const CityItem = (props) => {
  // const props = {};
  // console.log(props);
  const { name, country, localtime, humidity, temp_c } = props.data;
  const navigate = useNavigate();

  // const { humididy, temp_c } = props.data ? props.data.condition: 0;
  // const { name, country, localtime } = '';
  // const { humididy, temp_c } = '';
  return (
    <div className="item-container" onClick={() => navigate({ pathname: "/details", search: createSearchParams({ cityName: name }).toString() })}>
      <Text style={{ alignItems: 'center', display: 'flex' }}>
        <FaCity style={{ paddingRight: 5 }} size={24} />
        {name}
      </Text>
      <Text>{country}</Text>
      <Text> Local Time: {localtime}</Text>
      <Text> Temperature: {temp_c}</Text>
      <Image
        radius="md"
        src="//cdn.weatherapi.com/weather/64x64/night/143.png"
        alt="Random unsplash image"
        style={{ width: 30, height: 'auto' }}
      />
      <Text>Humidity : {humidity}</Text>
    </div>
  );
};

export default CityItem;
