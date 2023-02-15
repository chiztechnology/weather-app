import React from 'react';
import { Button } from '@mantine/core';
import './menubar.css';

const MenuBar = () => {
  const degreesCelsius = '°C';
  const degreesFareneit = '°F';
  return (
    <div className="main-app">
      <p className="logo">Weather App</p>
      {/* config panel */}
      <div className="config-panel">
        <Button
          styles={(theme) => ({
            root: {
              backgroundColor: '#000',
              border: 0,
              height: 42,
              paddingLeft: 20,
              paddingRight: 20,
              fontSize: 14,
              '&:hover': {
                backgroundColor: theme.fn.darken('#4b4b49', 0.05),
              },
            },
          })}
        >
          {degreesCelsius}
        </Button>
        <Button
          styles={(theme) => ({
            root: {
              backgroundColor: '#eee',
              border: 0,
              height: 42,
              marginLeft: 5,
              paddingLeft: 20,
              paddingRight: 20,
              fontSize: 14,
              color: '#000',
              '&:hover': {
                backgroundColor: theme.fn.darken('#cfcfce', 0.05),
              },
            },
          })}
        >
          {degreesFareneit}
        </Button>
      </div>
    </div>
  );
};

export default MenuBar;
