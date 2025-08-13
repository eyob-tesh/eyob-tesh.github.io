import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const currentFooter = footerRef.current;
    if (currentFooter) {
      footerObserver.observe(currentFooter);
    }

    return () => {
      if (currentFooter) {
        footerObserver.unobserve(currentFooter);
      }
    };
  }, []);

  return (
    <div className="footer__container" ref={footerRef}>
      <div className="footer__content">
        <div className="footer__topHeading">
          <h1 className="contact__name">EYOB TESHOME</h1>
          <div className="contact__info">
            <p className="contact__title">Software Engineer</p>
            <p className="contact__location">Based in Sacramento, California</p>
          </div>
        </div>
        <div className="contact_details">
          <p className="contact__label">Get in touch at</p>
          <p className="contact__email">berhanemeskel68@gmail.com</p>
          <p className="contact__phone">(916) 546-0992</p>
        </div>
        <div className="social__media">
          <a href="https://facebook.com" className="social__icon--link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com/eyob.ts" className="social__icon--link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/eyob-tesh" className="social__icon--link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/eyobte" className="social__icon--link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;