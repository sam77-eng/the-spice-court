import React from 'react';
import { Calendar, Clock, Users, ShieldCheck, Sparkles, MapPin, Phone } from 'lucide-react';
import ReservationForm from '../components/ReservationForm';
import { IndianArchEmblem, IndianOrnamentDivider } from '../components/IndianMotif';
import SEO from '../components/SEO';
import { restaurantConfig } from '../config/restaurantConfig';

export default function Reservations() {
  return (
    <div className="pt-24 pb-20 bg-espresso text-ivory min-h-screen">
      <SEO
        title="Table Reservations — The Royal Court & Café Lounge"
        description="Book your dining table or café lounge seating at THE SPICE COURT. Experience royal Indian multi-cuisine, private dining salons, and personalized service."
      />

      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 bg-espresso-surface border-b border-gold/20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(114,45,53,0.25)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold mb-4">
            <Calendar className="w-4 h-4 text-gold" />
            <span>Hospitality Concierge</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide uppercase text-ivory">
            Table Reservations
          </h1>

          <IndianOrnamentDivider className="my-5" />

          <p className="font-serif italic text-base sm:text-lg text-ivory-cream/90 max-w-xl mx-auto">
            "Your presence honors our court. Let us prepare your dining sanctuary."
          </p>

          <div className="mt-4">
            <span className="text-[11px] font-sans uppercase tracking-widest text-gold bg-charcoal/80 px-3.5 py-1 rounded-full border border-gold/20">
              Demo Concept &bull; Not a live commercial restaurant
            </span>
          </div>
        </div>
      </section>

      {/* Reservation Form & Dining Ambiance Guide */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ReservationForm />
          </div>

          {/* Right Column: Seating Salons Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-charcoal-card p-6 sm:p-8 rounded-2xl border border-gold/30 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-ivory uppercase tracking-wide border-b border-gold/20 pb-3">
                Dining Enclaves
              </h3>

              <div className="space-y-5">
                <div className="border-l-2 border-gold pl-4 space-y-1">
                  <h4 className="font-serif text-lg font-bold text-gold-light">
                    The Main Royal Court
                  </h4>
                  <p className="text-xs font-sans text-ivory-dark/80 leading-relaxed">
                    Surrounded by hand-carved palace archways, soft amber candle lamps, and velvet banquettes. Ideal for families and celebratory gatherings.
                  </p>
                </div>

                <div className="border-l-2 border-gold/50 pl-4 space-y-1">
                  <h4 className="font-serif text-lg font-bold text-gold-light">
                    The Sunlit Café Lounge
                  </h4>
                  <p className="text-xs font-sans text-ivory-dark/80 leading-relaxed">
                    Airy, relaxed, and sun-drenched with bistro tables. Perfect for morning artisanal pour-overs, leisurely afternoon teas, and confectionery.
                  </p>
                </div>

                <div className="border-l-2 border-gold/50 pl-4 space-y-1">
                  <h4 className="font-serif text-lg font-bold text-gold-light">
                    The Private Alcove (Salon)
                  </h4>
                  <p className="text-xs font-sans text-ivory-dark/80 leading-relaxed">
                    Exclusive screened dining rooms with antique silk draperies and dedicated butler service for milestone feasts (Min. 4 guests).
                  </p>
                </div>
              </div>

              {/* Service Timings Box */}
              <div className="pt-4 border-t border-gold/20 text-xs font-sans space-y-2 text-ivory-dark/80">
                <p className="font-semibold text-gold uppercase tracking-wider">Service Timings</p>
                <div className="flex justify-between">
                  <span>Mon – Thu:</span>
                  <span className="text-ivory font-mono">11:30 AM – 11:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Fri – Sun:</span>
                  <span className="text-ivory font-mono">11:30 AM – 12:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Café Lounge:</span>
                  <span className="text-ivory font-mono">08:30 AM – 11:00 PM</span>
                </div>
              </div>
            </div>

            {/* Verification Notice */}
            <div className="p-4 rounded-xl bg-burgundy/20 border border-gold/30 text-xs font-sans text-ivory-dark/90 space-y-2">
              <div className="flex items-center space-x-2 text-gold font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Demonstration Notice</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                This website is built as an agency-grade concept portfolio. Table bookings are recorded as frontend demonstrations only. No actual seat is reserved at a commercial establishment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
