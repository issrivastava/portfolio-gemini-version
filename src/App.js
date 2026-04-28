import React, { useEffect } from 'react';
import './App.css';

function App() {
  const emailAddress = "sagarikasrivastava46@gmail.com";

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

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []); // Added missing closing brackets and dependency array

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
      <header className="site-header">
        <div className="header-left">
          <h1>Sagarika Srivastava</h1>
          <p>Mumbai, India</p>
        </div>
        <div className="header-right-blob">
          <nav className="nav-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="content-yellow hero-page">
        <div className="content-inner reveal">
          <h2 className="welcome-text">Welcome to my website</h2>
          <div className="hero-button-container">
            <a href="https://github.com/issrivastava" target="_blank" rel="noreferrer" className="hero-btn">GitHub</a>
            <a href="https://www.linkedin.com/in/issrivastava46/" target="_blank" rel="noreferrer" className="hero-btn">LinkedIn</a>
            <button onClick={handleResumeDownload} className="hero-btn">Resume</button>
          </div>
        </div>
      </section>

      <section id="about" className="content-yellow">
        <div className="content-inner reveal">
          <h2 className="section-title">About Me</h2>
          <div className="white-content-box">
            <p>Hey! I'm a Computer Engineering student at Rizvi College of Engineering, Mumbai, who enjoys building cool things with code. I've worked on projects ranging from full-stack web apps using React and FastAPI to IoT systems and machine learning models.</p>
          </div>
        </div>
      </section>

      <section id="education" className="content-yellow">
        <div className="content-inner reveal">
          <h2 className="section-title">Education</h2>
          <div className="white-content-box education-card">
            <div className="education-header">
              <h3>Rizvi College of Engineering, Bandra West, Mumbai, India</h3>
              <span className="education-date">2023 — 2027</span>
            </div>
            <p>Bachelor of Engineering (B.E) in Computer Engineering</p>
            <p>CGPA: 7.67</p>
          </div>
          <div className="white-content-box education-card" style={{ marginTop: '30px' }}>
            <div className="education-header">
              <h3>St. Joseph's High School (CBSE), Navi Mumbai, India</h3>
              <span className="education-date">2009 — 2020</span>
            </div>
            <p>10th Grade: 92.2% </p>
          </div>
        </div>
      </section>

      <section id="experience" className="content-yellow">
        <div className="content-inner reveal">
          <h2 className="section-title">Experience</h2>
          <div className="white-content-box education-card">
            <div className="education-header">
              <h3>Machine Learning Intern</h3>
              <span className="education-date">May 2026 — Present</span>
            </div>
            <p className="institution">testAIng.com · Internship</p>
            <ul className="project-list" style={{ marginTop: '20px' }}>
              <li>Assisting in the development and optimization of ML models.</li>
              <li>Collaborating on data preprocessing and feature engineering tasks.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="content-yellow">
        <div className="content-inner reveal">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h4>Languages</h4>
              <div className="skill-badges">
                <span>Python</span> <span>C++</span> <span>C#</span> <span>JAVA</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Web Development</h4>
              <div className="skill-badges">
                <span>React</span> <span>FastAPI</span> <span>HTML5 & CSS3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="content-yellow">
        <div className="content-inner reveal">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card reveal">
              <h3>MedRec – Medical Management</h3>
              <p className="tech-text">Technologies: React, FastAPI, Python, SQL </p>
            </div>
            {/* Add other project cards here */}
          </div>
        </div>
      </section>

      <section id="contact" className="content-yellow">
        <div className="content-inner reveal">
          <h2 className="section-title">Contact Me</h2>
          <div className="white-content-box contact-box">
            <p>Email: {emailAddress}</p>
            <button onClick={() => window.location.href = `mailto:${emailAddress}`} className="message-btn">Message</button>
          </div>
        </div>
      </section>

      {/* Footer moved inside the component return */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-links-container">
            <a href="https://github.com/issrivastava" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
            <a href="https://www.linkedin.com/in/issrivastava46/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          </div>
          <p className="footer-credit">© 2026 Sagarika Srivastava</p>
        </div>
      </footer>
    </div>
  );
}

export default App;