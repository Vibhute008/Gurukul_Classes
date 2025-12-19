import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingElements from '../components/FloatingElements';
import './Home.css';
import logo from '../assets/image.png';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <FloatingElements />
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="logo-container">
              <motion.img 
                src={logo} 
                alt="Gurukul Classes Logo" 
                className="logo" 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              />
              <div>
                <motion.h1 
                  className="site-name"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Gurukul Classes
                </motion.h1>
                <motion.p 
                  className="tagline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Excellence in Education
                </motion.p>
              </div>
            </div>
            
            <motion.p 
              className="classes-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Classes for 9th & 10th | Science & Commerce
            </motion.p>
            
            <motion.div 
              className="highlights"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="highlight-item">
                <motion.span 
                  className="checkmark"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✔
                </motion.span>
                <span>Experienced Teachers</span>
              </div>
              <div className="highlight-item">
                <motion.span 
                  className="checkmark"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✔
                </motion.span>
                <span>Small Batches</span>
              </div>
              <div className="highlight-item">
                <motion.span 
                  className="checkmark"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✔
                </motion.span>
                <span>Board Exam Focus</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/enquiry" className="btn btn-primary">
                  Enroll Now
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Short Intro Section */}
      <section className="intro">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Welcome to Gurukul Classes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              At Gurukul Classes, we are dedicated to providing quality education to students of classes 9th and 10th. 
              Our experienced faculty and personalized teaching approach ensure that every student reaches their full potential.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We offer comprehensive courses in Science and Commerce streams, focusing on building strong fundamentals 
              that prepare students for both board exams and future competitive examinations.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;