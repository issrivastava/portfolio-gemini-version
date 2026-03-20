import React from 'react';
import './App.css';

function App() {
  const emailAddress = "sagarikasrivastava46@gmail.com";

  const handleResumeDownload = () => {
    // This looks for 'resume.pdf' in your project's 'public' folder
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/resume.pdf'; 
    link.download = 'Sagarika_Srivastava_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openEmailPrompt = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="main-container">
      {/* Header with Name and Nav Blob */}
      <header className="site-header">
        <div className="header-left">
          <h1>Sagarika Srivastava</h1>
          <p>Mumbai, India</p>
        </div>
        <div className="header-right-blob">
          <nav className="nav-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Page 1: Home */}
      <section id="home" className="content-yellow hero-page">
        <div className="content-inner">
          <h2 className="welcome-text">Welcome to my website</h2>
          <div className="hero-button-container">
            <a href="https://github.com/issrivastava" target="_blank" rel="noreferrer" className="hero-btn">GitHub</a>
            <a href="https://www.linkedin.com/in/issrivastava46/" target="_blank" rel="noreferrer" className="hero-btn">LinkedIn</a>
            <button onClick={handleResumeDownload} className="hero-btn">Resume</button>
          </div>
        </div>
      </section>

      {/* Page 2: About Me */}
      <section id="about" className="content-yellow">
        <div className="content-inner">
          <h2 className="section-title">About Me</h2>
          <div className="white-content-box">
            <p>Hey! I'm a Computer Engineering student at Rizvi College of Engineering, Mumbai, who enjoys building cool things with code[cite: 12].</p>
            <p>I've worked on projects ranging from full-stack web apps using React and FastAPI to IoT systems and machine learning models[cite: 13].</p>
            <p>I'm always curious to learn new tech and currently looking for opportunities to grow as a developer and work on impactful projects[cite: 14].</p>
          </div>
        </div>
      </section>

      {/* Page 3: Projects */}
      <section id="projects" className="content-yellow">
        <div className="content-inner">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>MedRec – Medical Record Management System</h3>
              <p>A full-stack web app to securely store and manage medical records[cite: 17]. Built REST APIs with FastAPI and used React for a clean frontend[cite: 18].</p>
            </div>
            <div className="project-card">
              <h3>AirSential – IoT Air Quality Monitoring System</h3>
              <p>An Arduino-based system that detects hazardous gases and sends real-time alerts[cite: 20]. Selected for a University of Mumbai Ideathon[cite: 21].</p>
            </div>
            <div className="project-card">
              <h3>DesertDino Dash – 2D Unity Game</h3>
              <p>A fun 2D game built in Unity with player movement, obstacle mechanics, and collision detection[cite: 24, 25].</p>
            </div>
          </div>
        </div>
      </section>

      {/* Page 4: Contact Me */}
      <section id="contact" className="content-yellow">
        <div className="content-inner">
          <h2 className="section-title">Contact Me</h2>
          <div className="white-content-box contact-box">
            <div className="contact-details">
              <p>Email: {emailAddress}</p>
              <p>LinkedIn: linkedin.com/in/issrivastava46</p>
              <p>Phone: +91 9284510103</p>
            </div>
            <button onClick={openEmailPrompt} className="message-btn">Message</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;