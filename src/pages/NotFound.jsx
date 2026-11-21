import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Utensils, Calendar } from 'lucide-react';
import { IndianArchEmblem, IndianOrnamentDivider } from '../components/IndianMotif';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-espresso text-ivory flex items-center justify-center">
      <SEO
        title="404 — Palace Gateway Not Found"
        description="The royal court chamber you seek could not be located. Return to the grand dining halls of THE SPICE COURT."
      />

      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="relative inline-block mb-6">
          <IndianArchEmblem className="w-24 h-24 text-gold mx-auto animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl -z-10" />
        </div>

        <h1 className="font-serif text-6xl sm:text-7xl font-bold tracking-widest text-gold-gradient">
          404
        </h1>

        <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wide text-ivory">
          Chamber Not Found
        </h2>

        <IndianOrnamentDivider className="my-6" />

        <p className="font-sans text-xs sm:text-sm text-ivory-dark/80 leading-relaxed max-w-md mx-auto">
          The palace alcove or page you requested does not exist or has been escorted elsewhere. Allow us to guide you back to our dining chambers.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-burgundy hover:bg-burgundy-light text-ivory font-serif tracking-[0.16em] uppercase font-semibold text-xs border border-gold shadow-md transition-all flex items-center space-x-2"
          >
            <Home className="w-4 h-4 text-gold" />
            <span>Return Home</span>
          </Link>

          <Link
            to="/menu"
            className="px-6 py-3 rounded-full bg-charcoal border border-gold/40 text-ivory hover:text-gold hover:border-gold font-serif tracking-[0.16em] uppercase font-semibold text-xs transition-all flex items-center space-x-2"
          >
            <Utensils className="w-4 h-4 text-gold" />
            <span>Explore Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
