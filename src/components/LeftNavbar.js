import React from 'react';
import {
  Image, Divider, BackgroundImage, Center, Text, Box,
} from '@mantine/core';
import './leftnavbar.css';

const LeftNavbar = () => {
  const temperature = '12°C';
  return (
    <div className="main">
      <Image
        radius="md"
        src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
        alt="Random unsplash image"
      />
      <p className="temperature-title">{temperature}</p>
      <p>Monday, 12/2/2023</p>
      <Divider my="xs" label="Other details" labelPosition="center" variant="solid" />
      <div>
        {/* wather stat */}
        <div className="weather-stat">
          <Image
            radius="md"
            src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
            alt="Random unsplash image"
            style={{ width: 20, height: 'auto' }}
          />
          <h3>Mostly Cloudy</h3>
        </div>
        {/* chance of rain */}
        <div className="chance-of-rain">
          <Image
            radius="md"
            src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
            alt="Random unsplash image"
            style={{ width: 20, height: 'auto' }}
          />
          <h3>Rain - 40%</h3>
        </div>
      </div>

      <Box sx={{ width: 250, marginTop: 20 }} mx="auto">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          radius="sm"
        >
          <Center p="md">
            <Text color="#fff" size={22}>
              New York
            </Text>
          </Center>
        </BackgroundImage>
      </Box>

    </div>
  );
};

export default LeftNavbar;
