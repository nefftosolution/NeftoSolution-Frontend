import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import InteractiveCTA from './Components/InteractiveCTA';

// Lazy Load Pages
const Home = lazy(() => import('./Pages/Home'));
const Services = lazy(() => import('./Pages/Services'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const WebDevelopment = lazy(() => import('./Pages/WebDevelopment'));
const AppDevelopment = lazy(() => import('./Pages/AppDevelopment'));
const Artificial = lazy(() => import('./Pages/Artificial'));
const GraphicDesignPage = lazy(() => import('./Pages/Graphic'));
const DigitalMarketing = lazy(() => import('./Pages/DigitalMarketing'));
const SEO = lazy(() => import('./Pages/Seo'));

// Helper: Page change hone par scroll top par le janay ke liye
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading Fallback Component
const Loader = () => (
  <div className="flex items-center justify-center min-h-[70vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
       
        <main className="grow">
          <Suspense fallback={<Loader />}>
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
          </Suspense>
        </main>
        
        <InteractiveCTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;