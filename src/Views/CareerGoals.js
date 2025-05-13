// src/Views/CareerGoals.js
import React, { useState } from 'react';
import './CareerGoals.css';

const CareerGoals = () => {
  const [goals, setGoals] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Career goals saved!');
  };

  return (
    <div className="cafe-homepage">
      <h1>Career Goals</h1>
      <p>Describe your aspirations and future career objectives.</p>
      <form className="career-form" onSubmit={handleSubmit}>
        <label>
          Career Goals:
          <textarea
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            placeholder="I want to become a digital transformation leader..."
          />
        </label>
        <button className="cafe-button" type="submit">Save</button>
      </form>
    </div>
  );
};

export default CareerGoals;
