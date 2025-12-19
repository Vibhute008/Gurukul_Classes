import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Results', href: '/results' },
    { name: 'Contact', href: '/contact' }
  ];

  const courses = [
    { name: 'Class 11 & 12 CBSE', href: '#' },
    { name: 'Foundation Course', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-logo"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Gurukul Classes</h2>
            <p>
              India's leading coaching institute for JEE, NEET, and Board Examinations with over 18 years of excellence.
            </p>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Courses</h3>
            <ul>
              {courses.map((course, index) => (
                <motion.li 
                  key={course.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <a href={course.href}>{course.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="copyright">
            &copy; {new Date().getFullYear()} Gurukul Classes. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;