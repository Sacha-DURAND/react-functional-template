import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import MentionsLegales from './pages/MentionsLegales/MentionsLegales.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

export default function Routeur() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}