import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ReferencesPage from './pages/ReferencesPage';
import ContactPage from './pages/ContactPage';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
} as const;

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      {!loading && (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">
             <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Routes location={location}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/hakkimizda" element={<AboutPage />} />
                  <Route path="/hizmetler" element={<ServicesPage />} />
                  <Route path="/referanslar" element={<ReferencesPage />} />
                  <Route path="/iletisim" element={<ContactPage />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
