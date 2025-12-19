import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/image.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Results', href: '/results' },
  ];

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Gurukul Classes Logo" className="logo" />
          <div>
            <h1 className="site-name">Gurukul Classes</h1>
            <p className="tagline">Excellence in Education</p>
          </div>
        </Link>
        
        <button 
          className="menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        
        <AnimatePresence>
          <motion.nav 
            className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
          >
       
            
            {/* Close button for mobile - only shown on mobile */}
            {isMobileMenuOpen && (
              <button 
                className="mobile-menu-close" 
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                ×
              </button>
            )}
            
            <ul>
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink 
                    to={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => isActive ? 'active' : ''}
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <NavLink 
                  to="/enquiry" 
                  className="btn-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Enquire Now
                </NavLink>
              </motion.li>
            </ul>
          </motion.nav>
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;