/* eslint-disable */
import { Text } from '@mantine/core';
import React from 'react';
import { FaCity } from 'react-icons/fa';
import { createSearchParams, useNavigate } from 'react-router-dom';
import './cityitem.css';

const CityItem = (props) => {
  const navigate = useNavigate();
  const { city, country } = props.data;

  return (
    <div className="item-container" onClick={() => navigate({ pathname: '/details', search: createSearchParams({ cityName: city }).toString() })}>
      <Text style={{ alignItems: 'center', display: 'flex' }}>
        <FaCity style={{ paddingRight: 5 }} size={24} />
        {city}
      </Text>
      <Text>{country}</Text>
    </div>
  );
};

export default CityItem;
