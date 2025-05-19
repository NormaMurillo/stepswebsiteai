// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Start from './phases/Start';
import Transform from './phases/Transform';
import Excel from './phases/Excel';
import Professionalize from './phases/Professionalize';
import Success from './phases/Success';
import ProfileRecommendations from './components/profileRecommendations';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/transform" element={<Transform />} />
          <Route path="/excel" element={<Excel />} />
          <Route path="/professionalize" element={<Professionalize />} />
          <Route path="/success" element={<Success />} />
          <Route path="/perfilamiento con ai" element={<ProfileRecommendations />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
