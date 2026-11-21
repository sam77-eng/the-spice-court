import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Utensils, Calendar, Flame, Wine, Clock, Award } from 'lucide-react';
import { IndianArchEmblem, IndianOrnamentDivider } from '../components/IndianMotif';
import SEO from '../components/SEO';
import { signatureSpecials } from '../data/menuData';

export default function Specials() {
  return (
    <div className="pt-24 pb-20 bg-espresso text-ivory">
      <SEO
        title="Signature Specials — Editorial Masterpieces"
        description="Explore the flagship culinary creations of THE SPICE COURT. 24-hour slow-cooked Dal Court, Awadhi Dum Biryani in clay vessels, and French-Indian saffron confectionery."
      />

      {/* Header Banner */}
      <section className="relative py-20 sm:py-28 bg-espresso-surface border-b border-gold/20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(114,45,53,0.3)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>The Crown Jewels</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide uppercase text-ivory">
            Signature Specials
          </h1>

          <IndianOrnamentDivider className="my-6" />

          <p className="font-serif italic text-lg sm:text-xl text-ivory-cream/90 max-w-2xl mx-auto leading-relaxed">
            "Rare spices, protracted slow embers, and an uncompromising dedication to royal culinary heritage."
          </p>

          <p className="mt-4 text-xs font-sans text-ivory-dark/70 tracking-wider uppercase">
            Presented as an editorial showcase &bull; Illustrative demo items
          </p>
        </div>
      </section>

      {/* Large Featured Dishes Editorial Flow */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {signatureSpecials.map((special, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={special.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Dish Visual Card */}
              <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-2xl overflow-hidden border border-gold/35 shadow-royal-card group">
                  <img
                    src={special.image}
                    alt={special.name}
                    className="w-full h-[400px] sm:h-[480px] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-black/20" />

                  {/* Floating Price Tag */}
                  <div className="absolute top-5 right-5 bg-burgundy/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-gold/40 shadow-lg">
                    <span className="font-serif text-lg font-bold text-ivory">
                      ₹{special.price}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-5 left-5">
                    <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold bg-espresso/90 text-gold border border-gold/30">
                      {special.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dish Story & Details */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold block">
                    {special.tagline}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory uppercase leading-tight">
                    {special.name}
                  </h2>
                </div>

                <p className="text-sm sm:text-base font-sans text-ivory-dark/85 leading-relaxed">
                  {special.description}
                </p>

                {/* Cultural Story Quote */}
                <div className="p-4 rounded-xl bg-charcoal border-l-2 border-gold space-y-1">
                  <p className="font-serif italic text-sm text-gold-light">
                    "{special.story}"
                  </p>
                </div>

                {/* Highlights Tags */}
                {special.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {special.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-xs font-sans uppercase tracking-wider bg-gold/10 text-gold px-3 py-1 rounded-md border border-gold/25"
                      >
                        <Sparkles className="w-3 h-3 mr-1.5" />
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                {/* Pairing Note */}
                <div className="flex items-start space-x-3 pt-2 text-xs font-sans text-ivory-dark/80">
                  <Wine className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-gold font-semibold uppercase tracking-wider">Suggested Pairing: </strong>
                    {special.pairing}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center space-x-4">
                  <Link
                    to="/reservations"
                    className="px-6 py-3 rounded-full bg-burgundy hover:bg-burgundy-light text-ivory font-serif tracking-[0.16em] uppercase font-bold text-xs border border-gold shadow-md transition-all flex items-center space-x-2"
                  >
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>Reserve For This Feast</span>
                  </Link>

                  <Link
                    to="/menu"
                    className="text-xs font-sans tracking-widest uppercase text-gold hover:text-gold-light underline underline-offset-4"
                  >
                    View In Menu &rarr;
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-espresso-surface border-t border-gold/20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <IndianArchEmblem className="w-8 h-8 text-gold mx-auto mb-4" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-ivory">
            Seeking A Bespoke Tasting Menu?
          </h3>
          <p className="mt-2 text-xs sm:text-sm font-sans text-ivory-dark/80">
            For celebratory banquets and customized royal spreads, our private dining concierge welcomes your requests.
          </p>
          <div className="mt-6">
            <Link
              to="/reservations"
              className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy text-ivory font-serif tracking-[0.2em] uppercase font-bold text-xs border border-gold shadow-lg hover:shadow-gold-glow transition-all"
            >
              Inquire About Private Dining
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
