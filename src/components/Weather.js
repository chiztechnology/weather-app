import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AppShell, Navbar, Header, Burger, MediaQuery,
} from '@mantine/core';
// import Navbar from './Navbar';
import Cities from './Cities';
import Details from './Details';
import LeftNavbar from './LeftNavbar';
import MenuBar from './MenuBar';

const Weather = () => {
  const [opened, setOpened] = useState(false);
  return (
    <BrowserRouter>
      <AppShell
        padding="md"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<Navbar height="100vh" p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}><LeftNavbar /></Navbar>}
        // header={<Header height={60} p="xs"><MenuBar /></Header>}
        header={
          (
            <Header height={{ base: 50, md: 70 }} p="md">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    mr="xl"
                  />
                </MediaQuery>

                <MenuBar />
              </div>
            </Header>
          )
        }
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
};

export default Weather;
