import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import SkeletonLoader from '../components/SkeletonLoader';
import LoadingSpinner from '../components/LoadingSpinner';
import FloatingElements from '../components/FloatingElements';
import './Demo.css';

const Demo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const simulateDataLoad = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 1500);
  };

  if (isLoading) {
    return (
      <div className="demo-page">
        <div className="container">
          <h1>Demo Page</h1>
          <SkeletonLoader type="card" />
          <div style={{ marginTop: '20px' }}>
            <SkeletonLoader type="list" count={3} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-page">
      <FloatingElements />
      
      <div className="container">
        <AnimatedSection animationType="fadeUp">
          <h1>Enhanced Components Demo</h1>
          <p>Check out all the new animations, loading effects, and interactive elements!</p>
        </AnimatedSection>

        <AnimatedSection animationType="fadeUp" delay={0.2}>
          <div className="demo-section">
            <h2>Loading Animations</h2>
            <div className="button-group">
              <button className="btn btn-primary" onClick={() => setIsLoading(true)}>
                Show Page Loader
              </button>
              <button className="btn btn-secondary" onClick={simulateDataLoad}>
                Show Data Loader
              </button>
            </div>
            
            {showSpinner && (
              <div className="spinner-demo">
                <LoadingSpinner size="large" message="Loading data..." />
              </div>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fadeUp" delay={0.4}>
          <div className="demo-section">
            <h2>Skeleton Loaders</h2>
            <div className="skeleton-demo">
              <h3>Card Skeleton</h3>
              <SkeletonLoader type="card" />
              
              <h3>List Skeleton</h3>
              <SkeletonLoader type="list" count={3} />
              
              <h3>Image Skeleton</h3>
              <SkeletonLoader type="image" />
              
              <h3>Text Skeleton</h3>
              <SkeletonLoader type="text" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fadeUp" delay={0.6}>
          <div className="demo-section">
            <h2>Floating Elements</h2>
            <p>Background floating shapes with smooth animations are visible throughout this page.</p>
            <div className="floating-demo">
              <motion.div 
                className="demo-shape"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="demo-shape"
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fadeUp" delay={0.8}>
          <div className="demo-section">
            <h2>Hover Effects</h2>
            <div className="hover-demo">
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hover Me!
              </motion.button>
              
              <motion.div 
                className="hover-card"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>Interactive Card</h3>
                <p>Hover over this card to see the smooth elevation effect.</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fadeUp" delay={1.0}>
          <div className="demo-section">
            <h2>Navigation</h2>
            <div className="navigation-demo">
              <Link to="/" className="btn btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Demo;