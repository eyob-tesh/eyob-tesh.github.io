import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {/* Hero Section */}
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h2 className="greeting">Let's Connect<span className="wave">👋</span></h2>
            <h2 className="intro">Get in Touch</h2>
            <h1 className="name">Contact Me</h1>
            <p className="tagline">I'd love to hear from you!</p>
          </div>
          <div className="main__img--container">
            <div className="image-frame">
              <img src="/images/gradPic3.JPG" alt="Eyob Teshome graduation" id="main__img" />
              <div className="decoration-circle"></div>
              <div className="decoration-dots"></div>
            </div>
          </div>
        </div>
        <a href="#contact-details" className="scroll-down">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>

      {/* Contact Information Section */}
      <div className="body" id="contact-details">
        <div className="body__container">
          
          <div className="body__section body__contact">
            <div className="body__header">
              <h3>Contact Information</h3>
            </div>
            <div className="contact-info-grid">
              <div className="contact-info-card">
                <i className="fa-solid fa-envelope fa-3x"></i>
                <h4>Email</h4>
                <p>berhanemeskel68@gmail.com</p>
                <a href="mailto:berhanemeskel68@gmail.com" className="contact-link">Send Email</a>
              </div>
              <div className="contact-info-card">
                <i className="fa-solid fa-phone fa-3x"></i>
                <h4>Phone</h4>
                <p>(916) 546-0992</p>
                <a href="tel:+19165460992" className="contact-link">Call Now</a>
              </div>
              <div className="contact-info-card">
                <i className="fa-solid fa-map-marker-alt fa-3x"></i>
                <h4>Location</h4>
                <p>Sacramento, California</p>
              </div>
            </div>
          </div>

          <div className="body__section body__social">
            <div className="body__header">
              <h3>Connect on Social Media</h3>
            </div>
            <div className="social-grid">
              <div className="social-card">
                <i className="fab fa-linkedin fa-4x"></i>
                <h4>LinkedIn</h4>
                <p>Professional Network</p>
                <a href="https://linkedin.com/in/eyobte" className="contact-link" target="_blank" rel="noopener noreferrer">Connect</a>
              </div>
              <div className="social-card">
                <i className="fab fa-github fa-4x"></i>
                <h4>GitHub</h4>
                <p>Code Repositories</p>
                <a href="https://github.com/eyob-tesh" className="contact-link" target="_blank" rel="noopener noreferrer">Follow</a>
              </div>
              <div className="social-card">
                <i className="fab fa-instagram fa-4x"></i>
                <h4>Instagram</h4>
                <p>@eyob.ts</p>
                <a href="https://instagram.com/eyob.ts" className="contact-link" target="_blank" rel="noopener noreferrer">Follow</a>
              </div>
              <div className="social-card">
                <i className="fab fa-facebook fa-4x"></i>
                <h4>Facebook</h4>
                <p>Personal Profile</p>
                <a href="https://facebook.com" className="contact-link" target="_blank" rel="noopener noreferrer">Connect</a>
              </div>
            </div>
          </div>

          <div className="body__section body__message">
            <div className="body__header">
              <h3>Send Me a Message</h3>
            </div>
            <div className="message-section">
              <p className="message-text">
                I'm always interested in new opportunities, collaborations, and conversations about technology. 
                Whether you have a project in mind, want to discuss potential work opportunities, or just want to connect, 
                I'd love to hear from you!
              </p>
              <div className="contact-cta">
                <a href="mailto:berhanemeskel68@gmail.com?subject=Hello Eyob!" className="cta-button primary">
                  <i className="fa-solid fa-envelope"></i>
                  Email Me Directly
                </a>
                <a href="tel:+19165460992" className="cta-button secondary">
                  <i className="fa-solid fa-phone"></i>
                  Call Me
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Services Section */}
      <div className="services">
        <h1>Let's Work Together</h1>
        <div className="services__container">
          <div className="services__card">
            <h2>View My Work</h2>
            <p>Check out my projects and see what I can do</p>
            <Link to="/projects" onClick={scrollToTop}>
              <button>View Projects</button>
            </Link>
          </div>
          <div className="services__card">
            <h2>Learn About Me</h2>
            <p>Get to know more about my background and interests</p>
            <Link to="/about" onClick={scrollToTop}>
              <button>About Me</button>
            </Link>
          </div>
          <div className="services__card">
            <h2>My Resume</h2>
            <p>Download or view my professional resume</p>
            <Link to="/resume" onClick={scrollToTop}>
              <button>View Resume</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;