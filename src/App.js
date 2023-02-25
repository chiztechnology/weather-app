import React from 'react';
import { MantineProvider } from '@mantine/core';
import Weather from './components/Weather';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Weather />
    </MantineProvider>
  );
}

export default App;
