import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { IndianArchEmblem } from './components/IndianMotif';

// Eager load Home for instant first impression
import Home from './pages/Home';

// Lazy load other routes for optimal performance
const About = lazy(() => import('./pages/About'));
const Menu = lazy(() => import('./pages/Menu'));
const Specials = lazy(() => import('./pages/Specials'));
const Cafe = lazy(() => import('./pages/Cafe'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Reservations = lazy(() => import('./pages/Reservations'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-espresso text-ivory">
      <div className="relative p-3 rounded-full bg-gold/10 border border-gold/30 animate-pulse">
        <IndianArchEmblem className="w-12 h-12 text-gold animate-spin" />
      </div>
      <p className="mt-4 font-serif text-sm tracking-[0.2em] text-gold uppercase">
        Entering Chamber...
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-espresso text-ivory font-sans selection:bg-gold selection:text-espresso">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/specials" element={<Specials />} />
              <Route path="/cafe" element={<Cafe />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
