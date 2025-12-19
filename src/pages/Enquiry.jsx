import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Enquiry.css';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    phone: '',
    subjectInterested: '',
    parentName: '',
    email: '',
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
    console.log('Enquiry submitted:', formData);
    alert('Thank you for your enquiry! We will contact you shortly.');
    setFormData({
      studentName: '',
      class: '',
      phone: '',
      subjectInterested: '',
      parentName: '',
      email: '',
      message: ''
    });
  };

  const classOptions = [
    "Class 9 - Science",
    "Class 9 - Commerce",
    "Class 10 - Science",
    "Class 10 - Commerce"
  ];

  const subjectOptions = [
    "Mathematics",
    "Science (Physics & Chemistry)",
    "Accounts",
    "Economics",
    "English",
    "Marathi/Sanskrit"
  ];

  return (
    <div className="enquiry-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Admission Enquiry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Take the first step towards academic excellence
          </motion.p>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="enquiry-form-section">
        <div className="container">
          <motion.div
            className="form-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Enquire Now</h2>
            <p className="form-description">
              Fill out the form below and our admission team will get back to you within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="studentName">Student Full Name *</label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="class">Class & Stream *</label>
                  <select
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Class & Stream</option>
                    {classOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subjectInterested">Subject Interested *</label>
                  <select
                    id="subjectInterested"
                    name="subjectInterested"
                    value={formData.subjectInterested}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Subject</option>
                    {subjectOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="parentName">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific questions or information you'd like to share..."
                ></textarea>
              </div>
              
              <div className="form-checkbox">
                <label>
                  <input type="checkbox" required /> 
                  I agree to the terms and conditions and privacy policy
                </label>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Admission Process
          </motion.h2>
          
          <div className="process-steps">
            <motion.div
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number">1</div>
              <h3>Submit Enquiry</h3>
              <p>Fill out the enquiry form with your details</p>
            </motion.div>
            
            <motion.div
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">2</div>
              <h3>Counselling Session</h3>
              <p>Our team will contact you for a counselling session</p>
            </motion.div>
            
            <motion.div
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step-number">3</div>
              <h3>Admission Test</h3>
              <p>Appear for a simple assessment test (if required)</p>
            </motion.div>
            
            <motion.div
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="step-number">4</div>
              <h3>Confirmation</h3>
              <p>Receive admission confirmation and fee details</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Enquiry;