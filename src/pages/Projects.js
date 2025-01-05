import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from './particles.js';
import './projects.css';

export default function Projects() {
  useEffect(() => {
    document.title = "Hasaranga Dias | Projects";
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  const projectDetails = {
    "VIRTUAL CALCULATOR": {
      description: "Virtual calculator that uses finger movements to operate.",
      additionalInfo: [
        "Generates 16 buttons for calculation",
        "Tech stack used: OpenCV, Python"
      ],
      moreInfo: "VIRTUAL CALCULATOR is an innovative calculator application that allows users to perform calculations using finger movements, eliminating the need for physical interaction with buttons. Developed using Python and OpenCV, this project utilizes computer vision techniques to track hand gestures and interpret them as input for the calculator. The application dynamically generates 16 buttons for various mathematical operations, and users can control the calculator simply by moving their fingers in front of the camera. This project demonstrates the integration of computer vision and user interaction, showcasing both technical skills in Python and creative problem-solving in gesture recognition.",
      githubLink: "https://github.com/hasarangad/Virtual-Calculator"
    },
    "CLASS PRO": {
      description: "Website for Parent-Teacher collaboration.",
      additionalInfo: [
        "Platform to communicate between teachers and parents (Group project)",
        "Tech stack used: React JS, Firebase"
      ],
      moreInfo: "The 'CLASS PRO' project is a web-based platform designed to foster collaboration between teachers and parents, streamlining communication and engagement. Built using React JS for the frontend and Firebase for backend services, this platform enables seamless interaction, allowing teachers to share updates, assignments, and progress reports, while parents can easily communicate with educators regarding their child's development. The user-friendly interface provides a centralized space for all important notifications and discussions, enhancing the overall educational experience and helping to bridge the gap between school and home in an efficient, accessible way. This project was developed as part of a group effort, demonstrating teamwork and proficiency in modern web development technologies.",
      githubLink: "https://github.com/hasarangad/ClassPro"
    },
    "CAREERBRIDGE": {
      description: "Platform to find a job, post a job.",
      additionalInfo: [
        "Job Portal (Group project)",
        "Tech stack used: HTML, CSS, JAVASCRIPT, PHP"
      ],
      moreInfo: "CAREERBRIDGE is a dynamic job portal platform designed to connect job seekers with employers. Developed as a group project, the platform allows users to search for job opportunities and apply for positions, while employers can post job listings and manage applications. Built using a tech stack that includes HTML, CSS, JavaScript, and PHP, CAREERBRIDGE offers a user-friendly interface with intuitive navigation. Job seekers can create profiles, upload resumes, and apply to jobs, while employers can post openings and review applications. The project aims to streamline the job search process and provide a seamless, efficient way for companies to find talent.",
      githubLink: "https://github.com/hasarangad/Careerbridge"
    },
    "SNAKE GAME": {
      description: "It is a remake of the Nokia Snake game.",
      additionalInfo: [
        "Mini Game",
        "Tech stack used: Python"
      ],
      moreInfo: "SNAKE GAME is a simple yet engaging remake of the classic Nokia Snake game, developed using Python. This mini-game brings the nostalgia of the original mobile game to life with modern coding techniques. Players control the snake, guiding it to eat food while avoiding collisions with the walls or its own body. As the snake grows longer, the game becomes more challenging, testing players' reflexes and strategic thinking. Built using Python, this project demonstrates basic game development principles, including handling user input, collision detection, and dynamic game state updates, making it a fun and educational experience.",
      githubLink: "https://github.com/hasarangad/Snake-Game-Python"
    },
    
    "MY PORTFOLIO": {
      description: "Developed using React.js and Tailwind CSS.",
      additionalInfo: [
        "Created a responsive and dynamic personal portfolio website to showcase skills, projects, and experience as a software engineer.",
        "Implemented modern design principles using Tailwind CSS and interactive user experiences with React.js, including state management and component-driven architecture."
      ],
      moreInfo: "MY PORTFOLIO is a dynamic and responsive personal website developed using React.js and Tailwind CSS, designed to showcase a diverse range of skills in software engineering, networking, and cybersecurity. The portfolio highlights key projects, technical expertise, and accomplishments across these domains, offering a comprehensive overview of the user's capabilities. With a modern design approach powered by Tailwind CSS and interactive user experiences facilitated by React.js, the website features state management and component-driven architecture to ensure smooth navigation and engagement. Whether showcasing software solutions, network configurations, or cybersecurity strategies, this portfolio serves as a professional representation of the user's multifaceted skill set.",
      githubLink: "https://github.com/hasarangad/HasarangaDiasPortfolio"
    }
  };

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <ParticleBackground />
      <Navbar />

      <div className="project-container">
        {Object.keys(projectDetails).map((projectName) => (
          <div key={projectName} className="project-box" onClick={() => handleProjectClick(projectName)}>
            <h3 className="project-title">{projectName}</h3>
            <p className="project-description">{projectDetails[projectName].description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="project-title">{selectedProject}</h3>
            <p className="project-description">{projectDetails[selectedProject].description}</p>
            {projectDetails[selectedProject].additionalInfo.map((info, index) => (
              <p key={index}><strong>{info}</strong></p>
            ))}
            <p>{projectDetails[selectedProject].moreInfo}</p>
            {projectDetails[selectedProject].githubLink && (
              <div className="github-link">
                <a href={projectDetails[selectedProject].githubLink} target="_blank" rel="noopener noreferrer">
                  View GitHub Repository
                </a>
              </div>
            )}
            <button className="close-modal-btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
