import React, { useState } from 'react';
import { FaAward, FaTimes } from 'react-icons/fa';
import Machine from '../assets/certificates/Machine.jpg';
import FNB from '../assets/certificates/FNB.jpg';
import Javascript from '../assets/certificates/Javascript.jpg';
import Python from '../assets/certificates/Python.jpg';
import Cloud from '../assets/certificates/Cloud.jpg';
import DataScience from '../assets/certificates/Data Science.jpg';
import Linux from '../assets/certificates/Linux.jpg';
import aws from '../assets/certificates/aws.jpg';

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: aws
  },
  {
    title: " Microsoft Cloud Services",
    issuer: " Microsoft",
    image: Cloud
  },
  {
    title: " Fullstack Web Development",
    issuer: "FNB App Academy",
    image: FNB
  },
  {
    title: "Python Essentials 2",
    issuer: "Python Institute",
    image: Python
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "JS Institute",
    image: Javascript
  },
  {
    title: " NDG Linux Essentials",
    issuer: "Cisco Networking Academy",
    image: Linux
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    image: Machine
  },
  {
    title: "Python Libraries for Data Science ",
    issuer: " Simple Learn SkillUp",
    image: DataScience
  }
];

const Certificates = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage('');
  };

  return (
    <section id="certificates" className="certificates">
      <div className="certificates_con">
        <h2 className="certificates_title">
          <FaAward className="cert_icon" /> Certificates
        </h2>

        <div className="certificates_grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate_card">
              <div className="cert_image_wrap">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate_image"
                />
              </div>
              <div className="certificate_info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <button
                  className="btn_cert"
                  onClick={() => openLightbox(cert.image)}
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox_overlay" onClick={closeLightbox}>
          <div className="lightbox_content" onClick={e => e.stopPropagation()}>
            <FaTimes className="lightbox_close" onClick={closeLightbox} />
            <img src={currentImage} alt="Certificate" className="lightbox_image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
