import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles, Filter, X, ChevronRight, Check } from 'lucide-react';
import FoodCard from '../components/FoodCard';
import { IndianArchEmblem, IndianOrnamentDivider } from '../components/IndianMotif';
import SEO from '../components/SEO';
import { menuCategories, menuItems } from '../data/menuData';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  // Filtered menu logic
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Vegetarian filter
      const matchesVeg = !vegOnly || item.isVeg;

      // Search query filter
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesVeg && matchesSearch;
    });
  }, [selectedCategory, vegOnly, searchQuery]);

  return (
    <div className="pt-24 pb-20 bg-espresso text-ivory min-h-screen">
      <SEO
        title="Complete Menu — 48 Heritage Dishes & Café Confections"
        description="Explore the complete menu of THE SPICE COURT. Indian Starters, Royal Main Course, Dum Biryanis, Tandoori Breads, South Indian Crepes, Fusion, Café Beverages and Desserts."
      />

      {/* Menu Header Banner */}
      <section className="relative py-16 sm:py-24 bg-espresso-surface border-b border-gold/20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(181,138,82,0.12)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold mb-4">
            <IndianArchEmblem className="w-4 h-4 text-gold" />
            <span>Grand Epicurean Anthology</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide uppercase text-ivory">
            The Complete Menu
          </h1>

          <IndianOrnamentDivider className="my-5" />

          <p className="font-serif italic text-base sm:text-lg text-ivory-cream/85 max-w-xl mx-auto">
            From clay ovens and sealed dum degs to single-origin espresso extractions. All prices in INR are for demonstration purposes.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="sticky top-16 z-30 bg-espresso-deep/95 backdrop-blur-md border-b border-gold/20 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish, spice, or ingredient..."
                className="w-full bg-espresso border border-gold/30 rounded-full py-2 pl-10 pr-9 text-xs sm:text-sm text-ivory placeholder-ivory-dark/50 focus:outline-none focus:border-gold transition-colors"
              />
              <Search className="w-4 h-4 text-gold/70 absolute left-3.5 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-ivory-dark/60 hover:text-ivory"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Veg Only Toggle */}
            <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end">
              <button
                type="button"
                onClick={() => setVegOnly(!vegOnly)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border text-xs font-sans font-semibold tracking-wider uppercase transition-all ${
                  vegOnly
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-400 shadow-md'
                    : 'bg-espresso border-gold/25 text-ivory-dark/70 hover:border-gold/50'
                }`}
              >
                <div className="w-3.5 h-3.5 border-2 border-emerald-500 rounded-sm flex items-center justify-center">
                  <div className={`w-1.5 h-1.5 rounded-full ${vegOnly ? 'bg-emerald-400' : 'bg-transparent'}`} />
                </div>
                <span>Pure Vegetarian Only</span>
              </button>

              <span className="text-xs font-sans text-gold/80 font-mono hidden sm:inline">
                {filteredItems.length} Dishes Found
              </span>
            </div>
          </div>

          {/* Category Horizontal Scroll Pills */}
          <div className="mt-4 flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase font-semibold transition-all shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-burgundy text-ivory border border-gold shadow-md'
                    : 'bg-charcoal text-ivory-dark/80 hover:text-gold hover:bg-gold/10 border border-gold/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          /* Empty State */
          <div className="py-20 text-center max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 text-gold mx-auto flex items-center justify-center">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-ivory">No Culinary Matches Found</h3>
            <p className="text-xs sm:text-sm font-sans text-ivory-dark/75">
              We couldn't find any dishes matching "{searchQuery}". Try modifying your search keywords or switching category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setVegOnly(false);
              }}
              className="mt-4 px-6 py-2.5 rounded-full border border-gold bg-burgundy text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-burgundy-light transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Dishes Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} onSelect={setSelectedDish} />
            ))}
          </div>
        )}
      </section>

      {/* Dish Detailed Modal */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-deep/85 backdrop-blur-md p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-charcoal-card max-w-xl w-full rounded-2xl border border-gold/40 shadow-2xl overflow-hidden relative">
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-espresso/80 text-ivory hover:text-gold border border-gold/30 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden bg-espresso">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-card via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="font-serif text-2xl font-bold text-ivory block">
                  {selectedDish.name}
                </span>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="text-sm font-serif font-bold text-gold">
                    ₹{selectedDish.price}
                  </span>
                  <span className="text-xs text-ivory-dark/80 font-sans uppercase tracking-wider">
                    &bull; {selectedDish.category}
                  </span>
                  {selectedDish.isVeg ? (
                    <span className="text-[10px] uppercase font-sans text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/40">
                      Vegetarian
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase font-sans text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/40">
                      Non-Vegetarian
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gold font-sans font-semibold mb-1">
                  Culinary Description
                </h4>
                <p className="text-xs sm:text-sm font-sans text-ivory-dark/90 leading-relaxed">
                  {selectedDish.description}
                </p>
              </div>

              {selectedDish.tags && selectedDish.tags.length > 0 && (
                <div className="pt-2 border-t border-gold/15">
                  <h4 className="text-xs uppercase tracking-widest text-gold font-sans font-semibold mb-2">
                    Tradition &amp; Technique
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDish.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-sans uppercase tracking-wider bg-gold/10 text-gold px-2.5 py-1 rounded border border-gold/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-gold/15 flex items-center justify-between text-xs font-sans">
                <span className="text-ivory-dark/60 text-[11px]">
                  Demo menu entry &bull; Illustrative price
                </span>
                <button
                  onClick={() => setSelectedDish(null)}
                  className="px-5 py-2 rounded-full bg-burgundy hover:bg-burgundy-light text-ivory text-xs uppercase tracking-widest font-semibold border border-gold/40 transition-colors"
                >
                  Close Dish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
