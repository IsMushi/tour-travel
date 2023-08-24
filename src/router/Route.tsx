// src/App.tsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Tours from '../pages/tours';
import Home from '../pages/home';
import Register from '../pages/register';
import Login from '../pages/login';
import ToursPage from '../pages/tours';
import Notfound from '../pages/notfound';
import TourDetails from '../pages/tourDetails';
import ThankYou from '../pages/thank-you';
import About from '../pages/About';

const Routing: React.FC = () => {
  return (
      <Routes>
        <Route path="/" index element={<Home/>}  />
        <Route path="/tours" element={<ToursPage/>}  />
        <Route path="/tours/:id" element={<TourDetails/>}  />
        <Route path="/tours/search" element={<Tours/>}  />
        <Route path="/register" element={<Register/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/thank-you" element={<ThankYou/>}  />
        <Route path="/login" element={<Login />}  />
        <Route path="*" element={<Notfound />} />
      </Routes>
  );
};

export default Routing;
