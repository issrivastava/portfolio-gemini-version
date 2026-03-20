import React, { useEffect } from 'react';
import './App.css';

function App() {
  const emailAddress = "sagarikasrivastava46@gmail.com"; [cite: 30]

  useEffect(() => {
    // Reveal animation logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
      cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
    });
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/resume.pdf'; 
    link.download = 'Sagarika_Srivastava_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="main-container">
      <div className="custom-cursor"></div>
      
      <header className="site-header">
        <div className="header-left">
          <h1>Sagarika Srivastava</h1> [cite: 8]
          <p>Mumbai, India</p> [cite: 9]
        </div>
        <div className="header-right-blob">
          <nav className="nav-menu">
            <a href="#home">Home</a> [cite: 10]
            <a href="#about">About</a> [cite: 10]
            <a href="#projects">Projects</a> [cite: 10]
            <a href="#contact">Contact</a> [cite: 10]
          </nav>
        </div>
      </header>

      <section id="home" className="content-yellow hero-page">
        <div className="content-inner reveal">
          <h2 className="welcome-text">Welcome to my website</h2> [cite: 4]
          <div className="hero-button-container">
            <a href="https://github.com/issrivastava" target="_blank" rel="noreferrer" className="hero-btn">GitHub</a>
            <a href="https://www.linkedin.com/in/issrivastava46/" target="_blank" rel="noreferrer" className="hero-btn">LinkedIn</a>
            <button onClick={handleResumeDownload} className="hero-btn">Resume</button> 
          </div>
        </div>
      </section>

      <section id="about" className="content-yellow">
        <div className="content-inner reveal">
          <h2 className="section-title">About Me</h2> [cite: 11]
          <div className="white-content-box">
            <p>Hey! I'm a Computer Engineering student at Rizvi College of Engineering, Mumbai, who enjoys building cool things with code.I've worked on projects ranging from full-stack web apps using React and FastAPI to IoT systems and machine learning models.I'm always curious to learn new tech and currently looking for opportunities to grow as a developer and work on impactful projects.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="content-yellow">
        <div className="content-inner reveal">
          <h2 className="section-title">Projects</h2> [cite: 19]
          <div className="projects-grid">
            <div className="project-card">
              <h3>MedRec</h3> [cite: 17]
              <p>Medical Record Management System using React and FastAPI.</p>
            </div>
            <div className="project-card">
              <h3>AirSential</h3> [cite: 20]
              <p>IoT Air Quality Monitoring System selected for a University of Mumbai Ideathon.</p>
            </div>
            <div className="project-card">
              <h3>DesertDino Dash</h3> [cite: 24]
              <p>2D Unity Game with player movement and obstacle mechanics.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="content-yellow">
        <div className="content-inner reveal">
          <h2 className="section-title">Contact Me</h2> [cite: 28]
          <div className="white-content-box contact-box">
            <div className="contact-details">
              <p>Email: {emailAddress}</p> [cite: 30]
              <p>Phone: +91 9284510103</p> [cite: 30]
            </div>
            <button onClick={() => window.location.href = `mailto:${emailAddress}`} className="message-btn">Message</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;