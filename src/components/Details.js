import {
  Image, RingProgress, Text, UnstyledButton,
} from '@mantine/core';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherDetails } from '../redux/weather/DetailWeather';
import './details.css';

const Details = () => {
  const { id } = useParams();
  const dataDet = useSelector((state) => state.weatherDetails);
  const obj = dataDet.weatherDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherDetails(id));
  }, []);

  const navigate = useNavigate();
  return (
    <div className="cities-container">
      <div className="cities-status-bar">
        <UnstyledButton
          onClick={() => navigate(-1)}
          className="navigate-back-button"
        >
          <FaArrowLeft color="white" />
        </UnstyledButton>
        <Text className="city-header-title">Town/Cities</Text>
      </div>
      {/* page content */}
      <div>

        <Text className="details-text-name">
          {obj.location.name || '... Loading'}
          (
          {obj.location.country || '... Loading'}
          )
        </Text>

        <Text className="text-highlights-title">
          Today&apos;s Highlights
        </Text>
        {/* highlights components */}
        <div className="data-grid">
          {/* uv index */}
          <div className="data-grid-item">
            <Text>UV Index</Text>
            <RingProgress
              sections={[{ value: obj.current.uv, color: 'yellow' }]}
              label={
                <Text color="yellow" weight={700} align="center" size="xl">{obj.current.uv}</Text>
              }
            />
          </div>
          {/* wind status */}
          <div className="data-grid-item dark">
            <Text>Wind Status</Text>
            <Text style={{ fontWeight: 500, fontSize: 42, margin: '30px 0 30px 0' }}>
              {obj.current.wind_kph}
              <span style={{ fontSize: 18 }}>Km/h</span>
            </Text>
          </div>
        </div>

        <div className="data-grid">
          {/* Sunrise and Sunset */}
          <div className="data-grid-item dark">

            <Text>Temperature</Text>

            <Image
              radius="md"
              src={obj.current.condition.icon}
              alt="Random unsplash image"
              style={{ width: 60, height: 'auto' }}
            />
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            >
              <Text style={{ marginBottom: 20, marginTop: 10 }}>
                It s actually
                {obj.current.temp_c}
                °C
              </Text>
            </div>
          </div>
          {/* Humidity */}
          <div className="data-grid-item">
            <Text>Humidity</Text>
            <Text style={{ fontWeight: 500, fontSize: 42, margin: '30px 0 3px 0' }}>
              {obj.current.humidity}
              <span style={{ fontSize: 18 }}>%</span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
