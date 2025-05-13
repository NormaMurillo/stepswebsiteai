// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import CareerGoals from './Views/CareerGoals';
import AcademicProgress from './Views/AcademicProgress';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/career-goals" replace />} />
          <Route path="/career-goals" element={<CareerGoals />} />
          <Route path="/academic-progress" element={<AcademicProgress />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;