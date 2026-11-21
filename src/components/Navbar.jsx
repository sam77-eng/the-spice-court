import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Utensils, Coffee, ChevronRight, Phone } from 'lucide-react';
import { IndianArchEmblem } from './IndianMotif';
import { restaurantConfig } from '../config/restaurantConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer upon route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Our Story" },
    { to: "/menu", label: "Menu" },
    { to: "/specials", label: "Specials" },
    { to: "/cafe", label: "Café" },
    { to: "/gallery", label: "Gallery" },
    { to: "/reservations", label: "Reservations" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-espresso/95 backdrop-blur-md py-3 shadow-xl border-b border-gold/20'
            : 'bg-gradient-to-b from-espresso-deep/90 via-espresso/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Emblem */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative p-1 rounded-full transition-transform duration-500 group-hover:rotate-12">
                <IndianArchEmblem className="w-9 h-9 text-gold transition-colors duration-300 group-hover:text-gold-light" />
                <div className="absolute inset-0 rounded-full bg-gold/10 blur-sm -z-10 group-hover:bg-gold/20" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-ivory group-hover:text-gold-light transition-colors uppercase">
                  THE SPICE COURT
                </span>
                <span className="text-[9px] tracking-[0.28em] text-gold uppercase font-sans font-medium -mt-0.5">
                  Restaurant & Café
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-xs tracking-[0.16em] uppercase font-sans font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-gold'
                        : 'text-ivory-cream/80 hover:text-gold hover:bg-gold/5 rounded'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-[2px] bg-gold rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/reservations"
                className="group relative inline-flex items-center space-x-2 px-5 py-2.5 rounded-full overflow-hidden border border-gold bg-burgundy/80 hover:bg-burgundy text-ivory transition-all duration-300 shadow-md hover:shadow-gold-glow hover:border-gold-light"
              >
                <Calendar className="w-3.5 h-3.5 text-gold-light group-hover:rotate-12 transition-transform" />
                <span className="text-xs font-semibold tracking-[0.16em] uppercase font-sans">
                  Book A Table
                </span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <Link
                to="/reservations"
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-gold/70 bg-burgundy/90 text-ivory text-[10px] tracking-wider uppercase font-semibold"
              >
                Book
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-ivory hover:text-gold hover:bg-gold/10 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-espresso-deep/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-espresso border-l border-gold/30 shadow-2xl p-6 pt-24 flex flex-col justify-between transform transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-3 pb-5 border-b border-gold/20">
              <IndianArchEmblem className="w-8 h-8 text-gold" />
              <div>
                <p className="font-serif text-lg font-bold text-ivory tracking-widest">
                  THE SPICE COURT
                </p>
                <p className="text-[10px] text-gold tracking-widest uppercase">
                  A Royal Taste. A Modern Experience.
                </p>
              </div>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-sans tracking-widest uppercase transition-colors ${
                      isActive
                        ? 'bg-burgundy/60 text-gold font-semibold border-l-2 border-gold'
                        : 'text-ivory/80 hover:text-gold hover:bg-gold/5'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-gold/20 space-y-3">
            <Link
              to="/reservations"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-burgundy hover:bg-burgundy-light text-ivory text-xs font-semibold tracking-widest uppercase border border-gold/50 shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4 text-gold-light" />
              <span>Reserve Your Table</span>
            </Link>
            <p className="text-center text-[11px] text-ivory-dark/60 font-sans">
              Portfolio Concept • Demonstration Only
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
