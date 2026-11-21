import React from 'react';
import { Flame, Sparkles } from 'lucide-react';

/**
 * Premium layered Food Card component with veg/non-veg indicator,
 * INR demo price, image zoom on hover, and dietary badges.
 */
export default function FoodCard({ item, onSelect }) {
  const { name, category, price, isVeg, spiceLevel, description, image, tags } = item;

  return (
    <div
      onClick={() => onSelect && onSelect(item)}
      className="group relative bg-charcoal-card rounded-xl overflow-hidden border border-gold/20 hover:border-gold/60 transition-all duration-500 shadow-lg hover:shadow-royal-card flex flex-col cursor-pointer"
    >
      {/* Food Photography Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-espresso-surface">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-card via-transparent to-black/30 opacity-70 group-hover:opacity-50 transition-opacity" />

        {/* Veg / Non-Veg Indicator Icon (Standard Indian FSSAI-style emblem) */}
        <div className="absolute top-3 left-3 bg-espresso/90 backdrop-blur-md p-1.5 rounded-md border border-gold/30 shadow-md">
          <div
            className={`w-3.5 h-3.5 border-2 rounded-sm flex items-center justify-center ${
              isVeg ? 'border-emerald-500' : 'border-rose-600'
            }`}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                isVeg ? 'bg-emerald-500' : 'bg-rose-600'
              }`}
            />
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-burgundy/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold/40 shadow-md">
          <span className="font-serif font-bold text-sm text-ivory tracking-wider">
            ₹{price}
          </span>
        </div>

        {/* Spice Level Indicator if applicable */}
        {spiceLevel && spiceLevel !== "None" && (
          <div className="absolute bottom-3 left-3 bg-espresso/85 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] tracking-wider uppercase font-sans text-gold-light flex items-center space-x-1 border border-gold/20">
            <Flame className="w-3 h-3 text-gold" />
            <span>{spiceLevel} Spice</span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] tracking-wider uppercase font-sans font-medium text-gold/80 bg-gold/10 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Dish Title */}
          <h3 className="font-serif text-lg font-bold text-ivory group-hover:text-gold-light transition-colors line-clamp-1">
            {name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs font-sans text-ivory-dark/75 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Bottom subtle divider and explore prompt */}
        <div className="mt-4 pt-3 border-t border-gold/15 flex items-center justify-between text-[11px] font-sans text-gold">
          <span className="uppercase tracking-widest text-[10px] text-ivory-dark/60">
            Illustrative Demo Item
          </span>
          <span className="group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
            <span>Details</span>
            <span>&rarr;</span>
          </span>
        </div>
      </div>
    </div>
  );
}
