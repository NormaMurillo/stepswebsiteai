import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../ai/recommendationService';
import '../styles/phase.css';

export default function Start() {
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    getRecommendations('start').then(setRecs);
  }, []);

  return (
    <section id="start" className="phase">
      <h2>Start</h2>
      <p>Admisión y desarrollo de habilidades básicas.</p>
      <ul>
        {recs.map((r,i) => <li key={i}>{r}</li>)}
      </ul>
    </section>
  );
}
