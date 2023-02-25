/* eslint-disable */
import { Text } from '@mantine/core';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { createSearchParams, useNavigate } from 'react-router-dom';
import './cityitem.css';

const CityItem = (props) => {
  const navigate = useNavigate();
  const { city, country } = props.data;

  return (
    <div className="item-container" onClick={() => navigate({ pathname: '/details', search: createSearchParams({ cityName: city }).toString() })}>
      <Text className="city-item-name">{city}</Text>
      <div className="sub-div-city-item">
      <Text className="country-name">({country})</Text>
      <FaArrowRight size={20} color="white"/>
      </div>
    </div>
  );
};

export default CityItem;
