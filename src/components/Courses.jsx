import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Courses.css';

const coursesData = [
  {
    id: 1,
    title: "JEE Main & Advanced",
    description: "Comprehensive preparation for engineering entrance exams with expert faculty and proven strategies. Covers Physics, Chemistry, and Mathematics with special focus on problem-solving techniques.",
    duration: "2 Years",
    level: "Advanced",
    highlights: [
      "Daily Practice Problems (DPP)",
      "Full Syllabus Tests",
      "Doubt Clearing Sessions",
      "Rank Predictor & Strategy Sessions",
      "Previous Year Paper Analysis"
    ]
  },
  {
    id: 2,
    title: "NEET Medical",
    description: "Thorough preparation for medical entrance exams with focus on biology, chemistry, and physics. Special emphasis on memorization techniques and clinical problem-solving.",
    duration: "2 Years",
    level: "Advanced",
    highlights: [
      "Subject-wise Tests",
      "Grand Tests",
      "Medical Counselling",
      "Anatomy & Physiology Focus",
      "MCQ Strategy Sessions"
    ]
  },
  {
    id: 3,
    title: "Class 11 & 12 CBSE",
    description: "Complete syllabus coverage for CBSE board exams with emphasis on concept clarity and exam-oriented preparation. Regular assessments to track progress.",
    duration: "1 Year",
    level: "Intermediate",
    highlights: [
      "NCERT Focused",
      "Sample Papers",
      "Board Exam Strategies",
      "Chapter-wise Tests",
      "Revision Modules"
    ]
  },
  {
    id: 4,
    title: "Foundation Course (9th & 10th)",
    description: "Strong foundation building for students of classes 9 & 10 to excel in future competitive exams. Focus on mathematical and scientific reasoning.",
    duration: "2 Years",
    level: "Beginner",
    highlights: [
      "Olympiad Preparation",
      "Basic Concept Building",
      "Regular Assessments",
      "Study Skills Development",
      "Competitive Exam Exposure"
    ]
  }
];

const Courses = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="courses" id="courses">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Comprehensive Courses
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Designed for excellence in competitive exams
          </motion.p>
          
          <div className="courses-grid">
            {[1, 2, 3, 4].map((item) => (
              <div className="skeleton-loader" key={item}>
                <div className="shimmer"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="courses" id="courses">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Comprehensive Courses
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Designed for excellence in competitive exams
        </motion.p>
        
        <div className="courses-grid">
          {coursesData.map((course, index) => (
            <motion.div 
              className="course-card" 
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="course-header">
                <h3>{course.title}</h3>
                <span className="level-badge">{course.level}</span>
              </div>
              <p className="course-description">{course.description}</p>
              <div className="course-highlights">
                <h4>Course Highlights:</h4>
                <ul>
                  {course.highlights.map((highlight, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * idx }}
                      viewport={{ once: true }}
                    >
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="course-meta">
                <span className="duration">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                  </svg>
                  {course.duration}
                </span>
              </div>
              <motion.button 
                className="enroll-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;