# Old HTML Website Files

This folder contains the original static HTML/CSS/JavaScript files that were used before migrating to React.

## Files Moved Here:

### Main Pages (now React components):
- `index.html` → `src/pages/Home.jsx`
- `about.html` → `src/pages/About.jsx`
- `contact.html` → `src/pages/Contact.jsx`
- `projects.html` → `src/pages/Projects.jsx`
- `resume.html` → `src/pages/Resume.jsx`

### JavaScript & CSS (replaced):
- `app.js` → functionality moved to React components
- `styles.css` → moved to `src/styles.css`

### Project Detail Pages (now dynamic):
- `projects/*.html` → replaced by `src/components/ProjectDetail.jsx` with dynamic routing

### Assets (duplicated):
- `images/` → moved to `public/images/`
- `Eyob L Teshome Resume.pdf` → moved to `public/`

## Migration Date:
August 13, 2025

## Status:
These files are preserved for reference but are no longer used by the active React application.

**Safe to delete if needed**, but kept for backup/reference purposes.