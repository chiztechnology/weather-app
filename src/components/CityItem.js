import { Text } from '@mantine/core';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './cityitem.css';

const CityItem = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="item-container" role="button" tabIndex={0} onKeyUp={() => { }} onClick={() => navigate({ pathname: `/details/${data.city}` })}>
      <Text className="city-item-name">{data.city}</Text>
      <div className="sub-div-city-item">
        <Text className="country-name">
          (
          {data.country}
          )
        </Text>
        <FaArrowRight size={20} color="white" />
      </div>
    </div>
  );
};

export default CityItem;
