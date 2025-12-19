import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "123 Education Street, Mumbai, Maharashtra 400001"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+91 98765 43210"
    },
    {
      icon: "✉️",
      title: "Email",
      details: "info@gurukulclasses.edu"
    },
    {
      icon: "🕒",
      title: "Working Hours",
      details: "Monday - Saturday: 8:00 AM - 8:00 PM"
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get in touch with us for any queries or enrollment
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                className="contact-info-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Location
          </motion.h2>
          
          <div className="map-container">
            <div className="map-placeholder">
              <p>Google Maps Integration</p>
              <p>123 Education Street, Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            <motion.div
              className="form-container"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </motion.div>
            
            <motion.div
              className="quick-contact"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Quick Contact</h2>
              <div className="quick-actions">
                <a href="tel:+919876543210" className="quick-action">
                  <span className="icon">📞</span>
                  <div>
                    <h3>Call Us</h3>
                    <p>+91 98765 43210</p>
                  </div>
                </a>
                
                <a href="https://wa.me/919876543210" className="quick-action" target="_blank" rel="noopener noreferrer">
                  <span className="icon">💬</span>
                  <div>
                    <h3>WhatsApp</h3>
                    <p>Chat with us on WhatsApp</p>
                  </div>
                </a>
                
                <a href="mailto:info@gurukulclasses.edu" className="quick-action">
                  <span className="icon">✉️</span>
                  <div>
                    <h3>Email Us</h3>
                    <p>info@gurukulclasses.edu</p>
                  </div>
                </a>
              </div>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook">
                    <span className="icon">📘</span>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <span className="icon">📷</span>
                  </a>
                  <a href="#" aria-label="YouTube">
                    <span className="icon">▶️</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;