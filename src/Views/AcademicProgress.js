// src/Views/AcademicProgress.js
import React, { useState } from 'react';
import './AcademicProgress.css';

const AcademicProgress = () => {
  const [courses, setCourses] = useState('');
  const [milestones, setMilestones] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Academic progress saved!');
  };

  return (
    <div className="cafe-homepage">
      <h1>Academic Progress</h1>
      <p>Keep track of courses and major milestones.</p>
      <form className="progress-form" onSubmit={handleSubmit}>
        <label>
          Completed Courses:
          <textarea
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
            placeholder="AI Fundamentals, React Development..."
          />
        </label>
        <label>
          Milestones Achieved:
          <textarea
            value={milestones}
            onChange={(e) => setMilestones(e.target.value)}
            placeholder="Built first web app, completed internship..."
          />
        </label>
        <button className="cafe-button" type="submit">Save</button>
      </form>
    </div>
  );
};

export default AcademicProgress;

