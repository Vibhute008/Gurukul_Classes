import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const features = [
    {
      id: 1,
      title: "Expert Educators",
      description: "Our faculty comprises seasoned educators with deep subject knowledge and years of teaching experience.",
      icon: "🎓"
    },
    {
      id: 2,
      title: "Personalized Learning",
      description: "We maintain small batch sizes to ensure personalized attention for each student.",
      icon: "👥"
    },
    {
      id: 3,
      title: "Board Exam Excellence",
      description: "Specialized curriculum designed to excel in SSC and CBSE board examinations.",
      icon: "📚"
    },
    {
      id: 4,
      title: "Holistic Development",
      description: "Beyond academics, we focus on developing critical thinking and problem-solving skills.",
      icon: "🌟"
    }
  ];

  const leadership = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      role: "Founder & Director",
      bio: "With over 20 years of teaching experience, Dr. Sharma established Gurukul Classes with a vision to revolutionize education.",
      image: "../assets/team1.jpg"
    },
    {
      id: 2,
      name: "Prof. Priya Patel",
      role: "Academic Head",
      bio: "Specializes in Mathematics and Science education with innovative teaching methodologies.",
      image: "../assets/team2.jpg"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Amit Verma",
      role: "Parent of Student (Class 10)",
      content: "Gurukul Classes transformed my child's approach to learning. The teachers are exceptional at making complex topics easy to understand.",
      rating: 5
    },
    {
      id: 2,
      name: "Sneha Gupta",
      role: "Student (Class 10)",
      content: "The supportive environment and personalized attention helped me score 95% in my board exams. Truly grateful!",
      rating: 5
    },
    {
      id: 3,
      name: "Rahul Jain",
      role: "Parent of Student (Class 9)",
      content: "The holistic approach to education at Gurukul goes beyond textbooks. My child has developed confidence and critical thinking skills.",
      rating: 5
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Gurukul Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nurturing Minds, Shaping Futures Since 2007
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="history">
        <div className="container">
          <div className="history-content">
            <motion.div
              className="history-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Our Journey</h2>
              <p>
                Founded in 2007, Gurukul Classes began with a vision to provide quality education to students 
                in classes 9th and 10th. What started as a small initiative with just 15 students in a modest 
                classroom has today grown into one of the most trusted educational institutes in the region.
              </p>
              <p>
                Our founder, Dr. Rajesh Sharma, with over 20 years of teaching experience, recognized the need 
                for a learning environment that combines traditional values with modern teaching methodologies. 
                His vision was to create an institution where every student could thrive academically and personally.
              </p>
              <p>
                Today, with over 15 years of excellence, we've mentored more than 10,000 students who have gone 
                on to achieve remarkable success in their academic pursuits and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy">
        <div className="container">
          <motion.div
            className="philosophy-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Teaching Philosophy</h2>
            <p>
              We believe that education is not just about academic excellence but also about nurturing 
              character and building confidence. Our approach focuses on:
            </p>
            
            <div className="philosophy-points">
              <div className="point">
                <h3>Conceptual Clarity</h3>
                <p>We emphasize understanding fundamental concepts rather than rote learning.</p>
              </div>
              <div className="point">
                <h3>Personalized Attention</h3>
                <p>Small batches ensure each student receives individual guidance.</p>
              </div>
              <div className="point">
                <h3>Holistic Growth</h3>
                <p>We nurture not just academic skills but also critical thinking and creativity.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <motion.div
              className="mission-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Our Mission & Vision</h2>
              <div className="mission-item">
                <h3>Mission</h3>
                <p>
                  To provide quality education that empowers students to achieve academic excellence 
                  while developing critical life skills and values.
                </p>
              </div>
              <div className="mission-item">
                <h3>Vision</h3>
                <p>
                  To become a beacon of educational excellence, known for our commitment to student 
                  success and holistic development.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="mission-stats"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="stat-card">
                <h3>18+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat-card">
                <h3>10,000+</h3>
                <p>Students Mentored</p>
              </div>
              <div className="stat-card">
                <h3>98%</h3>
                <p>Board Exam Success Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                className="feature-card"
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
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
            What People Say
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
                <div className="rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;