import React from 'react';
import './App.css';

function App() {
  const emailAddress = "sagarikasrivastava46@gmail.com";

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/resume.pdf'; 
    link.download = 'Sagarika_Srivastava_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openEmailPrompt = () => {
    window.location.href = "mailto:" + emailAddress;
  };

  return (
    <div className="portfolio-container">
      {/* Page 1: Hero Section */}
      <header className="hero-section">
        <div className="sunflower-top">🌻</div>
        <h1>Welcome to my website</h1>
        <div className="hero-buttons">
          <a href="https://github.com/issrivastava" target="_blank" rel="noreferrer" className="btn">GitHub</a>
          <a href="https://www.linkedin.com/in/issrivastava46/" target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
          <button onClick={handleResumeDownload} className="btn">Resume</button>
        </div>
        <div className="sunflower-bottom">🌻</div>
      </header>

      {/* Navigation Bar */}
      <nav className="sticky-nav">
        <div className="nav-info">
          <span className="name">Sagarika Srivastava</span>
          <span className="location">Mumbai, India</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Page 2: About Me */}
      <section id="about" className="section about-section">
        <h2>About Me</h2>
        <p>Hey! I'm a Computer Engineering student at Rizvi College of Engineering, Mumbai, who enjoys building cool things with code. [cite: 12]</p>
        <p>I've worked on projects ranging from full-stack web apps using React and FastAPI to IoT systems and machine learning models. [cite: 13]</p>
      </section>

      {/* Page 3: Projects */}
      <section id="projects" className="section projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>MedRec</h3>
            <p>Medical Record Management System using React and FastAPI. [cite: 17, 18]</p>
          </div>
          <div className="project-card">
            <h3>AirSential</h3>
            <p>IoT Air Quality Monitoring System selected for a University of Mumbai Ideathon. [cite: 20, 21]</p>
          </div>
          <div className="project-card">
            <h3>DesertDino Dash</h3>
            <p>A fun 2D game built in Unity with engaging obstacle mechanics. [cite: 24, 25]</p>
          </div>
        </div>
      </section>

      {/* Page 4: Contact */}
      <section id="contact" className="section contact-section">
        <h2>Contact Me</h2>
        <div className="contact-details">
          <p>Email: {emailAddress}</p>
          <p>LinkedIn: linkedin.com/in/issrivastava46 </p>
          <p>Phone: +91 9284510103 </p>
        </div>
        <div className="message-box">
          <button onClick={openEmailPrompt} className="send-btn">Send me a message</button>
        </div>
      </section>
    </div>
  );
}

export default App;