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
              padding: 0,
              width: 40,
              borderRadius: 22,
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
              marginLeft: 8,
              marginRight: 20,
              border: 0,
              padding: 0,
              width: 40,
              borderRadius: 22,
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
