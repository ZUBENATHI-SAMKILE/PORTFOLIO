import React from 'react';
import { IoIosFolderOpen } from "react-icons/io";

const projects = [
  {
    title: "BookStore Web App",
    description: "A full-stack web application built with Flask and SQLite that lets users browse, purchase, and manage books online. Features include user authentication, an admin dashboard for book management, secure checkout, and order history, all wrapped in a clean and responsive interface. The app is deployed on Render.",
    image: process.env.PUBLIC_URL + "/assets/projects/BookStore.jpg",
    live: "https://book-store-app-6.onrender.com",
    github: "https://github.com/ZUBENATHI-SAMKILE/BOOK-STORE-APP.git",
    tech: ["Flask (Python)", "Javascript", "SQLite", "HTML", "CSS" ]
  },
  {
    title: "Telemedicine Web App",
    description: "A telemedicine web application built with Flask and React that allows patients to book appointments, consult with doctors via video calls, and manage their health records online. There is a chatbot for instant support where a patient can ask questions and receive immediate assistance.",
    image: process.env.PUBLIC_URL + "/assets/projects/Telemedicine.png",
    live: "https://book-store-app-6.onrender.com",
    github: "https://github.com/ZUBENATHI-SAMKILE/Telemedicine-App.git",
    tech: ["Flask(Python)", "React", "WebRTC", "RESTful APIs", "HTML", "Tailwind CSS"]
  },
  {
    title: "Dictionary App System",
    description: "A user friendly dictionary application built with React that allows users to search for word definitions, and pronunciation using the Free Dictionary API. Features include a clean interface, responsive design, and real-time search functionality. also allows users to save favorite words for quick access later.",
    image: process.env.PUBLIC_URL + "/assets/projects/dictionary.jpg",
    live: "https://ZUBENATHI-SAMKILE.github.io/dictionary-app",
    github: "https://github.com/ZUBENATHI-SAMKILE/dictionary-app.git",
    tech: ["React", " Free Dictionary API","JavaScript", "HTML", "CSS"]
  },
  {
    title: "VideoVault App System",
    description: "VideoVault is a Flask based web application that allows users to securely store, manage, and stream their personal video collections online. Features include user authentication, video upload and organization, and a responsive video player for seamless playback across devices.",
    image: process.env.PUBLIC_URL + "/assets/projects/videovault.jpg",
    live: "https://www-videovault-zs.onrender.com",
    github: "https://github.com/ZUBENATHI-SAMKILE/videovault.git",
    tech: ["Flask (Python)", "SQLite", "HTML", "Jinja2 Templates","Flask-Login"]
  },
  {
    title: "Face Recognition Attendance System( Group Project)",
    description: "The Face Recognition Attendance System is a Flask based web application that automates attendance tracking using facial recognition technology. It allows users to register their faces, and then automatically marks attendance when they are recognized. ",
    image: process.env.PUBLIC_URL + "/assets/projects/Attendance.jpg",
    live: "https://attendance-system-main-1-fcvz.onrender.com",
    github: "https://github.com/ZUBENATHI-SAMKILE/attendance-system.git",
    tech: ["Flask (Python)", "OpenCV", "JavaScript","SQL & SQLite", "face_recognition library"]
   
  },
   {
    title: "Weather App System",
    description: "A weather application built with React that provides real time weather information for any location using the OpenWeatherMap API. Locations can be searched automatically using geolocation or manually via a search bar, displaying current conditions, forecasts, and a user-friendly interface.",
    image: process.env.PUBLIC_URL + "/assets/projects/weather.jpg",
    live: "https://ZUBENATHI-SAMKILE.github.io/weather-app",
    github: "https://github.com/ZUBENATHI-SAMKILE/weather-app.git",
    tech: ["React.js", "JavaScript", "OpenWeatherMap API","HTML"]

  },
  {
    title: "Android Calculator App",
    description: "A simple and intuitive calculator application for Android devices built using Java and Android Studio. It features basic arithmetic operations, a clean user interface, and responsive design for seamless usability across various screen sizes. Deployed as an APK file for easy installation on Android smartphones and tablets.",
    image: process.env.PUBLIC_URL + "/assets/projects/Calculator.jpg",
    live: "https://github.com/ZUBENATHI-SAMKILE/CalculatorApp-Android/releases",
    github: "https://github.com/ZUBENATHI-SAMKILE/CalculatorApp-Android.git",
    tech: ["Java", "Material Design", "Android Studio", "XML" ]
    
  }
];

const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <div className='projects_con'>
        <h2 className='projects_title'> <IoIosFolderOpen className="logo_icon" /> My Projects </h2>
        <p className='projects_intro'>
          Each milestone in my learning journey comes to life here every certificate led to a new project, every project to new insights. This space reflects my ongoing pursuit of growth, creativity, and innovation
        </p>
        <div className='projects_grid'>
          {projects.map((project, index) => (
            <div key={index} className='project_card'>
              <img src={project.image} alt={project.title} className='project_image' />
              <div className='project_info'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='tech_badges'>
                  {project.tech.map((tech, i) => (
                    <span key={i} className='tech_badge'>{tech}</span>
                  ))}
                </div>
                <div className='project_buttons'>
                  {project.live && (
                    <a href={project.live} target='_blank' rel='noreferrer' className='btn btn_live'>🌐 Live Demo</a>
                  )}
                  {project.github && (
                    <a href={project.github} target='_blank' rel='noreferrer' className='btn btn_github'>💻 GitHub Repo</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
