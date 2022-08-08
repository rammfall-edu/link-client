import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register from './pages/Register';
import { ROUTES } from './constants';
import Header from './components/Header';

const Application = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
    </div>
  );
};

export default Application;
