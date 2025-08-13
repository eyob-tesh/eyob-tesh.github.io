import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const projects = [
    {
      title: "Distributed Systems Project",
      description: "Scalable distributed system with fault tolerance",
      link: "/projects/distributed-project"
    },
    {
      title: "Trash Can Project", 
      description: "Automated trashcan that notified users to throw out their trash",
      link: "/projects/trash-can-project"
    },
    {
      title: "Movie Tracker Application",
      description: "Somewhere to store what movies you have seen and what movies you want to see later",
      link: "/projects/movie-tracker-project"
    },
    {
      title: "Personal Website",
      description: "Created a personal website for myself",
      link: "/projects/personal-website-project"
    },
    {
      title: "Personal Daily Reminder App",
      description: "An App to help you keep on top of your day",
      link: "/projects/daily-reminder-project"
    },
    {
      title: "Local Neighborhood Service Marketplace",
      description: "An App for local business to advertise their business",
      link: "/projects/neighborhood-marketplace-project"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h2 className="greeting">Hey<span className="wave">👋</span></h2>
            <p>Come check out some of my work down below</p>
          </div>
          <div className="main__img--container">
            <div className="image-frame">
              <img src="/images/gradPic2.JPG" alt="Eyob Teshome graduation" id="main__img" />
              <div className="decoration-circle"></div>
              <div className="decoration-dots"></div>
            </div>
          </div>
        </div>
        <a href="#project-page" className="scroll-down">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>

      {/* Projects Section */}
      <div className="projects" id="project-page">
        <h1>My Projects</h1>
        <h3>Some projects are currently in progress (or being updated)</h3>
        <div className="projects__container">
          {projects.map((project, index) => (
            <div key={index} className="projects__card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Link to={project.link} onClick={scrollToTop}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="services">
        <h1>Section Coming Soon... Thank You For Your Patience</h1>
        <div className="services__container">
          <div className="services__card">
            <h2>Resume</h2>
            <p>Click here if you'd like to see my resume</p>
            <Link to="/resume" onClick={scrollToTop}>
              <button>Resume</button>
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

export default Projects;