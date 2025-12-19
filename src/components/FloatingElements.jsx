import { motion } from 'framer-motion';
import './FloatingElements.css';

const FloatingElements = () => {
  return (
    <div className="floating-elements-container">
      <motion.div 
        className="floating-element shape-1"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="floating-element shape-2"
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="floating-element shape-3"
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 3, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div 
        className="floating-element shape-4"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
};

export default FloatingElements;