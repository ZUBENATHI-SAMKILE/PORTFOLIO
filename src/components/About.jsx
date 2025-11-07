import React from "react";
import { User,School, GraduationCap, Phone, Mail, Linkedin, MapPin,Github } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about_container">
        
        <div className="info_section">
          <h3 className="section_title">Personal Info</h3>
          <ul>
            <li><User className="icon" /><strong>Name:</strong> Zubenathi Samkile</li>
            <li><GraduationCap className="icon" /><strong>Qualification:</strong> Bachelor in Information and Communication Tech</li>
            <li><School className="icon" /><strong>University:</strong> Durban University of Technology</li>
            <li><Phone className="icon" /><strong>Number:</strong> 0638998683</li>
            <li><Mail className="icon" /><strong>Email:</strong> samkilezubenathi@gmail.com</li>
            <li><Linkedin className="icon" /><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/zubenathi-samkile" target="_blank" rel="noreferrer">linkedin.com/in/zubenathi-samkile</a></li>
            <li><Github className="icon" /><strong>GitHub:</strong>{" "}<a href="https://github.com/ZUBENATHI-SAMKILE" target="_blank" rel="noreferrer" > github.com/ZUBENATHI-SAMKILE</a> </li>
            <li><MapPin className="icon" /><strong>Location:</strong> Eastern Cape, South Africa</li>
          </ul>
        </div>

        {/* About Me + Technical Expertise Container */}
        <div className="about_tech_container">
          {/* About Me */}
          <div className="about_content">
            <h3 className="section_title">About Me</h3>
            <p>
              Software Developer with a Bachelor’s Degree of ICT from Durban University 
              of Technology (DUT). Skilled in backend development, API design, and AI-driven systems, with 
              a strong focus on mobile-first and cloud-based applications. Experienced in Python, Java, React, 
              Flask, and SQL, and passionat about building scalable, high-performance solutions that drive innovation and impact. 
              Eager to contribute to dynamic development teams and gain practical experience in the software industry. 
            </p>
            
          </div>
          
          <div className="tech_section">
            <h3 className="section_title">Technical Expertise</h3>

            <div className="tech_card">
              <h4>Languages</h4>
              <p className="tech_skills">Python, Java, C#, JavaScript, SQL</p>
              <p className="tech_desc">Experienced in writing clean, efficient, and maintainable code across multiple programming languages.</p>
            </div>

            <div className="tech_card">
              <h4>Frameworks & Libraries</h4>
              <p className="tech_skills">React, Node.js, Flask, Express</p>
              <p className="tech_desc">Skilled in developing scalable applications and secure RESTful APIs using modern frameworks.</p>
            </div>
            
            <div className="tech_card">
              <h4>Mobile Development</h4>
              <p className="tech_skills">Java (Android)</p>
              <p className="tech_desc">Proficient in building intuitive, cross-platform mobile applications.</p>
            </div>
            
            <div className="tech_card">
              <h4>Database & Cloud</h4>
              <p className="tech_skills">SQLite, Firebase, Data Warehousing</p>
              <p className="tech_desc">Focused on creating reliable data structures and efficient cloud deployment setups.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
