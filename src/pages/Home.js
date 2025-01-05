import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import pp from '../images/pp.png';
import './home.css';
// import '../output.css';
import ParticleBackground from './particles.js';
import cv from '../cv/Hasaranga Dias.pdf'; // Path to your CV document

export default function Home() {
    useEffect(() => {
        document.title = "Hasaranga Dias | Home";
    }, []);

    const initialContent = {
        title: 'Software Engineer',
        description: 'Crafting Innovative Solutions',
        details: 'As a passionate Software Engineer, I specialize in developing scalable and efficient software solutions. With experience in full-stack development, I am adept at both frontend and backend technologies. My projects include building web applications, optimizing performance, and implementing modern software practices.',
    };

    const newContent = {
        title: 'Cybersecurity Analyst',
        description: 'Protecting Digital Landscapes',
        details: 'As a dedicated Cybersecurity Enthusiast, I am committed to safeguarding digital environments from emerging threats. My focus includes ethical hacking, threat detection, and malware analysis. I am continuously expanding my knowledge through practical experience and specialized courses.',
    };

    const [content, setContent] = useState(initialContent);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsTransitioning(true); // Trigger transition
            setTimeout(() => {
                setContent(prevContent => (prevContent === initialContent ? newContent : initialContent));
                setIsTransitioning(false); // End transition
            }, 500); // Duration of the fade-out transition
        }, 15000); // Change content every 30 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Function to handle CV download
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cv; // Set the path to your CV document
        link.download = 'Hasaranga_Dias_CV.pdf'; // Set the default filename
        link.click(); // Trigger the download
    };

    return (
        <>
            <div className="App">
                <Navbar />
            </div>

            <div className="container">
                <ParticleBackground />
                <div className="content">
                    <div>
                        <p>I'm</p>
                        <h1 className="name">Keshan Hasaranga Dias Gunawardhana</h1>
                    </div>
                    <div className={`transition-content ${isTransitioning ? 'fading' : ''}`}>
                        <h1>{content.title}</h1>
                        <p>{content.description}</p>
                        <p>{content.details}</p>
                    </div>
                    <button onClick={handleDownload}>Download CV</button>
                </div>
                <div className="profile-container">
                    <div className="rotating-border"></div>
                    <img className="profile-photo" src={pp} alt="Profile" />
                </div>
            </div>
        </>
    );
}
