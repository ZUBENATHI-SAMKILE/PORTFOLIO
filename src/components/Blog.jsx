import React, { useState } from 'react';
import { FaLaptopCode, FaDatabase } from 'react-icons/fa';
import { BookOpen } from "lucide-react";


const blogPosts = [
  {
    title: "My Fullstack Journey",
    icon: <FaLaptopCode className="blog_icon" />,
    short: "From basics to advanced fullstack projects  HTML, CSS, React, Node.js, Flask, and deployment.",
    full: (
      <>
        <ul>
          <li>
            <strong>Step 1:</strong>
            <ul>
              <li>Topics: HTML5, CSS3, C#</li>
              <li>Tools: Visual Studio Code</li>
              <li>Project: Group project Restaurant website</li>
            </ul>
          </li>
          <li>
            <strong>Step 2:</strong>
            <ul>
              <li>Topics: React components, props, state, hooks</li>
              <li>Tools: React DevTools, Vite or Create React App</li>
              <li>Project: Doctor appointment frontend</li>
            </ul>
          </li>
          <li>
            <strong>Step 3:</strong>
            <ul>
              <li>Topics: Node.js, Express.js, MongoDB, REST APIs</li>
              <li>Tools: MongoDB</li>
              <li>Projects: User authentication system, weather app</li>
            </ul>
          </li>
          <li>
            <strong>Step 4:</strong>
            <ul>
              <li>Topics: Python Flask, SQLite, MySQL</li>
              <li>Tools: VS Code, bcrypt</li>
              <li>Projects: Attendance System (group), Book Store, Video Vault (solo)</li>
            </ul>
          </li>
          <li>
            <strong>Step 5:</strong>
            <ul>
              <li>To Make app live deploying </li>
              <li>Tools:  Render & Git </li>
            </ul>
          </li>
        </ul>
      </>
    )
  },
  {
    title: "Data Science Journey",
    icon: <FaDatabase className="blog_icon" />,
    short: "Learn about my journey into data analysis, machine learning, AI, and building intelligent systems using Python, SQL, and cloud platforms.",
    full: (
      <>
      <ul>
        <li>
          <strong>Programming:</strong>
          <ul>
            <li>Python: Widely used for data analysis, cleaning, and machine learning.</li>
            <li>SQL: For querying and managing structured databases.</li>
            <li>Libraries: Pandas, NumPy, Scikit-learn, TensorFlow.</li>
          </ul>
        </li>
        
        <li>
          <strong>Data Cleaning & Preparation:</strong>
          <ul>
            <li>Handled missing values, duplicates, and inconsistent data formats using Pandas.</li>
            <li>Transformed raw data into clean, structured datasets ready for analysis.</li>
            <li>Improved data quality for accurate and efficient model performance.</li>
          </ul>
        </li>
        
        <li>
          <strong>Data Visualization:</strong>
          <ul>
            <li>Tools: Matplotlib, Seaborn, Tableau.</li>
            <li>Plotted various graphs to identify trends, patterns, and outliers.</li>
            <li>Developed clear visual reports for better decision-making.</li>
          </ul>
        </li>
        
        <li>
          <strong>Machine Learning & AI:</strong>
          <ul>
            <li>Supervised and Unsupervised Learning: Core techniques for prediction and pattern recognition.</li>
            <li>Deep Learning & Neural Networks: Advanced methods for image, text, and speech data.</li>
          </ul>
       </li>
       
       <li>
         <strong>Big Data Technologies:</strong>
         <ul>
           <li>Hadoop, Spark: Tools for handling large scale data processing.</li>
         </ul>
        </li>
      </ul>
    </>
    )
  }
];

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="blog">
      <div className="blog_container">
        <h2 className="blog_title"><BookOpen className="logo_icon" /> Blog</h2>
        <div className="blog_grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog_card">
              <div className="blog_header">
                {post.icon}
                <h3>{post.title}</h3>
              </div>
              <p>{post.short}</p>
              {expandedIndex === index && (
                <div className="blog_full">{post.full}</div>
              )}
              <button className="btn btn_blog" onClick={() => toggleExpand(index)}>
                {expandedIndex === index ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
