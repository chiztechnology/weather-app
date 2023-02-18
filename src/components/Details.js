import {
  Button, Divider, Image, RingProgress, Text,
} from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSun, FaMoon, FaArrowLeft } from 'react-icons/fa';

const Details = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const navigate = useNavigate();
  return (
    <div>

      <Button
        onClick={() => navigate(-1)}
        styles={(theme) => ({
          root: {
            // backgroundColor: '#000',
            border: 0,
            padding: 0,
            width: 40,
            // borderRadius: 22,
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
          London (United Kingdom)
        </Text>

        <Text style={{ fontSize: 24, fontWeight: 500, marginTop: 10 }}>This Week</Text>
        <div style={{ width: '100%', height: 160, display: 'flex' }}>
          {daysOfWeek.map((day) => (
            <div
              key={day}
              style={{
                height: 150, width: 140, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', boxShadow: '0 3px 10px rgb(0 0 0 / 0.1)', margin: 5,
              }}
            >
              <p style={{ margin: 0, fontSize: 18 }}>{day}</p>
              <Image
                radius="md"
                src="//cdn.weatherapi.com/weather/64x64/night/143.png"
                alt="Random unsplash image"
                style={{ width: 60, height: 'auto' }}
              />
              <p style={{ margin: 0, fontSize: 16 }}>18°C</p>
            </div>
          ))}

        </div>

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
              sections={[{ value: 40, color: 'blue' }]}
              label={
                <Text color="blue" weight={700} align="center" size="xl">40%</Text>
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
              7.8
              <span style={{ fontSize: 18 }}>Km/h</span>
            </Text>
          </div>
          {/* Sunrise and Sunset */}
          <div
            style={{
              height: 200, width: 200, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', boxShadow: '0 3px 10px rgb(0 0 0 / 0.1)', margin: 5,
            }}
          >

            <Text>Sunrise & Sunset</Text>

            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 30,
            }}
            >
              <FaSun color="orange" style={{ paddingRight: 5 }} size={24} />
              <Text>Sunrise : 06:30</Text>
            </div>
            <Divider size="md" />
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 30,
            }}
            >
              <FaMoon style={{ paddingRight: 5 }} size={24} />
              <Text> Sunset : 17:30  </Text>
            </div>
          </div>
          {/* Humidity */}
          <div
            style={{
              height: 200, width: 200, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', boxShadow: '0 3px 10px rgb(0 0 0 / 0.1)', margin: 5,
            }}
          >
            <Text>Humidity</Text>
            <Text style={{ fontWeight: 500, fontSize: 42, margin: '30px 0 30px 0' }}>
              80
              <span style={{ fontSize: 18 }}>%</span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
