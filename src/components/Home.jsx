import React, { useState, useEffect, useMemo } from 'react';

const Home = () => {
  const lines = useMemo(
    () => [
    "Building modern web and mobile apps that scale.",
    "Turning ideas into full stack digital products.",
    "Crafting clean code, smart design, and powerful functionality.",
    "Full stack developer focused on speed, innovation, and impact.",
    "Bridging frontend creativity with backend power."
  
      ],
    [] 
  );

  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const typingTimeout = setTimeout(() => {
          setCurrentLine(prev => prev + lines[lineIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, 60);
        return () => clearTimeout(typingTimeout);
      } else {
        const pauseTimeout = setTimeout(() => {
          setCurrentLine("");
          setCharIndex(0);
          setLineIndex((prev) => (prev + 1) % lines.length);
        }, 1800);
        return () => clearTimeout(pauseTimeout);
      }
    }
  }, [charIndex, lineIndex, lines]);

  return (

    <section id="home" className="hero">
      <div className="hero_container">
        <div className="hero_image">
          <img src={process.env.PUBLIC_URL + "/assets/images/profile.jpg"} alt="Profile" />
        </div>

        <div className="hero_text">
          <h1>Hi, I'm <span className="highlight">Zubenathi Samkile</span></h1>
          <h2>Software Engineer | Fullstack Developer</h2>

          <div className="hero_buttons">
            <a href="#projects" className="btn-primary">View Work</a>
            <a href={process.env.PUBLIC_URL + "/assets/images/Zubenathi Samkile CV.pdf"} download className="btn-secondary">Download CV</a>
          </div>

          <p className="typing_animation">{currentLine}<span className="cursor">|</span></p>
        </div>
      </div>
    </section>
    
  );
};

export default Home;
