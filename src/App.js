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
import AIProfile from "./components/AIProfile";

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
          <Route path="/ia" element={<AIProfile />} />
          <Route path="/AIProfile" element={<AIProfile />} />
          <Route path="/AIProfile/:userId" element={<AIProfile />} />
          <Route path="/AIProfile/:userId/:nombre" element={<AIProfile />} />
          <Route path="/AIProfile/:userId/:nombre/:carrera" element={<AIProfile />} />
          <Route path="/AIProfile/:userId/:nombre/:carrera/:cursos" element={<AIProfile />} />
          <Route path="/AIProfile/:userId/:nombre/:carrera/:cursos/:grupos" element={<AIProfile />} />
          <Route path="/AIProfile/:userId/:nombre/:carrera/:cursos/:grupos/:proyectos" element={<AIProfile />} />
          <Route path="/AIProfile/:userId/:nombre/:carrera/:cursos/:grupos/:proyectos/:suggestions" element={<AIProfile />} />
          <Route path="/AIProfile/:userId/:nombre/:carrera/:cursos/:grupos/:proyectos/:suggestions/:loading" element={<AIProfile />} />
          <Route path="/AIProfile/:userId/:nombre/:carrera/:cursos/:grupos/:proyectos/:suggestions/:loading/:error" element={<AIProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
