import React from 'react';
import '.Styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar--brand">STEPS</div>
      <ul className="navbar--links">
        {['Start','Transform','Excel','Professionalize','Success'].map(phase => (
          <li key={phase}>
            <a href={`#${phase.toLowerCase()}`}>{phase}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
