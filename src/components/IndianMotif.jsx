import React from 'react';

/**
 * Reusable Indian architectural and ornamental vector motifs
 */

export function IndianArchEmblem({ className = "w-8 h-8", color = "#B58A52" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 12 C36 24 26 38 26 58 C26 76 36 86 50 86 C64 86 74 76 74 58 C74 38 64 24 50 12 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeMiterlimit="10"
      />
      <path
        d="M50 24 C40 33 34 45 34 60 C34 70 41 77 50 77 C59 77 66 70 66 60 C66 45 60 33 50 24 Z"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity="0.6"
      />
      {/* Central Star Anise / Lotus Motif */}
      <circle cx="50" cy="54" r="3.5" fill={color} />
      <path d="M50 38 L52 48 L62 50 L52 52 L50 62 L48 52 L38 50 L48 48 Z" fill={color} />
      <circle cx="50" cy="18" r="2" fill={color} />
      <circle cx="50" cy="80" r="2" fill={color} />
    </svg>
  );
}

export function IndianOrnamentDivider({ className = "w-full my-6", color = "#B58A52" }) {
  return (
    <div className={`flex items-center justify-center space-x-3 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="flex items-center space-x-1.5 text-gold">
        <span className="w-1.5 h-1.5 rotate-45 border border-gold" />
        <IndianArchEmblem className="w-5 h-5 text-gold" color={color} />
        <span className="w-1.5 h-1.5 rotate-45 border border-gold" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </div>
  );
}

export function PalaceArchSilhouette({ className = "w-full h-auto", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 200 60" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 60 L0 30 Q30 30 50 20 Q70 10 90 2 Q100 0 110 2 Q130 10 150 20 Q170 30 200 30 L200 60 Z"
        fill={color}
      />
    </svg>
  );
}
