import React from 'react';
import { Link } from 'react-router-dom';

const PageNavigation = ({ links = [] }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const availableLinks = {
    projects: {
      title: 'My Projects',
      description: 'Click to get there',
      path: '/projects'
    },
    about: {
      title: 'About Me',
      description: 'Learn more about me',
      path: '/about'
    },
    resume: {
      title: 'Resume',
      description: 'View my experience',
      path: '/resume'
    },
    home: {
      title: 'Back to Home Page',
      description: 'Return to the main page',
      path: '/'
    },
    contact: {
      title: 'Contact Me',
      description: 'Get in touch',
      path: '/contact'
    }
  };

  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="services">
      <h1>Explore More</h1>
      <div className="services__container">
        {links.map((linkKey) => {
          const link = availableLinks[linkKey];
          if (!link) return null;

          return (
            <div key={linkKey} className="services__card">
              <h2>{link.title}</h2>
              <p>{link.description}</p>
              <Link to={link.path} onClick={scrollToTop}>
                <button>Go</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageNavigation;
