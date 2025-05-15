import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../ai/recommendationService';
import '../styles/phase.css';

export default function Excel() {
  const phase = 'excel';
  const [recs, setRecs] = useState([]);
  const [paths, setPaths] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getRecommendations(phase).then(setRecs);
    getCareerPaths(phase).then(setPaths);
    getResources(phase).then(setResources);
  }, []);

  return (
    <section id="excel" className="phase">
      <h2>Excel</h2>
      <p>Certificaciones profesionales y transición al mercado laboral.</p>
      <div className="phase-section">
        <h3>Orientación por IA</h3>
        <ul>{recs.map((r,i) => <li key={i}>{r}</li>)}</ul>
      </div>
      <div className="phase-section">
        <h3>Rutas Profesionales</h3>
        <ul>{paths.map((p,i) => <li key={i}>{p}</li>)}</ul>
      </div>
      <div className="phase-section">
        <h3>Recursos Recomendados</h3>
        <ul>{resources.map((r,i) => <li key={i}>{r}</li>)}</ul>
      </div>
    </section>
  );
}
