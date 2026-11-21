import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { IndianArchEmblem, IndianOrnamentDivider } from './IndianMotif';
import { restaurantConfig } from '../config/restaurantConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-espresso-deep border-t border-gold/25 pt-16 pb-12 overflow-hidden text-ivory">
      {/* Decorative top arch border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-gold/15">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <IndianArchEmblem className="w-10 h-10 text-gold" />
              <div>
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-ivory block uppercase">
                  THE SPICE COURT
                </span>
                <span className="text-[9px] tracking-[0.25em] text-gold uppercase font-sans font-semibold">
                  Heritage Restaurant & Café
                </span>
              </div>
            </div>

            <p className="font-serif italic text-sm text-gold-light/90">
              "{restaurantConfig.brand.tagline}"
            </p>

            <p className="text-xs text-ivory-dark/80 font-sans leading-relaxed">
              An imaginary luxury dining sanctuary where traditional Indian royal recipes meet modern café culture. Designed as a high-concept portfolio demonstration.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center text-[10px] tracking-widest uppercase bg-gold/10 text-gold px-2.5 py-1 rounded border border-gold/25">
                <ShieldCheck className="w-3 h-3 mr-1.5" />
                Portfolio Concept Demo
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-widest uppercase text-gold font-semibold flex items-center space-x-2">
              <span>Explore Court</span>
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-sans">
              <li>
                <Link to="/" className="text-ivory/80 hover:text-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ivory/80 hover:text-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full mr-2" />
                  Our Story & Heritage
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-ivory/80 hover:text-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full mr-2" />
                  Complete Menu (45+ Dishes)
                </Link>
              </li>
              <li>
                <Link to="/specials" className="text-ivory/80 hover:text-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full mr-2" />
                  Signature Specials
                </Link>
              </li>
              <li>
                <Link to="/cafe" className="text-ivory/80 hover:text-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full mr-2" />
                  The Modern Café
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-ivory/80 hover:text-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full mr-2" />
                  Visual Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Experience & Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-widest uppercase text-gold font-semibold flex items-center space-x-2">
              <span>Service Hours</span>
            </h4>
            <div className="space-y-3 text-xs font-sans">
              {restaurantConfig.contact.hours.map((h, i) => (
                <div key={i} className="border-l border-gold/30 pl-3">
                  <p className="font-medium text-ivory">{h.days}</p>
                  <p className="text-gold-light font-mono text-[11px]">{h.hours}</p>
                  <p className="text-[10px] text-ivory-dark/60">{h.category}</p>
                </div>
              ))}
            </div>
            <div className="pt-1">
              <Link
                to="/reservations"
                className="inline-block text-xs uppercase tracking-widest text-gold hover:text-gold-light underline underline-offset-4 decoration-gold/50 hover:decoration-gold transition-all"
              >
                Reserve in Advance &rarr;
              </Link>
            </div>
          </div>

          {/* Col 4: Contact & Venue (Clearly marked demo placeholders) */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-widest uppercase text-gold font-semibold flex items-center space-x-2">
              <span>Venue Inquiries</span>
            </h4>
            <div className="space-y-2.5 text-xs font-sans text-ivory/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-ivory font-medium">{restaurantConfig.contact.address.line1}</p>
                  <p className="text-[11px] text-ivory-dark/70">{restaurantConfig.contact.address.line2}, {restaurantConfig.contact.address.city}</p>
                  <span className="text-[10px] text-gold/70 italic">[Demo Placeholder]</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <span className="text-ivory font-mono text-xs">{restaurantConfig.contact.phones[0].number}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="text-ivory text-xs">{restaurantConfig.contact.emails[0].address}</span>
              </div>
            </div>

            {/* Demo Social Badges */}
            <div className="pt-2">
              <p className="text-[11px] tracking-wider uppercase text-gold/70 mb-2">Connect (Demo Links)</p>
              <div className="flex space-x-2">
                {restaurantConfig.socials.map((soc) => (
                  <span
                    key={soc.name}
                    className="px-2.5 py-1 text-[11px] rounded bg-charcoal border border-gold/20 text-ivory/70 hover:text-gold hover:border-gold transition-colors cursor-pointer"
                    title={`${soc.name} Demo Placeholder`}
                  >
                    {soc.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory-dark/60 font-sans gap-4">
          <p>
            &copy; {new Date().getFullYear()} THE SPICE COURT. Crafted as an imaginary luxury portfolio demonstration. Not an active commercial business.
          </p>

          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-gold transition-colors">Contact & Location</Link>
            <Link to="/reservations" className="hover:text-gold transition-colors">Reservations</Link>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-espresso transition-all group"
              aria-label="Back to Top"
            >
              <span className="text-[11px] uppercase tracking-wider font-semibold">Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
