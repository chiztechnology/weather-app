import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppShell, Navbar, Header } from '@mantine/core';
// import Navbar from './Navbar';
import Cities from './Cities';
import Details from './Details';
import LeftNavbar from './LeftNavbar';
import MenuBar from './MenuBar';

const Weather = () => (
  <BrowserRouter>
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height="100vh" p="xs"><LeftNavbar /></Navbar>}
      header={<Header height={60} p="xs"><MenuBar /></Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
      <Routes>
        <Route path="/" element={<Cities />} />
        <Route path="/details" element={<Details />} />
      </Routes>

    </AppShell>
  </BrowserRouter>
);

export default Weather;
