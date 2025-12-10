import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Find the main scrollable container
      const mainContainer = document.querySelector('main');
      if (mainContainer && mainContainer.scrollTop > 300) {
        setIsVisible(true);
      } else if (window.scrollY > 300) {
        // Fallback for window scroll
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      mainContainer.addEventListener('scroll', toggleVisibility);
    }
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      if (mainContainer) {
        mainContainer.removeEventListener('scroll', toggleVisibility);
      }
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      mainContainer.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-8 right-8 p-3 bg-editor-keyword text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
