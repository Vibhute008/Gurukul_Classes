import { motion } from 'framer-motion';
import FloatingElements from './FloatingElements';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>
      <FloatingElements />
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <motion.div 
            className="hero-text-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-main-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Excel in Your Studies with <span className="highlight-text">Gurukul Classes</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              India's Leading Coaching Institute for JEE, NEET & Board Exams
            </motion.p>
            
            <motion.div 
              className="hero-features"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <span>Top Rankers</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎓</div>
                <span>Expert Faculty</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📚</div>
                <span>Comprehensive Study Material</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                className="btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Courses
              </motion.button>
              <motion.button 
                className="btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Demo Class
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-image-placeholder">
              <div className="image-content">
                <div className="image-badge">🌟</div>
                <h3>Premium Learning Experience</h3>
                <p>Interactive classes with personalized attention</p>
              </div>
            </div>
            
            <motion.div 
              className="stats-cards"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div 
                className="stat-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-value">10,000+</div>
                <div className="stat-label">Students Trained</div>
              </motion.div>
              <motion.div 
                className="stat-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-value">500+</div>
                <div className="stat-label">Top Rankers</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;