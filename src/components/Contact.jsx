import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaUser,
  FaEnvelope,
  FaTag,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", success: null });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_React2025", 
        "contact_template", 
        form.current,
        "bVNltusSPa3-UoPEu" 
      )
      .then(
        () => {
          setStatus({ message: "Email sent successfully!", success: true });
          e.target.reset();
        },
        () => {
          setStatus({ message: "Failed to send email. Please try again.", success: false });
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact_container">
        <h2 className="contact_title">
          <FaEnvelopeOpenText className="icon_title" /> Contact Me
        </h2>
        <p className="contact_subtext">
          Let’s build something great together! Fill out the form below and I’ll get back to you soon.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="input_group">
            <FaUser className="icon" />
            <input type="text" name="name" placeholder="Your Name" required />
          </div>

          <div className="input_group">
            <FaEnvelope className="icon" />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="input_group">
            <FaTag className="icon" />
            <input type="text" name="subject" placeholder="Subject" required />
          </div>

          <div className="input_group textarea_group">
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          </div>

          <button type="submit" className="btn btn_primary">
            <FaPaperPlane className="send_icon" /> Send Message
          </button>
        </form>

        {status.message && (
          <div className={`status_message ${status.success ? "success" : "error"}`}>
            {status.success ? (
              <FaCheckCircle className="status_icon" />
            ) : (
              <FaTimesCircle className="status_icon" />
            )}
            <span>{status.message}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
