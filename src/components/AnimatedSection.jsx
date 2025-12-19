import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0.1, 
  animationType = 'fadeUp',
  duration = 0.6 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
      case 'fadeDown':
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        };
      case 'fadeLeft':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'fadeRight':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate: -10 },
          visible: { opacity: 1, rotate: 0 }
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;