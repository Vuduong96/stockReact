import React from 'react';
import Searched from './Searched';
import { Route, Routes, useLocation } from 'react-router-dom';

function Pages() {
    const location = useLocation();
  return (
    <Routes Location={location} key={location.pathname}>
        <Route path='/searched/:search' element={<Searched />} />
    </Routes>
  );
}

export default Pages;