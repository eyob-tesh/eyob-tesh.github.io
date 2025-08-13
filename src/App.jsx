import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectName" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;