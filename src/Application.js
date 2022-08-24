import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register from './pages/Register';
import { ROUTES } from './constants';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Link from './pages/Link';

const Application = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.ROOT} element={<Dashboard />} />
        <Route path={`${ROUTES.LINK}:hash`} element={<Link />} />
      </Routes>
    </div>
  );
};

export default Application;
