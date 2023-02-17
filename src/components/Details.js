import { Button } from '@mantine/core';
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

      <p>Details view of the app</p>
    </div>
  );
};

export default Details;
