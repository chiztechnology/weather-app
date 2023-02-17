import {
  Button, Image, ScrollArea, Text,
} from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();
  return (
    <div>

      <Button
        onClick={() => navigate(-1)}
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
        Back
      </Button>
      {/* page content */}
      <div>
        <Text style={{ fontSize: 32 }}>This Week</Text>
        <ScrollArea style={{ width: '100%', height: 160 }}>
          <div style={{
            height: 200, width: 100, backgroundColor: '#efefef', borderRadius: 3, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column',
          }}
          >
            <p style={{ margin: 0 }}>Sunday</p>
            <Image
              radius="md"
              src="//cdn.weatherapi.com/weather/64x64/night/143.png"
              alt="Random unsplash image"
              style={{ width: 30, height: 'auto' }}
            />
            <p style={{ margin: 0 }}>18-c</p>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Details;
