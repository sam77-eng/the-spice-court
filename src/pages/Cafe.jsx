import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Cake, GlassWater, Sun, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { IndianArchEmblem, IndianOrnamentDivider } from '../components/IndianMotif';
import SEO from '../components/SEO';
import { menuItems } from '../data/menuData';

export default function Cafe() {
  // Café items extracted from menuData
  const cafeBeverages = menuItems.filter((i) => i.category === 'cafe');
  const cafeDesserts = menuItems.filter((i) => i.category === 'desserts');

  return (
    <div className="pt-24 pb-20 bg-espresso text-ivory">
      <SEO
        title="The Modern Café — Artisanal Coffee & Contemporary Patisserie"
        description="Relax in the sunlit café lounge at THE SPICE COURT. Single-origin Chikmagalur Arabica, Kashmiri saffron lattes, pistachio cloud cheesecakes, and botanical mocktails."
      />

      {/* Lighter, Warmer Café Hero */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-b from-espresso-surface via-espresso to-espresso-deep border-b border-gold/25 overflow-hidden">
        {/* Warm amber light wash */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/40 text-gold text-xs uppercase tracking-widest font-semibold mb-6">
            <Coffee className="w-4 h-4 text-gold" />
            <span>The Café Lounge Atelier</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide uppercase text-ivory">
            Artisanal Coffee &amp;
            <span className="block text-gold-gradient font-light mt-1">
              Contemporary Patisserie
            </span>
          </h1>

          <IndianOrnamentDivider className="my-6" />

          <p className="font-serif italic text-lg sm:text-xl text-ivory-cream/90 max-w-2xl mx-auto leading-relaxed">
            "A sunlit oasis where single-origin Indian coffee estates meet delicate French-Indian fusion pastries."
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/menu?category=cafe"
              className="px-8 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-light text-ivory font-serif tracking-[0.16em] uppercase font-bold text-xs border border-gold shadow-md transition-all"
            >
              Explore Full Café Menu
            </Link>
            <Link
              to="/reservations"
              className="px-8 py-3.5 rounded-full bg-charcoal border border-gold/40 text-ivory hover:text-gold font-serif tracking-[0.16em] uppercase font-semibold text-xs transition-all"
            >
              Reserve Café Lounge Table
            </Link>
          </div>
        </div>
      </section>

      {/* The Roasting Story & Ambience */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
                alt="Sunlit Café Lounge at The Spice Court"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold font-sans font-semibold">
              <Sun className="w-4 h-4 text-gold" />
              <span>Morning To Dusk Sanctuaries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory uppercase leading-tight">
              Single-Origin Estates &amp; Spiced Infusions
            </h2>
            <p className="text-sm sm:text-base font-sans text-ivory-dark/85 leading-relaxed">
              India produces some of the world's most fragrant shade-grown coffees. Sourced directly from sustainable estates in Chikmagalur and the Baba Budan Giri ranges, our Arabica and Robusta beans are roasted in small batches to highlight notes of dark cocoa, roasted hazelnuts, and wild honey.
            </p>
            <p className="text-sm sm:text-base font-sans text-ivory-dark/85 leading-relaxed">
              Beyond traditional espresso extractions, our baristas craft signature heritage beverages: saffron-scented café lattes, cold coffees shaken with organic cream and cracked vanilla pods, and fragrant imperial masala chai brewed in copper vessels.
            </p>
          </div>
        </div>
      </section>

      {/* Coffee Showcase Grid */}
      <section className="py-20 bg-espresso-surface border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              Espresso &amp; Brew Bar
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-wide text-ivory uppercase">
              Handcrafted Beverages
            </h2>
            <IndianOrnamentDivider className="my-6" />
            <p className="text-sm sm:text-base font-sans text-ivory-dark/80">
              Poured with precision, celebrated for aromatic depth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cafeBeverages.slice(0, 6).map((drink) => (
              <div
                key={drink.id}
                className="bg-charcoal rounded-xl overflow-hidden border border-gold/25 hover:border-gold/60 transition-all p-5 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-espresso">
                    <img
                      src={drink.image}
                      alt={drink.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-burgundy/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold/40 text-xs font-serif font-bold text-ivory">
                      ₹{drink.price}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ivory group-hover:text-gold transition-colors">
                    {drink.name}
                  </h3>
                  <p className="mt-2 text-xs font-sans text-ivory-dark/75 leading-relaxed">
                    {drink.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gold/15 flex items-center justify-between text-[11px] font-sans text-gold">
                  <span>{drink.tags?.[0] || 'Artisanal'}</span>
                  <span>Demo Price</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desserts & Patisserie */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            The Confectionery Atelier
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-wide text-ivory uppercase">
            Desserts &amp; Pastries
          </h2>
          <IndianOrnamentDivider className="my-6" />
          <p className="text-sm sm:text-base font-sans text-ivory-dark/80">
            A celebration of royal Indian mithai and French pastry arts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cafeDesserts.slice(0, 6).map((dessert) => (
            <div
              key={dessert.id}
              className="bg-charcoal rounded-xl overflow-hidden border border-gold/25 hover:border-gold/60 transition-all p-5 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-espresso">
                  <img
                    src={dessert.image}
                    alt={dessert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-burgundy/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold/40 text-xs font-serif font-bold text-ivory">
                    ₹{dessert.price}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-ivory group-hover:text-gold transition-colors">
                  {dessert.name}
                </h3>
                <p className="mt-2 text-xs font-sans text-ivory-dark/75 leading-relaxed">
                  {dessert.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gold/15 flex items-center justify-between text-[11px] font-sans text-gold">
                <span>{dessert.tags?.[0] || 'Pastry Atelier'}</span>
                <span>Demo Price</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy text-ivory font-serif tracking-[0.2em] uppercase font-bold text-xs border border-gold shadow-md hover:shadow-gold-glow transition-all"
          >
            <span>Explore All 45+ Menu Dishes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
