import { useRef, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './Home/Home';
import About from './About/About';
import Product from './Product/Product';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

function AppContent() {
  const location = useLocation();
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  let lastScrollTop = 0;

  useEffect(() => {
    const container = containerRef.current;

    const isScrolling = (event) => {
      let currentScrollTop = event.target.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else if (currentScrollTop < lastScrollTop) {
        setIsVisible(true);
      }

      lastScrollTop = currentScrollTop;
    };

    container.addEventListener('scroll', isScrolling);

    return () => {
      container.removeEventListener('scroll', isScrolling);
    };
  }, [lastScrollTop]);

  // Map pathname to 'activeNav' string for compatibility with existing Nav component
  let activeNav = 'Home';
  if (location.pathname === '/about') activeNav = 'About';
  if (location.pathname === '/product') activeNav = 'Product';
  if (location.pathname === '/benefits') activeNav = 'Benefits';

  return (
    <div className="app" ref={containerRef}>
      <AnimatePresence>
        <motion.div
          key={isVisible}
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={isVisible ? 'header' : 'header'}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}
        >
          <Nav activeNav={activeNav} containerRef={containerRef} />
        </motion.div>
      </AnimatePresence>

      <div className="main">
        <Routes>
          <Route path="/" element={
            <div className="activeSection">
              <Home />
            </div>
          } />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={
            <div className="activeSection">
              <About />
            </div>
          } />
          <Route path="/product" element={
            <div className="activeSection">
              <Product />
            </div>
          } />
          <Route path="/benefits" element={<Navigate to="/product" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <div className="footer">
        <Footer activeNav={activeNav} />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
