import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../ai/recommendationService';
import '../styles/phase.css';

export default function Transform() {
  const phase = 'transform';
  const [recs, setRecs] = useState([]);
  const [paths, setPaths] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getRecommendations(phase).then(setRecs);      // fetch AI recs :contentReference[oaicite:1]{index=1}
    getCareerPaths(phase).then(setPaths);         // fetch career paths
    getResources(phase).then(setResources);       // fetch learning resources
  }, []);

  return (
    <section id="transform" className="phase">
      <h2>Transform</h2>
      <p>Retos reales, experiencias interdisciplinarias y prácticas profesionales.</p>
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
