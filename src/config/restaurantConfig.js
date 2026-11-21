/**
 * THE SPICE COURT — Master Restaurant Configuration
 * 
 * Note: This is an imaginary luxury restaurant brand portfolio demonstration.
 * All contact details, addresses, and external links below are editable placeholders.
 * Connect live details here when deploying for a real operational venue.
 */

export const restaurantConfig = {
  brand: {
    name: "THE SPICE COURT",
    shortName: "Spice Court",
    tagline: "A Royal Taste. A Modern Experience.",
    description: "An imaginary premium Indian restaurant and contemporary café combining Indian heritage, traditional multi-cuisine, modern café culture, and luxury fine dining.",
    established: "Fictional Portfolio Concept",
    isDemo: true,
    demoDisclaimer: "This website is an imaginary portfolio concept. All business information, menus, prices, and reservation forms are for demonstration purposes only."
  },
  
  contact: {
    isConfigured: false, // Set to true when real client details are provided
    address: {
      line1: "Heritage Grand Boulevard (Placeholder)",
      line2: "Palace District, Fine Dining Quarter",
      city: "New Delhi",
      postalCode: "110001",
      country: "India",
      landmark: "Opposite Royal Gardens",
      note: "Sample demo address — update with operational venue location"
    },
    phones: [
      { label: "Guest Concierge", number: "+91 (0) 11 0000 0000 (Demo)", raw: "" },
      { label: "Private Dining", number: "+91 (0) 11 0000 0001 (Demo)", raw: "" }
    ],
    emails: [
      { label: "General Inquiries", address: "concierge@thespicecourt.demo" },
      { label: "Events & Celebrations", address: "events@thespicecourt.demo" }
    ],
    hours: [
      { days: "Monday – Thursday", hours: "11:30 AM – 11:30 PM", category: "Full Dining & Café" },
      { days: "Friday – Sunday", hours: "11:30 AM – 12:30 AM", category: "Royal Weekend Service" },
      { days: "Daily Café Lounge", hours: "08:30 AM – 11:00 PM", category: "Artisanal Coffee & Bakes" }
    ],
    whatsapp: {
      enabled: false, // Disabled until real verified business number is set
      number: "",
      message: "Hello The Spice Court, I would like to inquire about dining.",
      disclaimer: "WhatsApp contact is currently disabled in demonstration mode."
    },
    mapCoordinates: {
      lat: 28.6139,
      lng: 77.2090,
      zoom: 15,
      note: "Geographic placeholder for Central Delhi Palace Quarter"
    }
  },

  socials: [
    { name: "Instagram", url: "#", handle: "@thespicecourt.demo", isDemo: true },
    { name: "Facebook", url: "#", handle: "/thespicecourtdemo", isDemo: true },
    { name: "Pinterest", url: "#", handle: "@thespicecourtstyle", isDemo: true }
  ],

  experiences: [
    {
      id: "royal-table",
      title: "The Royal Table",
      subtitle: "Grand Heritage Multi-Cuisine",
      description: "Slow-cooked dum biryanis, royal Awadhi gravies, and fragrant tandoori delicacies served in an ambience inspired by Rajasthani and Mughal architectural splendour.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
      cta: "Explore Traditional Dining",
      link: "/menu?category=indian-main-course"
    },
    {
      id: "modern-cafe",
      title: "The Modern Café",
      subtitle: "Artisanal Coffee & Patisserie",
      description: "Single-origin pour-overs, royal saffron lattes, delicate pistachio cheesecakes, and artisanal European-Indian confectionery in a serene sun-dappled lounge.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
      cta: "Discover Café Offerings",
      link: "/cafe"
    },
    {
      id: "celebration-table",
      title: "The Celebration Table",
      subtitle: "Banquets & Intimate Gatherings",
      description: "Curated multi-course tasting menus, bespoke floral table-scapes, and attentive butler service designed for memorable milestone anniversaries and family banquets.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      cta: "Book a Celebration",
      link: "/reservations"
    }
  ]
};
