import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      student: "Arjun Mehta",
      course: "JEE Advanced 2023",
      rating: 5,
      text: "The faculty at Gurukul Classes transformed my approach to problem-solving. Their personalized attention and structured methodology helped me secure AIR 42 in JEE Advanced."
    },
    {
      id: 2,
      student: "Neha Singh",
      course: "NEET 2023",
      rating: 5,
      text: "I couldn't have asked for better mentors. The comprehensive study material and regular assessments kept me on track throughout my preparation journey."
    },
    {
      id: 3,
      student: "Karan Patel",
      course: "JEE Main 2023",
      rating: 5,
      text: "The doubt-clearing sessions and practice tests were instrumental in my success. I scored 99.7 percentile thanks to the excellent guidance here."
    }
  ];

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg 
        key={index} 
        className="star" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ));
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Student Testimonials
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Hear from our students who have achieved their dreams with our guidance
        </motion.p>
        
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
              className="testimonial-card"
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-header">
                <div className="student-info">
                  <h3>{testimonial.student}</h3>
                  <p className="course">{testimonial.course}</p>
                </div>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;