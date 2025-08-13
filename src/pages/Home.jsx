import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {/* Hero Section */}
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h2 className="greeting">Hello<span className="wave">👋</span></h2>
            <h2 className="intro">My name is</h2>
            <h1 className="name">Eyob Teshome</h1>
            <p className="tagline">Software Engineer</p>
          </div>
          <div className="main__img--container">
            <div className="image-frame">
              <img src="/images/gradPic4.JPG" alt="Eyob Teshome graduation" id="main__img" />
              <div className="decoration-circle"></div>
              <div className="decoration-dots"></div>
            </div>
          </div>
        </div>
        <a href="#technical-skills" className="scroll-down">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>

      {/* Body Section of Page */}
      <div className="body" id="technical-skills">
        <div className="body__container">
          
          <div className="body__section body__technical">
            <div className="body__header">
              <h3>Technical Skills</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <i className="fa-brands fa-python"></i>
                <p>Python</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-database"></i>
                <p>SQL & RDBMS</p>
              </div>
              <div className="skill-card">
                <i className="fa-brands fa-php"></i>
                <p>PHP</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-code"></i>
                <p>C++</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-code-branch"></i>
                <p>Git</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-file-excel"></i>
                <p>Microsoft Office</p>
              </div>
            </div>
          </div>

          <div className="body__section body__soft_skills">
            <div className="body__header">
              <h3>Soft Skills</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <i className="fa-solid fa-users"></i>
                <p>Team Building</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-comments"></i>
                <p>Communication</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-lightbulb"></i>
                <p>Initiative</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-flag"></i>
                <p>Leadership</p>
              </div>
            </div>
          </div>

          <div className="body__section body__interests">
            <div className="body__header">
              <h3>Interests</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <i className="fa-solid fa-network-wired"></i>
                <p>Distributed Systems</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-code"></i>
                <p>Software Development</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-project-diagram"></i>
                <p>Algorithm Design</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-shield-alt"></i>
                <p>Cybersecurity</p>
              </div>
            </div>
          </div>

          <div className="body__section body__languages">
            <div className="body__header">
              <h3>Languages</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <p>English (Fluent)</p>
              </div>
              <div className="skill-card">
                <p>Amharic (Professionaly)</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Services Section */}
      <div className="services">
        <div className="services__container">
          <div className="services__card">
            <h2>My Projects</h2>
            <p>Click here to get there</p>
            <Link to="/projects" onClick={scrollToTop}>
              <button>View Projects</button>
            </Link>
          </div>
          <div className="services__card">
            <h2>About Me</h2>
            <p>Learn more about me at this link</p>
            <Link to="/about" onClick={scrollToTop}>
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;