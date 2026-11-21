import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, AlertCircle, CheckCircle, Info, ShieldCheck, Compass } from 'lucide-react';
import { IndianArchEmblem, IndianOrnamentDivider } from '../components/IndianMotif';
import SEO from '../components/SEO';
import { restaurantConfig } from '../config/restaurantConfig';

export default function Contact() {
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inquiry.name || !inquiry.email || !inquiry.message) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-espresso text-ivory min-h-screen">
      <SEO
        title="Contact & Location — The Spice Court"
        description="Find venue location, service hours, and contact details for THE SPICE COURT. Fictional portfolio concept demonstration with editable configurations."
      />

      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 bg-espresso-surface border-b border-gold/20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(114,45,53,0.25)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold mb-4">
            <Compass className="w-4 h-4 text-gold" />
            <span>Venue Concierge</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide uppercase text-ivory">
            Contact &amp; Location
          </h1>

          <IndianOrnamentDivider className="my-5" />

          <p className="font-serif italic text-base sm:text-lg text-ivory-cream/90 max-w-xl mx-auto">
            "Connect with our guest relations team for private dining, celebrations, or general inquiries."
          </p>

          <div className="mt-4">
            <span className="text-[11px] font-sans uppercase tracking-widest text-gold bg-charcoal/80 px-3.5 py-1 rounded-full border border-gold/20">
              Demo Placeholders &bull; Editable in restaurantConfig.js
            </span>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Venue Details Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-charcoal-card p-6 sm:p-8 rounded-2xl border border-gold/30 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-ivory uppercase tracking-wide border-b border-gold/20 pb-3">
                Venue Information
              </h3>

              {/* Address Placeholder */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-gold/10 border border-gold/30 text-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-gold">
                    Court Location
                  </h4>
                  <p className="text-sm font-sans text-ivory font-medium mt-0.5">
                    {restaurantConfig.contact.address.line1}
                  </p>
                  <p className="text-xs font-sans text-ivory-dark/80">
                    {restaurantConfig.contact.address.line2}, {restaurantConfig.contact.address.city} - {restaurantConfig.contact.address.postalCode}
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-sans uppercase tracking-wider text-gold/70 bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                    Demo Address Placeholder
                  </span>
                </div>
              </div>

              {/* Phone Placeholder */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-gold/10 border border-gold/30 text-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-gold">
                    Telephony Concierge
                  </h4>
                  {restaurantConfig.contact.phones.map((p, i) => (
                    <p key={i} className="text-xs sm:text-sm font-sans font-mono text-ivory mt-0.5">
                      {p.label}: {p.number}
                    </p>
                  ))}
                  <span className="inline-block mt-1 text-[10px] font-sans uppercase tracking-wider text-gold/70 bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                    Demo Telephony Placeholder
                  </span>
                </div>
              </div>

              {/* Email Placeholder */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-gold/10 border border-gold/30 text-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-gold">
                    Electronic Dispatch
                  </h4>
                  {restaurantConfig.contact.emails.map((e, i) => (
                    <p key={i} className="text-xs font-sans text-ivory mt-0.5">
                      {e.label}: <span className="text-gold-light">{e.address}</span>
                    </p>
                  ))}
                  <span className="inline-block mt-1 text-[10px] font-sans uppercase tracking-wider text-gold/70 bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                    Demo Email Placeholder
                  </span>
                </div>
              </div>

              {/* Service Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-gold/10 border border-gold/30 text-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-gold">
                    Service Hours
                  </h4>
                  <div className="space-y-1.5 mt-1 text-xs font-sans text-ivory-dark/80">
                    {restaurantConfig.contact.hours.map((h, i) => (
                      <div key={i}>
                        <span className="text-ivory font-medium">{h.days}: </span>
                        <span className="font-mono text-gold-light">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp Config State Indicator */}
              <div className="p-4 rounded-xl bg-espresso border border-gold/20 text-xs font-sans space-y-1.5">
                <div className="flex items-center space-x-2 text-gold font-semibold uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Integration Status</span>
                </div>
                <p className="text-[11px] text-ivory-dark/80 leading-relaxed">
                  {restaurantConfig.contact.whatsapp.disclaimer}
                </p>
                <span className="inline-block text-[10px] uppercase tracking-wider text-rose-400 bg-rose-950/40 px-2 py-0.5 rounded border border-rose-500/30">
                  WhatsApp Disabled Until Real Client Credentials Provided
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Placeholder & Message Form */}
          <div className="lg:col-span-7 space-y-8">
            {/* Interactive Map Placeholder */}
            <div className="bg-charcoal-card rounded-2xl overflow-hidden border border-gold/30 shadow-xl">
              <div className="p-4 border-b border-gold/20 flex items-center justify-between bg-espresso">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="font-serif text-sm font-bold uppercase text-ivory">
                    Interactive Map Canvas [Demo Placeholder]
                  </span>
                </div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded">
                  Lat 28.6139, Lng 77.2090
                </span>
              </div>

              {/* Styled Mockup Map Canvas */}
              <div className="relative aspect-video w-full bg-[#1e1a17] overflow-hidden flex items-center justify-center">
                {/* SVG Map Grid Background Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B58A52" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                </svg>

                {/* Simulated stylized roads & river */}
                <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 600 350">
                  <path d="M 0 100 Q 200 120 300 200 T 600 250" fill="none" stroke="#722D35" strokeWidth="8" />
                  <path d="M 150 0 L 150 350" fill="none" stroke="#B58A52" strokeWidth="3" strokeDasharray="6 4" />
                  <path d="M 450 0 L 450 350" fill="none" stroke="#B58A52" strokeWidth="3" strokeDasharray="6 4" />
                  <circle cx="300" cy="180" r="45" fill="none" stroke="#B58A52" strokeWidth="2" />
                </svg>

                {/* Central Pulse Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-burgundy/80 border-2 border-gold flex items-center justify-center text-ivory shadow-gold-glow animate-bounce">
                      <IndianArchEmblem className="w-7 h-7 text-gold-light" />
                    </div>
                    <div className="absolute -inset-2 rounded-full border border-gold/40 animate-ping pointer-events-none" />
                  </div>
                  <div className="mt-2 bg-espresso/90 border border-gold/40 px-3 py-1 rounded-md text-center shadow-lg">
                    <p className="font-serif text-xs font-bold text-ivory">THE SPICE COURT</p>
                    <p className="text-[10px] text-gold font-sans">Heritage Grand Boulevard</p>
                  </div>
                </div>

                {/* Floating Map Disclaimer */}
                <div className="absolute bottom-3 left-3 bg-espresso/85 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-sans text-ivory-dark/70 border border-gold/20">
                  Stylized Map Placeholder &bull; Live Google Maps embed connects upon launch
                </div>
              </div>
            </div>

            {/* Direct Message Inquiry Form */}
            <div className="bg-charcoal-card p-6 sm:p-8 rounded-2xl border border-gold/30 shadow-xl space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-ivory uppercase tracking-wide">
                  Send A Message To Concierge
                </h3>
                <p className="text-xs font-sans text-ivory-dark/80 mt-1">
                  Private banquet inquiries, press questions, or dining notes.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-ivory">
                    Inquiry Message Dispatched!
                  </h4>
                  <p className="text-xs font-sans text-ivory-dark/90">
                    "Demo message received. This is a frontend demonstration. In an operational environment, this triggers an automated email to our concierge."
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs uppercase tracking-wider text-gold hover:text-gold-light underline underline-offset-4"
                  >
                    Send Another Demo Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-sans font-medium text-gold mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiry.name}
                        onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                        placeholder="Guest Name"
                        className="w-full bg-espresso border border-gold/25 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-ivory focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-sans font-medium text-gold mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiry.email}
                        onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                        placeholder="guest@domain.com"
                        className="w-full bg-espresso border border-gold/25 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-ivory focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-medium text-gold mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={inquiry.subject}
                      onChange={(e) => setInquiry({ ...inquiry, subject: e.target.value })}
                      placeholder="e.g. Milestone Anniversary Banquet"
                      className="w-full bg-espresso border border-gold/25 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-ivory focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-medium text-gold mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={inquiry.message}
                      onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                      placeholder="Please let us know how we may assist your dining experience..."
                      className="w-full bg-espresso border border-gold/25 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-ivory focus:outline-none focus:border-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl border border-gold bg-burgundy hover:bg-burgundy-light text-ivory font-serif tracking-[0.2em] uppercase font-bold text-xs sm:text-sm shadow-md transition-colors"
                  >
                    Send Message (Demo)
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
