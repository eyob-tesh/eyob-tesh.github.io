import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {/* Hero Section */}
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h2 className="greeting">Hey<span className="wave">👋</span></h2>
            <h2 className="intro">All About Me</h2>
            <h1 className="name">Eyob Teshome</h1>
            <p className="tagline">Software Engineer & Problem Solver</p>
          </div>
          <div className="main__img--container">
            <div className="image-frame">
              <img src="/images/personalPic.jpg" alt="Eyob Teshome portrait" id="main__img" />
              <div className="decoration-circle"></div>
              <div className="decoration-dots"></div>
            </div>
          </div>
        </div>
        <a href="#about-page" className="scroll-down">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>

      {/* About Information Section */}
      <div className="body" id="about-page">
        <div className="body__container">
          <div className="body__section body__about">
            <div className="body__header">
              <h3>Get to Know Me</h3>
            </div>
            <p>When I'm not coding, I love spending quality time with my family and friends. You'll often find me playing soccer, hitting the gym, or unwinding with casual video games. I'm also passionate about exploring new technologies, traveling to new places, and diving into a good sci-fi book.</p>
          </div>

          <div className="body__section body__interests">
            <div className="body__header">
              <h3>Interests</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <i className="fa-solid fa-people-group"></i>
                <p>Family & Friends</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-dumbbell"></i>
                <p>Fitness</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-futbol"></i>
                <p>Soccer</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-gamepad"></i>
                <p>Casual Games</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-plane"></i>
                <p>Traveling</p>
              </div>
              <div className="skill-card">
                <i className="fa-solid fa-flask"></i>
                <p>New Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services">
        <h1>Explore More</h1>
        <div className="services__container">
          <div className="services__card">
            <h2>My Projects</h2>
            <p>Click here to get a better look at them</p>
            <Link to="/projects" onClick={scrollToTop}>
              <button>View Projects</button>
            </Link>
          </div>
          <div className="services__card">
            <h2>My Resume</h2>
            <p>Click here to take a closer look at my resume</p>
            <Link to="/resume" onClick={scrollToTop}>
              <button>View Resume</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;