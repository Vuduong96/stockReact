import React from 'react';
import Searched from './Searched';
import LineChart from './LineChart';
import { Route, Routes, useLocation } from 'react-router-dom';

function Pages() {
    const location = useLocation();
  return (
    <Routes Location={location} key={location.pathname}>
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/stock/:symbol' element={<LineChart />} />
    </Routes>
  );
}

export default Pages;