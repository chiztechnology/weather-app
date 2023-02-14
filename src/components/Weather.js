import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Cities from './Cities';
import Details from './Details';

const Weather = () => {
  <BrowserRouter>
    <div className="app-body">
      <Navbar />
      {/* routes */}
      <Routes>
        <Route path="/" element={<Cities />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  </BrowserRouter>;
};

export default Weather;
