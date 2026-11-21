import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Heart, ShieldCheck, ArrowRight, Utensils, Feather, Eye } from 'lucide-react';
import { IndianArchEmblem, IndianOrnamentDivider } from '../components/IndianMotif';
import SEO from '../components/SEO';
import { restaurantConfig } from '../config/restaurantConfig';

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-espresso text-ivory">
      <SEO
        title="Our Story & Culinary Philosophy"
        description="Explore the fictional brand concept and culinary philosophy of THE SPICE COURT — an homage to Indian palace heritage, the six rasas, and modern café sophistication."
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-espresso-surface border-b border-gold/20 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(114,45,53,0.25)_0%,_transparent_70%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold mb-6">
            <IndianArchEmblem className="w-4 h-4 text-gold" />
            <span>The Concept Story</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide uppercase text-ivory leading-tight">
            The Living Heritage of
            <span className="block text-gold-gradient font-light mt-1">The Spice Court</span>
          </h1>

          <IndianOrnamentDivider className="my-6" />

          <p className="font-serif italic text-lg sm:text-xl text-gold-light/95 max-w-2xl mx-auto leading-relaxed">
            "A poetic fusion of imperial Indian dining traditions and contemporary luxury café sensibility."
          </p>

          <div className="mt-8">
            <span className="inline-flex items-center text-xs tracking-wider uppercase font-sans text-ivory-dark/70 bg-charcoal/80 px-4 py-1.5 rounded-full border border-gold/20">
              <ShieldCheck className="w-4 h-4 mr-2 text-gold" />
              Imaginary Design Portfolio Showcase &bull; Not an operating restaurant
            </span>
          </div>
        </div>
      </section>

      {/* Brand Concept & Vision */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
              The Creative Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory uppercase leading-tight">
              Honouring The Ancient, Inspiring The Present
            </h2>
            <p className="text-sm sm:text-base font-sans text-ivory-dark/85 leading-relaxed">
              THE SPICE COURT is conceived as an architectural and epicurean bridge between India's imperial court traditions and the refined ease of modern international fine dining. In the royal courts of Awadh, Rajasthan, and the Deccan, meals were grand celebrations of art, music, and seasonal abundance.
            </p>
            <p className="text-sm sm:text-base font-sans text-ivory-dark/85 leading-relaxed">
              Our concept reinterprets this imperial splendor for contemporary patrons. Rather than heavy, overwhelming formalities, we present an airy, welcoming sanctuary where rich curries, fragrant biryanis, artisanal pour-overs, and delicate pastries coexist in harmonious luxury.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-royal-card">
              <img
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80"
                alt="Rajasthani palace architectural motif"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-espresso/90 backdrop-blur-md border border-gold/30">
                <p className="font-serif text-base text-ivory font-semibold">Architectural Inspiration</p>
                <p className="text-xs text-gold font-sans">Mughal multifoil arches, carved sandstone pillars &amp; antique brass warmth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Philosophy: The Six Rasas & The Dum Tradition */}
      <section className="py-20 bg-espresso-surface border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              The Gastronomic Soul
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-wide text-ivory uppercase">
              Our Culinary Philosophy
            </h2>
            <IndianOrnamentDivider className="my-6" />
            <p className="text-sm sm:text-base font-sans text-ivory-dark/80">
              Rooted in the timeless Indian science of taste balance, where food nurtures the body and uplifts the spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-charcoal p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ivory">The Six Rasas</h3>
              <p className="text-xs sm:text-sm font-sans text-ivory-dark/75 leading-relaxed">
                Ayurvedic traditions balance Madhura (sweet), Amla (sour), Lavana (salty), Tikta (bitter), Katu (pungent), and Kashaya (astringent). Every court banquet menu is curated to harmonize all six rasas for complete satiety.
              </p>
            </div>

            <div className="bg-charcoal p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <Feather className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ivory">The Art of Dum</h3>
              <p className="text-xs sm:text-sm font-sans text-ivory-dark/75 leading-relaxed">
                Pukhtan (slow breathing) cooking seals pots with natural dough. As moisture gently rises and recirculates under the lid, meats and rice steam in their own juices without losing volatile herbal fragrances.
              </p>
            </div>

            <div className="bg-charcoal p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ivory">Artisanal Café Atelier</h3>
              <p className="text-xs sm:text-sm font-sans text-ivory-dark/75 leading-relaxed">
                Single-estate Indian coffee beans roasted to medium-dark profiles, combined with indigenous spices like green cardamom, saffron, and raw jaggery for modern coffee connoisseurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Values */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Dining Table Setting"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
              The Code of Hospitality
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory uppercase leading-tight">
              Atithi Devo Bhava Reimagined
            </h2>
            <p className="text-sm sm:text-base font-sans text-ivory-dark/85 leading-relaxed">
              "The guest is divine." This ancient Indian tenet drives our service philosophy. At The Spice Court, our attendants practice gracious attentiveness: anticipating needs without intruding upon conversation, sharing the story of each dish with passion, and creating an atmosphere of unhurried elegance.
            </p>
            <div className="pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-light text-ivory font-serif tracking-[0.2em] uppercase font-bold text-xs border border-gold shadow-md transition-all"
              >
                <Utensils className="w-4 h-4 text-gold" />
                <span>View The Complete Menu</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
