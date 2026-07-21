import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

// Service Pages Imports
import WebDevelopment from './Pages/WebDevelopment';
import AppDevelopment from './Pages/AppDevelopment';
import Artificial from './Pages/Artificial';
import GraphicDesignPage from './Pages/Graphic';
import DigitalMarketing from './Pages/DigitalMarketing';
import SEO from './Pages/Seo';
import InteractiveCTA from './Components/InteractiveCTA';

// Helper: Page change hone par scroll top par le janay ke liye
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
       
        <Routes>
          {/* Main Navigation Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Individual Services Routes */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/ai-solutions" element={<Artificial />} />
          <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo" element={<SEO />} />
        </Routes>
        <InteractiveCTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;