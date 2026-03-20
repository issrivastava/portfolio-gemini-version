import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <h1 className="logo">Sagarika</h1>
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="http://sagarikasrivastava.com">Domain</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h2 className="fade-in">Sagarika Srivastava</h2>
        <p>Developer | Quantum Computing | IoT Explorer</p>
        <div className="status-badge">Available for Internships</div>
      </header>

      <section id="projects" className="projects-section">
        <h3>Featured Projects</h3>
        <div className="project-grid">
          <div className="project-card">
            <h4>MedRec</h4>
            <p>A medical record management system focused on privacy and accessibility.</p>
            <span className="tech-tag">React</span>
          </div>
          <div className="project-card">
            <h4>IoT Health Tracker</h4>
            <p>Real-time heart rate and temp monitoring using ESP32 & MAX30102.</p>
            <span className="tech-tag">C++ / Arduino</span>
          </div>
          <div className="project-card">
            <h4>Quantum Algorithms</h4>
            <p>Simulating quantum gates and circuits using Python and Qiskit.</p>
            <span className="tech-tag">Python</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Sagarika Srivastava | sagarikasrivastava.com</p>
      </footer>
    </div>
  );
}

export default App;