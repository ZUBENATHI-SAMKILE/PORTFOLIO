import React, { useState } from 'react';
import { FaAward, FaTimes } from 'react-icons/fa';

const certificates = [
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    image: "/assets/certificates/Machine.jpg"
  },
  {
    title: " Fullstack Web Development",
    issuer: "FNB App Academy",
    image: "/assets/certificates/FNB.jpg"
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "JS Institute",
    image: "/assets/certificates/Javascript.jpg"
  },
  {
    title: "Python Essentials 2",
    issuer: "Python Institute",
    image: "/assets/certificates/Python.jpg"
  },
   {
    title: " NDG Linux Unhatched",
    issuer: " Cisco Networking Academy",
    image: "/assets/certificates/Linux.jpg"
  },
  {
    title: "Python Libraries for Data Science ",
    issuer: " Simple Learn SkillUp",
    image: "/assets/certificates/Data Science.jpg"
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
