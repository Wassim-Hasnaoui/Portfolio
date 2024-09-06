import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {/* Project Card 1 */}
        <div className="project-card">
          <h3>Universe E-learning</h3>
          <p>Developed a user-friendly online learning platform offering
programming courses. The project included user authentication, CRUD operations,
and responsive design, providing a smooth learning experience for users.</p>
          <a href="https://github.com/Wassim-Hasnaoui/groupe-project.git" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        {/* Project Card 2 */}
        <div className="project-card">
          <h3>Real Estate</h3>
          <p>Created a platform for buying, selling, and renting properties. Implemented
essential features such as user authentication, CRUD operations, and a responsive
design to ensure ease of use for all users.</p>
          <a href="https://github.com/Wassim-Hasnaoui/Real-Estate.git" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        {/* Project Card 3 */}
        <div className="project-card">
          <h3>Khadamni</h3>
          <p>Developed a service marketplace connecting users with professionals. Focused on
creating a seamless experience through user authentication, CRUD operations, and
a responsive design.</p>
          <a href="https://github.com/Wassim-Hasnaoui/Khadamni.git" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
