import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './about.css';
import ParticleBackground from './particles.js';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import ousl from '../images/ousl_logo.jpg';
import kiu from '../images/kiu_logo.png';
import idm from '../images/idm_logo.jpg';
import rcg from '../images/rcg_logo.jpg';


export default function About() {
  const [isInView, setIsInView] = useState({
    about: true,
    contact: true,
    education: false
  });

  useEffect(() => {
    document.title = "Hasaranga Dias | About";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.querySelector('.about');
      const contact = document.querySelector('.contact');
      const education = document.querySelector('.education');
  
      setIsInView({
        about: isInViewPort(about),
        contact: isInViewPort(contact),
        education: isInViewPort(education)
      });
    };
  
    const isInViewPort = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.top <= window.innerHeight * 0.75 // Adjust this value for earlier/later triggering
      );
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div>
      <Navbar />
      <ParticleBackground />
      
      <div className={`about ${isInView.about ? 'in-view' : 'out-of-view'}`}>
        <h1>A Glimpse Into My Journey</h1>
        <p>
          Hi, I'm Keshan Hasaranga Dias Gunawardhana, a passionate Software Engineer and Cybersecurity Enthusiast. 
          With a strong foundation in full-stack development and a growing expertise in cybersecurity, 
          I am driven by the challenge of solving complex problems and building scalable solutions. 
          My approach focuses on creating innovative systems that combine technical proficiency with user-centric design.
        </p>
        <p>
          I specialize in software development, security protocols, ethical hacking, threat detection, 
          and much more. I strive to stay on top of the latest trends in technology and continuously seek 
          opportunities to learn and grow professionally.
        </p>
      </div>

      <div className={`contact ${isInView.contact ? 'in-view' : 'out-of-view'}`}>
        <h1>Reach Out to Me</h1>
        
        {/* Contact Number */}
        <p><FaPhoneAlt /> Phone: <a href="tel:+94123456789">+94768718183</a></p>

        {/* Email */}
        <p><FaEnvelope /> <a href="mailto:hasaranga.dias@example.com">hasarangadias@gmail.com</a></p>
        
        {/* LinkedIn */}
        <p><FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/keshan-hasaranga-dias-gunawardhana-5bb195220" target="_blank" rel="noopener noreferrer">Keshan Hasaranga Dias Gunawardhana</a></p>

        {/* GitHub */}
        <p><FaGithub /> GitHub: <a href="https://github.com/hasarangad" target="_blank" rel="noopener noreferrer">Hasaranga Dias</a></p>

        {/* Social Media */}
        <p>
          <FaFacebook /> Facebook: <a href="https://www.facebook.com/arrow.khdg" target="_blank" rel="noopener noreferrer">Keshan Hasaranga Dias</a>
        </p>
        <p>
          <FaInstagram /> Instagram: <a href="https://www.instagram.com/k_h_d_g_00/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">k_h_d_g_00</a>
        </p>
        <p>
          <FaTwitter /> Twitter: <a href="https://twitter.com/HasarangaDias?s=20" target="_blank" rel="noopener noreferrer">Hasaranga Dias</a>
        </p>
        <p>
          <FaYoutube /> YouTube: <a href="https://www.youtube.com/channel/UClnlVlMfLLXus9BTUgls-vg" target="_blank" rel="noopener noreferrer">Mr.H__D</a>
        </p>
      </div>

      <div className={`education ${isInView.education ? 'in-view' : 'out-of-view'}`}>
        <h1>My Educational Story</h1>
        
        <p>
          <a href="https://www.ou.ac.lk/" target="_blank" rel="noopener noreferrer">
            <img 
              src={ousl} 
              alt="OUSL Logo" 
              style={{ width: '50px', marginRight: '10px', verticalAlign: 'middle' }} 
            />
          </a>
          <strong>Software Engineering (BSc)</strong><br />
          Open University of Sri Lanka (OUSL) | Expected Graduation: 2026
        </p>
        
        <p>
          <a href="https://www.kiu.ac.lk/" target="_blank" rel="noopener noreferrer">
            <img 
              src={kiu} 
              alt="KIU Logo" 
              style={{ width: '50px', marginRight: '10px', verticalAlign: 'middle' }} 
            />
          </a>
          <strong>Computer Networks and Cybersecurity (BSc)</strong><br />
          KIU (KIU University) | Expected Graduation: 2026
        </p>
        
        <p>
          <a href="https://www.idm.edu/" target="_blank" rel="noopener noreferrer">
            <img 
              src={idm} 
              alt="IDM Logo" 
              style={{ width: '50px', marginRight: '10px', verticalAlign: 'middle' }} 
            />
          </a>
          <strong>Diploma in Office Applications and Web</strong><br />
          IDM Southern Campus | Completed: 2022
        </p>
        
        <p>
          <a href="https://www.richmondcollege.lk/" target="_blank" rel="noopener noreferrer">
            <img 
              src={rcg} 
              alt="Richmond College Logo" 
              style={{ width: '50px', marginRight: '10px', verticalAlign: 'middle' }} 
            />
          </a>
          <strong>Advanced Level - Physical Science </strong><br/>
          Richmond College Galle, Sri Lanka | Completed: 2020
        </p>
      </div>

      <div>
        <br/><br/><br/><br/>
      </div>

      

      
    </div>
  );
}
