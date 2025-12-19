import React from 'react';
import { motion } from 'framer-motion';
import './Results.css';

const Results = () => {
  const achievements = [
    {
      year: "2023",
      title: "Board Exam Results",
      description: "98% students secured A+ grade",
      highlight: "15 students scored 95%+"
    },
    {
      year: "2021",
      title: "Academic Excellence",
      description: "Consistent performance over years",
      highlight: "School toppers in district"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Aditi Sharma",
      class: "Class 10, 2023",
      percentage: "96.8%",
      quote: "Gurukul Classes helped me build a strong foundation and excel in my board exams. The personalized attention made all the difference.",
      photo: null
    },
    {
      id: 2,
      name: "Rohan Patel",
      class: "Class 10, 2023",
      percentage: "94.2%",
      quote: "The faculty's expertise and the systematic approach to teaching made complex topics easy to understand.",
      photo: null
    },
    {
      id: 3,
      name: "Meera Desai",
      class: "Class 9, 2023",
      percentage: "95.5%",
      quote: "Regular assessments and doubt sessions helped me stay on track throughout the year.",
      photo: null
    }
  ];

  return (
    <div className="results-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Results & Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Celebrating excellence in education
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>98%</h3>
              <p>Board Exam Success Rate</p>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>10,000+</h3>
              <p>Students Mentored</p>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>500+</h3>
              <p>Top Rankers</p>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>18+</h3>
              <p>Years of Excellence</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Recent Achievements
          </motion.h2>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                className="achievement-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="year-badge">{achievement.year}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <div className="highlight">{achievement.highlight}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Student Success Stories
          </motion.h2>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                className="testimonial-card"
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-header">
                  <div className="student-info">
                    <h3>{testimonial.name}</h3>
                    <p className="class-info">{testimonial.class}</p>
                    <p className="percentage">{testimonial.percentage}</p>
                  </div>
                </div>
                <p className="quote">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;