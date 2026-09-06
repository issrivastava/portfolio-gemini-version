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
  }, []); // Correctly closed useEffect

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
            <a href="https://medium.com/@issrivastava" target="_blank" rel="noreferrer" className="hero-btn">Medium</a>
            <a href="https://www.linkedin.com/in/issrivastava46/" target="_blank" rel="noreferrer" className="hero-btn">LinkedIn</a>
            <button onClick={handleResumeDownload} className="hero-btn">Resume</button>
          </div>
        </div>
      </section>

      <section id="about" className="content-yellow">
        <div className="content-inner reveal">
          <h2 className="section-title">About Me</h2>
          <div className="white-content-box">
            <p>Hey! I'm a Computer Engineering student at Rizvi College of Engineering, Mumbai, who enjoys building cool things with code. I've worked on projects ranging from full-stack web apps using React and FastAPI to IoT systems and machine learning models. I'm always curious to learn new tech and currently looking for opportunities to grow as a developer and work on impactful projects.</p>
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
            <p>CGPA: 7.97</p>
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
          <span>Python</span>
          <span>C++</span>
          <span>Dart</span>
          <span>JavaScript</span>
          <span>C#</span>
          <span>Java</span>
          <span>HTML5 & CSS3</span>
        </div>
      </div>

      <div className="skill-category">
        <h4>Web & Mobile Development</h4>
        <div className="skill-badges">
          <span>React</span>
          <span>FastAPI</span>
          <span>Flutter</span>
          <span>RESTful APIs</span>
        </div>
      </div>

      <div className="skill-category">
        <h4>AI, ML & Computer Vision</h4>
        <div className="skill-badges">
          <span>OpenCV</span>
          <span>MediaPipe</span>
          <span>Machine Learning</span>
        </div>
      </div>

      <div className="skill-category">
        <h4>Databases</h4>
        <div className="skill-badges">
          <span>PostgreSQL</span>
          <span>SQL</span>
        </div>
      </div>

      <div className="skill-category">
        <h4>IoT & Embedded Systems</h4>
        <div className="skill-badges">
          <span>Arduino</span>
          <span>ESP32</span>
          <span>Sensor Interfacing</span>
          <span>Blynk</span>
        </div>
      </div>

      <div className="skill-category">
        <h4>Tools & Platforms</h4>
        <div className="skill-badges">
          <span>Git & GitHub</span>
          <span>VS Code</span>
          <span>Android Studio</span>
          <span>Unity</span>
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
              <h3>DesertDinoDash - D3- 2D Unity Game</h3>
              <ul className="project-list">
                <li>Developed a 2D game in Unity featuring collision detection, obstacle behavior, and level progression</li>
                <li>Implemented player movement mechanics, scoring system, and increasing difficulty across levels</li>
              </ul>
              <p className="tech-text">Technologies: Unity, C# </p>
            </div>

            <div className="project-card reveal">
              <h3>MedRec – Medical Record Management System</h3>
              <ul className="project-list">
                <li>Developed a secure full-stack medical record management system using React and FastAPI</li>
                <li>Designed RESTful APIs for efficient data storage and retrieval</li>
                <li>Implemented data visualization to analyze long-term health trends</li>
                <li>Improved record accessibility and reduced manual tracking</li>
              </ul>
              <p className="tech-text">Technologies: React, FastAPI, Python, SQL </p>
            </div>

            <div className="project-card reveal">
              <h3>AirSential – IoT Air Quality Monitoring System</h3>
              <ul className="project-list">
                <li>Designed and built an IoT-based air quality monitoring system using Arduino and C++</li>
                <li>Integrated gas sensors to detect hazardous leaks and trigger real-time alerts</li>
                <li>Improved response time for unsafe air conditions through automated notifications</li>
                <li>Selected for IDEATHON conducted by the University of Mumbai for innovative IoT solution</li>
              </ul>
              <p className="tech-text">Technologies: Arduino, C++, Gas Sensors, IoT</p>
            </div>

            <div className="project-card reveal">
              <h3>Customer Segmentation using K-Means Clustering</h3>
              <ul className="project-list">
                <li>Implemented K-Means clustering to segment customers based on behavioral data</li>
                <li>Identified distinct customer groups to support targeted marketing strategies</li>
                <li>Visualized clustering results for improved business insights</li>
              </ul>
              <p className="tech-text">Technologies: TypeScript</p>
            </div>

            <div className="project-card reveal">
              <h3>RoboGrip: Vision-Based Gesture Control Robotic Arm</h3>
              <ul className="project-list">
                <li>Engineered a real-time, vision-based Human–Robot Interaction (HRI) system to manipulate a multi-DOF robotic arm using dynamic and static hand gestures.</li>
                <li>Integrated safety-critical layers including temporal validation, confidence scoring thresholds, workspace boundaries, and an emergency failsafe to prevent misfires.</li>
                <li>Implemented hand landmark detection and ML-based classification to map gestures to motor commands (movement, rotation, gripping, release).</li>
                <li>Interfaced host vision pipeline with a microcontroller via serial communication to achieve low-latency actuation and high command execution accuracy across varied lighting environments.</li>
              </ul>
              <p className="tech-text">Technologies: Python, OpenCV, MediaPipe, Machine Learning, Microcontrollers (Arduino/ESP32), Serial Communication, Servo Actuators.</p>
            </div>

            <div className="project-card reveal">
              <h3>REFIN - Full-Stack Recipe Management System</h3>
              <ul className="project-list">
                <li>A cross-platform mobile application built with Flutter for the UI and FastAPI with PostgreSQL for the backend.</li>
                <li>Features include real-time search, recipe categorization, and a favorites system.</li>
              </ul>
              <p className="tech-text">Technologies: Flutter, PostgreSQL, FastAPI </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="content-yellow">
        <div className="content-inner reveal">
          <h2 className="section-title">Contact Me</h2>
          <div className="white-content-box contact-box">
            <div className="contact-details">
              <p>Email: {emailAddress}</p>
              <p>Phone: +91 9284510103</p>
            </div>
            <button onClick={() => window.location.href = `mailto:${emailAddress}`} className="message-btn">Message</button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-links-container">
            <a href="https://github.com/issrivastava" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
            <a href="https://medium.com/@issrivastava" target="_blank" rel="noreferrer" className="footer-link">Medium</a>
            <a href="https://www.linkedin.com/in/issrivastava46/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
            <a href={`mailto:${emailAddress}`} className="footer-link">Email</a>
          </div>
          <p className="footer-credit">© 2026 Sagarika Srivastava</p>
        </div>
      </footer>
    </div>
  );
}

export default App;