import React from 'react';
import Searched from './Searched';
import LineChart from './LineChart';
import DailyPrice from './DailyPrice';
import WeeklyPrice from './WeeklyPrice';
import MonthlyPrice from './MonthlyPrice';
import { Route, Routes, useLocation } from 'react-router-dom';

function Pages() {
    const location = useLocation();
  return (
    <Routes Location={location} key={location.pathname}>
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/stock/:symbol' element={<LineChart />} />
      <Route path='/daily/:symbol/:interval' element={<DailyPrice />} />
      <Route path='/weekly/:symbol/:interval' element={<WeeklyPrice />} />
      <Route path='/monthly/:symbol/:interval' element={<MonthlyPrice />} />
    </Routes>
  );
}

export default Pages;