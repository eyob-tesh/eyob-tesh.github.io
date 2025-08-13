import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectName } = useParams();
  
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  const projectData = {
    'distributed-project': {
      title: 'Distributed Systems Project',
      description: 'A scalable distributed system with fault tolerance capabilities.',
      technologies: ['Python', 'Docker', 'Kubernetes', 'Redis'],
      details: 'This project demonstrates advanced distributed systems concepts including load balancing, fault tolerance, and scalable architecture design.',
      status: 'In Progress'
    },
    'trash-can-project': {
      title: 'Smart Waste Management System',
      description: 'An automated trashcan that notifies users when to empty their trash.',
      technologies: ['Arduino', 'IoT Sensors', 'Mobile App', 'C++'],
      details: 'This IoT project uses sensors to monitor trash levels and sends notifications to users via a mobile application when the trash needs to be emptied.',
      status: 'Completed'
    },
    'movie-tracker-project': {
      title: 'Movie Tracker Application',
      description: 'A platform to track watched movies and create watchlists.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      details: 'Full-stack web application that allows users to search for movies, track what they\'ve watched, and maintain a wishlist of movies to watch later.',
      status: 'In Progress'
    },
    'personal-website-project': {
      title: 'Personal Portfolio Website',
      description: 'A responsive personal website showcasing projects and skills.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      details: 'A modern, responsive portfolio website built to showcase projects, skills, and professional experience.',
      status: 'Completed'
    },
    'daily-reminder-project': {
      title: 'Personal Daily Reminder App',
      description: 'An application to help users stay on top of their daily tasks.',
      technologies: ['React Native', 'Firebase', 'Push Notifications'],
      details: 'Mobile application that helps users organize their daily tasks with reminders, scheduling, and progress tracking.',
      status: 'In Progress'
    },
    'neighborhood-marketplace-project': {
      title: 'Local Neighborhood Service Marketplace',
      description: 'A platform for local businesses to advertise their services.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
      details: 'Web platform connecting local service providers with community members, featuring business listings, reviews, and integrated payment processing.',
      status: 'In Progress'
    }
  };

  const project = projectData[projectName];

  if (!project) {
    return (
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1 className="name">Project Not Found</h1>
            <p className="tagline">The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="button" onClick={scrollToTop}>Back to Projects</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h2 className="greeting">Project Details</h2>
            <h1 className="name">{project.title}</h1>
            <p className="tagline">{project.description}</p>
            <div style={{ marginTop: '2rem' }}>
              <span style={{ 
                background: project.status === 'Completed' ? '#4CAF50' : '#FF9800',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="body">
        <div className="body__container">
          <div className="body__section">
            <div className="body__header">
              <h3>Project Overview</h3>
            </div>
            <p>{project.details}</p>
          </div>

          <div className="body__section">
            <div className="body__header">
              <h3>Technologies Used</h3>
            </div>
            <div className="skills-grid">
              {project.technologies.map((tech, index) => (
                <div key={index} className="skill-card">
                  <p>{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="services">
        <h1>Explore More</h1>
        <div className="services__container">
          <div className="services__card">
            <h2>All Projects</h2>
            <p>View all of my projects</p>
            <Link to="/projects" onClick={scrollToTop}>
              <button>View All Projects</button>
            </Link>
          </div>
          <div className="services__card">
            <h2>Contact Me</h2>
            <p>Let's discuss this project</p>
            <Link to="/contact" onClick={scrollToTop}>
              <button>Get In Touch</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;