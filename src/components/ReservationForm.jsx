import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, Mail, CheckCircle, AlertCircle, Info, Utensils } from 'lucide-react';
import { IndianArchEmblem } from './IndianMotif';
import { restaurantConfig } from '../config/restaurantConfig';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '19:30',
    guests: '2',
    diningArea: 'royal-main',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Time slot presets
  const timeSlots = [
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'
  ];

  const diningAreas = [
    { id: 'royal-main', label: 'The Royal Court (Main Heritage Hall)' },
    { id: 'modern-cafe', label: 'The Sunlit Café Lounge' },
    { id: 'private-salon', label: 'Private Palace Alcove (Min. 4 Guests)' },
    { id: 'terrace-verandah', label: 'Courtyard Verandah' }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Full name must be at least 3 characters.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for booking confirmations.';
    } else if (!/^[0-9+() -]{7,16}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (digits only or international format).';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format or leave blank.';
    }

    if (!formData.date) {
      errs.date = 'Please select a reservation date.';
    } else {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errs.date = 'Date cannot be in the past.';
      }
    }

    if (!formData.guests || parseInt(formData.guests, 10) < 1) {
      errs.guests = 'Please select at least 1 guest.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: '',
      time: '19:30',
      guests: '2',
      diningArea: 'royal-main',
      specialRequests: ''
    });
  };

  return (
    <div className="relative bg-charcoal-card rounded-2xl border border-gold/30 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10">
      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/15 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-burgundy/20 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center justify-center p-2 rounded-full bg-gold/10 border border-gold/30 mb-3">
          <IndianArchEmblem className="w-6 h-6 text-gold" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory tracking-wider uppercase">
          Reserve Your Royal Table
        </h3>
        <p className="mt-2 text-xs sm:text-sm font-sans text-ivory-dark/80">
          Experience timeless Indian culinary hospitality. Please specify your dining details below.
        </p>

        {/* Demo Disclaimer notice */}
        <div className="mt-4 p-3 rounded-lg bg-burgundy/30 border border-gold/30 text-[11px] font-sans text-gold-light flex items-center justify-center space-x-2">
          <Info className="w-4 h-4 text-gold shrink-0" />
          <span>
            <strong>Demo Concept Notice:</strong> This reservation form is a frontend demonstration and is not connected to a live restaurant booking system.
          </span>
        </div>
      </div>

      {submitted ? (
        /* Success State */
        <div className="py-12 text-center max-w-md mx-auto space-y-5 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-2xl font-bold text-ivory">
              Demo Request Received!
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gold-light">
              "Demo request received. This form is a demonstration and is not connected to a live restaurant booking system."
            </p>
          </div>

          {/* Booking Summary Box */}
          <div className="bg-espresso/80 border border-gold/25 rounded-xl p-4 text-left text-xs font-sans space-y-2 text-ivory-dark">
            <div className="flex justify-between border-b border-gold/15 pb-1.5">
              <span className="text-gold font-medium">Guest Name:</span>
              <span className="text-ivory font-semibold">{formData.fullName}</span>
            </div>
            <div className="flex justify-between border-b border-gold/15 pb-1.5">
              <span className="text-gold font-medium">Date & Time:</span>
              <span className="text-ivory">{formData.date} at {formData.time}</span>
            </div>
            <div className="flex justify-between border-b border-gold/15 pb-1.5">
              <span className="text-gold font-medium">Party Size:</span>
              <span className="text-ivory">{formData.guests} Guest(s)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gold font-medium">Dining Ambience:</span>
              <span className="text-ivory capitalize">
                {diningAreas.find((a) => a.id === formData.diningArea)?.label || formData.diningArea}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full border border-gold bg-burgundy hover:bg-burgundy-light text-ivory text-xs font-semibold tracking-widest uppercase transition-all shadow-md"
            >
              Submit Another Demo Request
            </button>
          </div>
        </div>
      ) : (
        /* Reservation Form */
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-sans font-medium text-gold mb-1.5 flex items-center justify-between">
                <span>Full Name <span className="text-rose-400">*</span></span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Maharaja Vikramaditya"
                  className={`w-full bg-espresso border rounded-lg px-4 py-3 pl-10 text-xs sm:text-sm text-ivory placeholder-ivory-dark/40 focus:outline-none focus:border-gold transition-colors ${
                    errors.fullName ? 'border-rose-500' : 'border-gold/25'
                  }`}
                />
                <User className="w-4 h-4 text-gold/60 absolute left-3.5 top-3.5" />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-[11px] text-rose-400 font-sans flex items-center space-x-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-sans font-medium text-gold mb-1.5 flex items-center justify-between">
                <span>Phone Number <span className="text-rose-400">*</span></span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`w-full bg-espresso border rounded-lg px-4 py-3 pl-10 text-xs sm:text-sm text-ivory placeholder-ivory-dark/40 focus:outline-none focus:border-gold transition-colors ${
                    errors.phone ? 'border-rose-500' : 'border-gold/25'
                  }`}
                />
                <Phone className="w-4 h-4 text-gold/60 absolute left-3.5 top-3.5" />
              </div>
              {errors.phone && (
                <p className="mt-1 text-[11px] text-rose-400 font-sans flex items-center space-x-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Email (Optional) */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-sans font-medium text-gold mb-1.5">
                Email Address <span className="text-ivory-dark/50">(Optional)</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="viceroy@palace.com"
                  className={`w-full bg-espresso border rounded-lg px-4 py-3 pl-10 text-xs sm:text-sm text-ivory placeholder-ivory-dark/40 focus:outline-none focus:border-gold transition-colors ${
                    errors.email ? 'border-rose-500' : 'border-gold/25'
                  }`}
                />
                <Mail className="w-4 h-4 text-gold/60 absolute left-3.5 top-3.5" />
              </div>
              {errors.email && (
                <p className="mt-1 text-[11px] text-rose-400 font-sans flex items-center space-x-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-sans font-medium text-gold mb-1.5">
                Date of Visit <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full bg-espresso border rounded-lg px-4 py-3 pl-10 text-xs sm:text-sm text-ivory focus:outline-none focus:border-gold transition-colors ${
                    errors.date ? 'border-rose-500' : 'border-gold/25'
                  }`}
                />
                <Calendar className="w-4 h-4 text-gold/60 absolute left-3.5 top-3.5" />
              </div>
              {errors.date && (
                <p className="mt-1 text-[11px] text-rose-400 font-sans flex items-center space-x-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.date}</span>
                </p>
              )}
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-sans font-medium text-gold mb-1.5">
                Preferred Seating Time <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-espresso border border-gold/25 rounded-lg px-4 py-3 pl-10 text-xs sm:text-sm text-ivory focus:outline-none focus:border-gold appearance-none transition-colors"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-espresso text-ivory">
                      {slot}
                    </option>
                  ))}
                </select>
                <Clock className="w-4 h-4 text-gold/60 absolute left-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-sans font-medium text-gold mb-1.5">
                Number of Guests <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className={`w-full bg-espresso border rounded-lg px-4 py-3 pl-10 text-xs sm:text-sm text-ivory focus:outline-none focus:border-gold appearance-none transition-colors ${
                    errors.guests ? 'border-rose-500' : 'border-gold/25'
                  }`}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16].map((num) => (
                    <option key={num} value={num} className="bg-espresso text-ivory">
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                <Users className="w-4 h-4 text-gold/60 absolute left-3.5 top-3.5 pointer-events-none" />
              </div>
              {errors.guests && (
                <p className="mt-1 text-[11px] text-rose-400 font-sans flex items-center space-x-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.guests}</span>
                </p>
              )}
            </div>
          </div>

          {/* Dining Ambiance Preference */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-sans font-medium text-gold mb-2">
              Preferred Dining Ambiance
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {diningAreas.map((area) => (
                <label
                  key={area.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all ${
                    formData.diningArea === area.id
                      ? 'border-gold bg-gold/10 text-ivory'
                      : 'border-gold/20 bg-espresso/50 text-ivory/70 hover:border-gold/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="diningArea"
                    value={area.id}
                    checked={formData.diningArea === area.id}
                    onChange={handleChange}
                    className="accent-gold h-4 w-4"
                  />
                  <span className="text-xs font-sans font-medium">{area.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-sans font-medium text-gold mb-1.5">
              Special Requests or Dietary Notes <span className="text-ivory-dark/50">(Optional)</span>
            </label>
            <textarea
              name="specialRequests"
              rows={3}
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="e.g. Anniversary celebration, quiet booth preference, low spice preferences, Jain food options..."
              className="w-full bg-espresso border border-gold/25 rounded-lg px-4 py-3 text-xs sm:text-sm text-ivory placeholder-ivory-dark/40 focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl border border-gold bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy text-ivory font-serif tracking-[0.2em] uppercase font-bold text-sm sm:text-base hover:shadow-gold-glow hover:border-gold-light transition-all flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span>Confirming Details...</span>
              ) : (
                <>
                  <Utensils className="w-4 h-4 text-gold" />
                  <span>Request Table Reservation (Demo)</span>
                </>
              )}
            </button>
            <p className="mt-2 text-center text-[10px] text-ivory-dark/60 font-sans">
              Demo Request Notice: Submitting will record a frontend sample for demonstration.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
