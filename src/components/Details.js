import {
  Button, Image, RingProgress, Text,
} from '@mantine/core';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherDetails } from '../redux/weather/DetailWeather';

const Details = () => {
  const [searchparams] = useSearchParams();
  console.log(searchparams.get('cityName'));

  const dataDet = useSelector((state) => state.WeatherDetails);
  const obj = dataDet.WeatherDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherDetails(searchparams.get('cityName')));
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <div>

      <Button
        onClick={() => navigate(-1)}
        styles={(theme) => ({
          root: {
            border: 0,
            padding: 0,
            width: 40,
            fontSize: 14,
            '&:hover': {
              backgroundColor: theme.fn.darken('#4b4b49', 0.05),
            },
          },
        })}
      >
        <FaArrowLeft />
      </Button>
      {/* page content */}
      <div>

        <Text style={{
          fontSize: 32, fontWeight: 200, marginTop: 10, marginBottom: 30,
        }}
        >
          {obj.location.name}
          (
          {obj.location.country}
          )
        </Text>

        <Text style={{ fontSize: 24, fontWeight: 500, marginTop: 10 }}>
          Today&apos;s Highlights
        </Text>
        {/* highlights components */}
        <div style={{ display: 'flex' }}>
          {/* uv index */}
          <div
            style={{
              height: 200, width: 200, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', boxShadow: '0 3px 10px rgb(0 0 0 / 0.1)', margin: 5,
            }}
          >
            <Text>UV Index</Text>
            <RingProgress
              sections={[{ value: obj.current.uv, color: 'blue' }]}
              label={
                <Text color="blue" weight={700} align="center" size="xl">{obj.current.uv}</Text>
              }
            />
          </div>
          {/* wind status */}
          <div
            style={{
              height: 200, width: 200, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', boxShadow: '0 3px 10px rgb(0 0 0 / 0.1)', margin: 5,
            }}
          >
            <Text>Wind Status</Text>
            <Text style={{ fontWeight: 500, fontSize: 42, margin: '30px 0 30px 0' }}>
              {obj.current.wind_kph}
              <span style={{ fontSize: 18 }}>Km/h</span>
            </Text>
          </div>
          {/* Sunrise and Sunset */}
          <div
            style={{
              height: 200, width: 200, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', boxShadow: '0 3px 10px rgb(0 0 0 / 0.1)', margin: 5,
            }}
          >

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
          <div
            style={{
              height: 200, width: 200, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', boxShadow: '0 3px 10px rgb(0 0 0 / 0.1)', margin: 5,
            }}
          >
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
