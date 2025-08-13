import React from 'react';

const Resume = () => {
  return (
    <>
      {/* Resume Section */}
      <div className="resume__section">
        <div className="resume__container">
          <div className="resume__header">
            <h1 className="resume__title">My Resume</h1>
            <p className="resume__subtitle">Bachelor of Science in Computer Science | Software Engineer</p>
            <div className="resume__actions">
              <a href="/Eyob L Teshome Resume.pdf" className="resume__download-btn" download>
                <i className="fas fa-download"></i>
                Download PDF
              </a>
              <a href="/Eyob L Teshome Resume.pdf" className="resume__view-btn" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i>
                View Full Screen
              </a>
            </div>
          </div>
          
          <div className="resume__viewer">
            <iframe src="/Eyob L Teshome Resume.pdf" title="Eyob Teshome Resume"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;