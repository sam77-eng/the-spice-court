import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Utensils,
  Coffee,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Clock,
  Compass,
  Award,
  Flame,
  CheckCircle2,
  X
} from 'lucide-react';
import Hero3D from '../components/Hero3D';
import FoodCard from '../components/FoodCard';
import OrnamentalEmblem3D from '../components/OrnamentalEmblem3D';
import { IndianArchEmblem, IndianOrnamentDivider } from '../components/IndianMotif';
import SEO from '../components/SEO';
import { menuItems } from '../data/menuData';
import { galleryItems } from '../data/galleryData';
import { restaurantConfig } from '../config/restaurantConfig';

export default function Home() {
  const [selectedDish, setSelectedDish] = useState(null);

  // Selected highlight dishes for Section D
  const featuredDishes = menuItems.filter((dish) =>
    ['mc-4', 'by-2', 'st-1', 'mc-2', 'cfb-2', 'ds-4'].includes(dish.id)
  );

  // Curated preview images for Section G
  const previewGallery = galleryItems.slice(0, 6);

  return (
    <div className="relative bg-espresso text-ivory">
      <SEO
        title="Royal Indian Restaurant & Contemporary Café"
        description="A Royal Taste. A Modern Experience. The Spice Court combines Indian palace heritage, traditional multi-cuisine, and luxury contemporary café culture."
      />

      {/* =========================================================================
          SECTION A: SIGNATURE 3D HERO
          ========================================================================= */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Immersive 3D Palace Entrance Scene */}
        <Hero3D />

        {/* Foreground Content (Never blocked by 3D, z-10) */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Subtle Crown / Arch Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-charcoal/80 border border-gold/40 backdrop-blur-md mb-6 shadow-gold-glow animate-fadeIn">
            <IndianArchEmblem className="w-4 h-4 text-gold" />
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.25em] text-gold uppercase font-semibold">
              Heritage Restaurant &amp; Contemporary Café
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.06em] text-ivory leading-[1.08] uppercase drop-shadow-2xl">
            A Royal Taste.
            <span className="block text-gold-gradient font-light mt-1">
              A Modern Experience.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg font-sans text-ivory-cream/85 font-normal leading-relaxed tracking-wide drop-shadow">
            Discover the art of Indian dining, where timeless flavours meet contemporary hospitality. An immersive palace-inspired sanctuary of culinary excellence.
          </p>

          {/* Call to Actions (Primary & Secondary) */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy text-ivory font-serif tracking-[0.2em] uppercase font-bold text-xs sm:text-sm border border-gold shadow-lg hover:shadow-gold-glow hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Utensils className="w-4 h-4 text-gold-light" />
              <span>Explore Menu</span>
            </Link>

            <Link
              to="/reservations"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-charcoal/80 hover:bg-espresso-light text-ivory font-serif tracking-[0.2em] uppercase font-semibold text-xs sm:text-sm border border-gold/40 hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <Calendar className="w-4 h-4 text-gold" />
              <span>Reserve Your Table</span>
            </Link>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-14 sm:mt-18 flex flex-col items-center text-gold/70 animate-bounce">
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans">Scroll To Enter</span>
            <ChevronDown className="w-4 h-4 mt-1" />
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION B: INTRODUCTION — WHERE HERITAGE MEETS HOSPITALITY
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-espresso-surface border-t border-gold/15 overflow-hidden">
        {/* Subtle background ambient radial light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-burgundy/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              The Essence of The Court
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide text-ivory uppercase">
              Where Heritage Meets Hospitality
            </h2>
            <IndianOrnamentDivider className="my-6" />
            <p className="font-serif italic text-lg sm:text-xl text-ivory-cream/90 max-w-2xl mx-auto">
              "An experience inspired by India's rich culinary traditions and reimagined for the modern table."
            </p>
          </div>

          {/* Editorial Grid: Architecture & Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Architectural Imagery */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                  alt="The Spice Court Palace Interior"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-black/20" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-espresso/90 backdrop-blur-md border border-gold/30">
                  <p className="font-serif text-base text-ivory">The Royal Dining Pavilion</p>
                  <p className="text-[11px] text-gold font-sans tracking-wider uppercase">
                    Cusped sandstone arches &bull; Warm candlelight &bull; Velvet seating
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 rounded-xl overflow-hidden border border-gold/40 shadow-royal-card bg-charcoal p-3">
                <img
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80"
                  alt="Indian Jali architectural detail"
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <p className="text-[10px] font-sans uppercase tracking-widest text-gold text-center">
                  Mughal Jaali Craft
                </p>
              </div>
            </div>

            {/* Right Column: Editorial Text & Values */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-gold-light leading-snug">
                Culinary grandeur sculpted over centuries, brought into the light of contemporary finesse.
              </h3>
              <p className="text-sm sm:text-base font-sans text-ivory-dark/80 leading-relaxed">
                At THE SPICE COURT, dining is elevated to an art form. Inspired by the princely kitchens of Awadh, Rajasthan, and the ancient coastal trade routes, our kitchen crafts each recipe with hand-ground whole spices, slow-burning embers, and pure mountain churned ghee.
              </p>
              <p className="text-sm sm:text-base font-sans text-ivory-dark/80 leading-relaxed">
                Yet, we believe regal hospitality must breathe in harmony with today's lifestyle. Adjacent to our royal dining hall lies a sun-kissed contemporary café lounge, where artisanal estate coffees, French-Indian fusion pastries, and refreshing botanical elixirs offer a relaxed morning and afternoon haven.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gold/20">
                <div className="space-y-1">
                  <span className="font-serif text-xl font-bold text-gold">I. Heritage</span>
                  <p className="text-xs font-sans text-ivory-dark/70">Centuries-old slow dum and tandoor methods.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-serif text-xl font-bold text-gold">II. Modernity</span>
                  <p className="text-xs font-sans text-ivory-dark/70">Contemporary café culture and refined plating.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-serif text-xl font-bold text-gold">III. Warmth</span>
                  <p className="text-xs font-sans text-ivory-dark/70">Uncompromised guest-centered gracious service.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.2em] uppercase font-semibold text-gold hover:text-gold-light transition-colors group"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION C: SIGNATURE EXPERIENCES
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-espresso border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              Curated Encounters
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-wide text-ivory uppercase">
              Signature Experiences
            </h2>
            <IndianOrnamentDivider className="my-6" />
            <p className="text-sm sm:text-base font-sans text-ivory-dark/80 max-w-xl mx-auto">
              Three distinctive expressions of Indian culinary warmth tailored for your special moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurantConfig.experiences.map((exp) => (
              <div
                key={exp.id}
                className="group relative bg-charcoal-card rounded-2xl overflow-hidden border border-gold/25 hover:border-gold/70 transition-all duration-500 shadow-xl hover:shadow-royal-card flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-espresso-surface">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-card via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-sans font-semibold bg-espresso/80 backdrop-blur-md text-gold border border-gold/30">
                      {exp.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-ivory group-hover:text-gold-light transition-colors">
                      {exp.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm font-sans text-ivory-dark/75 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gold/20 flex items-center justify-between">
                    <Link
                      to={exp.link}
                      className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.16em] uppercase font-semibold text-gold hover:text-gold-light transition-colors group-hover:translate-x-1 duration-300"
                    >
                      <span>{exp.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION D: SIGNATURE DISHES
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-espresso-surface border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                From The Princely Degs
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-wide text-ivory uppercase">
                Signature Dishes
              </h2>
              <p className="mt-2 text-sm font-sans text-ivory-dark/80 max-w-lg">
                Hand-selected gems embodying our slow cooking mastery, royal Awadhi gravies, and modern café artistry.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-espresso font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow-md shrink-0"
            >
              <span>Explore All 45+ Dishes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredDishes.map((dish) => (
              <FoodCard key={dish.id} item={dish} onSelect={setSelectedDish} />
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION E: THE ART OF DINING (Cinematic Storytelling + 3D Emblem)
          ========================================================================= */}
      <section className="relative py-24 sm:py-36 bg-espresso border-t border-gold/15 overflow-hidden">
        {/* Subtle background radial glow */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-burgundy/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sub-block 1: Spices & The Six Rasas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Alchemy of Spices</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory uppercase leading-tight">
                Stone-Pounded Aromatic Treasures
              </h3>
              <p className="text-sm sm:text-base font-sans text-ivory-dark/80 leading-relaxed">
                True Indian cuisine does not rely on burning heat; it orchestrates a harmonious symphony of six fundamental rasas (flavours). We source organic green cardamom from Kerala's Idukki hills, Mongra saffron from Pampore, Kashmir, and whole dried mace flowers steeped in pure brass cookware.
              </p>
              <p className="text-sm font-sans text-ivory-dark/70 leading-relaxed">
                By gently toasting spices in mountain cow ghee at precise moments of the cooking cycle, we unlock complex essential oils that awaken memory and bring timeless satisfaction to every bite.
              </p>
              <div className="pt-2">
                <Link
                  to="/specials"
                  className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.2em] uppercase font-semibold text-gold hover:text-gold-light transition-colors group"
                >
                  <span>Explore Signature Recipes</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-gold/40 p-2 shadow-2xl bg-charcoal flex items-center justify-center">
                  {/* Interactive 3D Ornamental Emblem Element */}
                  <OrnamentalEmblem3D className="w-full h-full" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-espresso/90 border border-gold/40 text-[10px] uppercase tracking-widest font-sans text-gold shadow-md">
                  Interactive 3D Royal Crest
                </div>
              </div>
            </div>
          </div>

          {/* Sub-block 2: Hospitality & Celebration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                  alt="Fine dining table hospitality"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-black/20" />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] uppercase tracking-widest font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Atithi Devo Bhava</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory uppercase leading-tight">
                The Sanctity of Hospitality
              </h3>
              <p className="text-sm sm:text-base font-sans text-ivory-dark/80 leading-relaxed">
                In classical Indian royal culture, greeting a guest is a sacred ceremony. From the subtle fragrance of jasmine blossoms upon arrival to the attentive, unobtrusive grace of our dining stewards, every detail is considered to make your time memorable.
              </p>
              <p className="text-sm font-sans text-ivory-dark/70 leading-relaxed">
                Whether you are gathering for an intimate anniversary, an extended family feast, or a tranquil solo espresso in our café veranda, you are received as royalty.
              </p>
              <div className="pt-2">
                <Link
                  to="/reservations"
                  className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.2em] uppercase font-semibold text-gold hover:text-gold-light transition-colors group"
                >
                  <span>Reserve In Advance</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION F: CAFÉ EXPERIENCE PREVIEW
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-espresso-surface border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              Contemporary Indulgence
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-wide text-ivory uppercase">
              The Modern Café
            </h2>
            <IndianOrnamentDivider className="my-6" />
            <p className="text-sm sm:text-base font-sans text-ivory-dark/80 max-w-xl mx-auto">
              Single-origin coffees, royal saffron lattes, handcrafted mocktails, and artisanal French-Indian confectionery in a warm, luminous lounge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="bg-charcoal rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80"
                  alt="Single Origin Espresso"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] uppercase tracking-wider font-sans text-gold">Chikmagalur Arabica</span>
                <h4 className="font-serif text-lg font-bold text-ivory mt-1">Artisan Cappuccino</h4>
                <p className="text-xs text-ivory-dark/70 mt-1 line-clamp-2">Double shot layered with velvety microfoam.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-charcoal rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80"
                  alt="Royal Saffron Latte"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] uppercase tracking-wider font-sans text-gold">Signature Infusion</span>
                <h4 className="font-serif text-lg font-bold text-ivory mt-1">Saffron Café Latte</h4>
                <p className="text-xs text-ivory-dark/70 mt-1 line-clamp-2">Pure Kashmiri saffron nectar and steamed cream.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-charcoal rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
                  alt="Emperor's Pomegranate Elixir"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] uppercase tracking-wider font-sans text-gold">Botanical Mocktail</span>
                <h4 className="font-serif text-lg font-bold text-ivory mt-1">Emperor's Elixir</h4>
                <p className="text-xs text-ivory-dark/70 mt-1 line-clamp-2">Cold-pressed pomegranate, star anise &amp; sparkling tonic.</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-charcoal rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
                  alt="Pistachio Cheesecake"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] uppercase tracking-wider font-sans text-gold">Fusion Patisserie</span>
                <h4 className="font-serif text-lg font-bold text-ivory mt-1">Pistachio Cloud</h4>
                <p className="text-xs text-ivory-dark/70 mt-1 line-clamp-2">Iranian pistachios and green cardamom silk.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/cafe"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full border border-gold bg-espresso hover:bg-gold hover:text-espresso font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow-md group"
            >
              <Coffee className="w-4 h-4 text-gold group-hover:text-espresso transition-colors" />
              <span>Step Inside The Café Lounge</span>
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION G: GALLERY PREVIEW
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-espresso border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                The Court Captured
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-wide text-ivory uppercase">
                Visual Gallery
              </h2>
              <p className="mt-2 text-sm font-sans text-ivory-dark/80 max-w-lg">
                Glimpses of palace architecture, aromatic clay oven creations, and intimate dining moments.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-espresso font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow-md shrink-0"
            >
              <span>View Full Gallery (12+ Images)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid Preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {previewGallery.map((img) => (
              <Link
                key={img.id}
                to="/gallery"
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-charcoal border border-gold/20 block shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity flex items-end p-4">
                  <div>
                    <span className="text-[10px] text-gold uppercase tracking-wider font-sans block">{img.category}</span>
                    <p className="text-xs font-serif font-bold text-ivory line-clamp-1">{img.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION H: RESERVATION CTA
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-espresso-deep border-t border-gold/25 overflow-hidden text-center">
        {/* Background Decorative Arch */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <IndianArchEmblem className="w-[600px] h-[600px] text-gold" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <IndianArchEmblem className="w-7 h-7 text-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide text-ivory uppercase">
            Your Table Awaits.
          </h2>

          <IndianOrnamentDivider className="my-6" />

          <p className="font-serif italic text-lg sm:text-xl text-gold-light max-w-xl mx-auto">
            "Make room for a memorable dining experience."
          </p>

          <p className="mt-4 text-xs sm:text-sm font-sans text-ivory-dark/80 max-w-lg mx-auto">
            Join us under the arches of The Spice Court for a celebration of royal culinary heritage, aromatic grandeur, and gracious hospitality.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reservations"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy text-ivory font-serif tracking-[0.2em] uppercase font-bold text-sm border border-gold shadow-lg hover:shadow-gold-glow hover:scale-105 transition-all duration-300"
            >
              RESERVE A TABLE
            </Link>
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-charcoal border border-gold/40 text-ivory hover:text-gold hover:border-gold font-serif tracking-[0.2em] uppercase font-semibold text-xs transition-all"
            >
              View Menu First
            </Link>
          </div>

          <p className="mt-6 text-[10px] font-sans text-ivory-dark/60">
            Portfolio Concept Demonstration &bull; Table bookings are mock demonstrations
          </p>
        </div>
      </section>

      {/* Dish Quick View Modal */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-deep/80 backdrop-blur-sm p-4 animate-fadeIn"
          role="dialog"
        >
          <div className="bg-charcoal-card max-w-lg w-full rounded-2xl border border-gold/40 shadow-2xl overflow-hidden relative">
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-espresso/80 text-ivory hover:text-gold border border-gold/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-card to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="font-serif text-xl font-bold text-ivory block">
                  {selectedDish.name}
                </span>
                <span className="text-xs text-gold font-sans font-medium uppercase tracking-wider">
                  ₹{selectedDish.price} &bull; {selectedDish.category}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm font-sans text-ivory-dark/90 leading-relaxed">
                {selectedDish.description}
              </p>

              {selectedDish.tags && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gold/15">
                  {selectedDish.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-sans uppercase tracking-wider bg-gold/10 text-gold px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-4 flex items-center justify-between">
                <span className="text-[11px] font-sans text-ivory-dark/60">
                  Illustrative culinary item
                </span>
                <Link
                  to="/reservations"
                  className="px-5 py-2 rounded-full bg-burgundy hover:bg-burgundy-light text-ivory text-xs uppercase tracking-widest font-semibold border border-gold/40 transition-colors"
                  onClick={() => setSelectedDish(null)}
                >
                  Reserve For This
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
