import { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Header
    "nav.services": "Services",
    "nav.vehicles": "Fahrzeuge",
    "nav.reviews": "Bewertungen",
    "nav.contact": "Kontakt",
    "nav.booking": "Buchen",
    "nav.callNow": "Jetzt anrufen",

    // Hero
    "hero.tagline": "Ihr exklusiver Taxi-Service",
    "hero.subtitle": "Schnell • Zuverlässig • 24/7 erreichbar",
    "hero.eta": "In wenigen Minuten bei Ihnen",
    "hero.whatsapp": "Jetzt per WhatsApp buchen",
    "hero.location": "Friedberg & Umgebung",

    // Services
    "services.title": "Unsere Taxi-Services",
    "services.subtitle": "Professioneller Taxi-Service für jeden Anlass – komfortabel, sicher und zuverlässig.",
    "services.airport": "Flughafentransfer",
    "services.airportDesc": "Pünktlich und zuverlässig zum Flughafen",
    "services.medical": "Krankenfahrten",
    "services.medicalDesc": "Sichere Beförderung zu Arztterminen",
    "services.routes": "Kurz- & Langstrecken",
    "services.routesDesc": "Flexibel für jede Entfernung",
    "services.card": "Kartenzahlung",
    "services.cardDesc": "Bequem mit Karte bezahlen",
    "services.child": "Kindersitz verfügbar",
    "services.childDesc": "Sicher unterwegs mit Familie",
    "services.247": "24/7 Service",
    "services.247Desc": "Rund um die Uhr erreichbar",
    "services.wheelchair": "Rollstuhlgerechtes Fahrzeug",
    "services.wheelchairDesc": "Wir bieten spezielle Fahrzeuge mit Rampe für Rollstuhlfahrer an. Komfortabel und sicher ans Ziel – für alle Passagiere.",
    "services.accessible": "Barrierefrei",

    // Gallery
    "gallery.title": "Unsere Fahrzeuge",
    "gallery.subtitle": "Ein moderner, gepflegter Taxi-Service für jede Fahrt.",

    // Reviews
    "reviews.title": "Was unsere Kunden sagen",
    "reviews.rating": "von 5 Sternen",
    "reviews.count": "Google Bewertungen",
    "reviews.viewAll": "Alle Google-Bewertungen ansehen",
    "reviews.loadMore": "Mehr laden",
    "reviews.review1": "Sehr zuverlässig, pünktlich und freundlich. Immer wieder gerne!",
    "reviews.review2": "Bester Taxi-Service in Friedberg! Schnelle Antwort auf WhatsApp und super Fahrer.",
    "reviews.review3": "Toller Service zum Flughafen. Pünktlich, sauber und professionell. Absolut empfehlenswert!",

    // Booking
    "booking.title": "Taxi buchen",
    "booking.subtitle": "Füllen Sie das Formular aus und wir melden uns sofort bei Ihnen.",
    "booking.name": "Name",
    "booking.namePlaceholder": "Ihr Name",
    "booking.phone": "Telefon",
    "booking.phonePlaceholder": "Ihre Telefonnummer",
    "booking.pickup": "Abholort",
    "booking.pickupPlaceholder": "Straße, Hausnummer, Stadt",
    "booking.destination": "Ziel",
    "booking.destinationPlaceholder": "Wohin möchten Sie fahren?",
    "booking.date": "Datum",
    "booking.datePlaceholder": "Datum wählen",
    "booking.time": "Uhrzeit",
    "booking.timePlaceholder": "Uhrzeit wählen",
    "booking.persons": "Anzahl Personen",
    "booking.personsPlaceholder": "Wie viele Personen?",
    "booking.bags": "Anzahl Gepäckstücke",
    "booking.bagsPlaceholder": "Wie viele Gepäckstücke?",
    "booking.notes": "Anmerkungen",
    "booking.notesPlaceholder": "Besondere Wünsche (z.B. Kindersitz, Rollstuhl)",
    "booking.submit": "Per WhatsApp absenden",
    "booking.required": "Pflichtfeld",

    // Contact
    "contact.title": "Taxi jetzt bestellen",
    "contact.subtitle": "Buchen Sie Ihr Taxi schnell und unkompliziert per WhatsApp oder Anruf.",
    "contact.quick": "Schnellbuchung",
    "contact.whatsapp": "WhatsApp buchen",
    "contact.call": "Jetzt anrufen",
    "contact.tip": "WhatsApp ist der schnellste Weg zur Buchung!",
    "contact.phone": "Telefon & WhatsApp",
    "contact.area": "Einsatzgebiet",
    "contact.areaValue": "Friedberg, Bad Nauheim, Butzbach und Umgebung",
    "contact.hours": "Erreichbarkeit",
    "contact.hoursValue": "24 Stunden / 7 Tage die Woche",

    // Footer
    "footer.tagline": "Ihr zuverlässiger Taxi-Service in Friedberg und Umgebung.",
    "footer.contact": "Kontakt",
    "footer.legal": "Rechtliches",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.available": "24/7 erreichbar",
    "footer.rights": "Alle Rechte vorbehalten.",

    // Cookie
    "cookie.title": "Cookie-Einstellungen",
    "cookie.description": "Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. Cookies helfen uns, die Website zu verbessern und Ihre Präferenzen zu speichern.",
    "cookie.accept": "Akzeptieren",
    "cookie.reject": "Ablehnen",

    // Legal pages
    "legal.back": "Zurück zur Startseite",
    "impressum.title": "Impressum",
    "impressum.according": "Angaben gemäß § 5 TMG",
    "impressum.contact": "Kontakt",
    "impressum.area": "Einsatzgebiet",
    "impressum.dispute": "Streitschlichtung",
    "impressum.disputeText1": "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
    "impressum.disputeText2": "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    
    "datenschutz.title": "Datenschutzerklärung",
    "datenschutz.overview": "1. Datenschutz auf einen Blick",
    "datenschutz.general": "Allgemeine Hinweise",
    "datenschutz.generalText": "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
    "datenschutz.collection": "2. Datenerfassung auf dieser Website",
    "datenschutz.responsible": "Wer ist verantwortlich für die Datenerfassung?",
    "datenschutz.responsibleText": "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten finden Sie im Impressum dieser Website.",
    "datenschutz.how": "Wie erfassen wir Ihre Daten?",
    "datenschutz.howText": "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z.B. durch eine Buchungsanfrage per WhatsApp oder Telefon.",
    "datenschutz.whatsapp": "3. WhatsApp-Kommunikation",
    "datenschutz.whatsappText": "Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Daten gemäß den Datenschutzbestimmungen von WhatsApp (Meta) verarbeitet. Wir speichern Ihre Telefonnummer und Nachrichteninhalte ausschließlich zur Bearbeitung Ihrer Buchungsanfrage.",
    "datenschutz.rights": "4. Ihre Rechte",
    "datenschutz.rightsIntro": "Sie haben jederzeit das Recht auf:",
    "datenschutz.right1": "Auskunft über Ihre gespeicherten personenbezogenen Daten",
    "datenschutz.right2": "Berichtigung unrichtiger Daten",
    "datenschutz.right3": "Löschung Ihrer Daten",
    "datenschutz.right4": "Einschränkung der Datenverarbeitung",
    "datenschutz.right5": "Widerspruch gegen die Verarbeitung",
    "datenschutz.right6": "Datenübertragbarkeit",
    "datenschutz.hosting": "5. Hosting",
    "datenschutz.hostingText": "Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.",
    "datenschutz.contactTitle": "6. Kontakt",
    "datenschutz.contactText": "Bei Fragen zum Datenschutz erreichen Sie uns unter:",
  },
  en: {
    // Header
    "nav.services": "Services",
    "nav.vehicles": "Vehicles",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.booking": "Book Now",
    "nav.callNow": "Call Now",

    // Hero
    "hero.tagline": "Your exclusive taxi service",
    "hero.subtitle": "Fast • Reliable • Available 24/7",
    "hero.eta": "Pickup in just a few minutes",
    "hero.whatsapp": "Book via WhatsApp",
    "hero.location": "Friedberg & Nearby Areas",

    // Services
    "services.title": "Our Taxi Services",
    "services.subtitle": "Professional taxi service for every occasion – comfortable, safe, and reliable.",
    "services.airport": "Airport Transfers",
    "services.airportDesc": "Punctual and reliable airport service",
    "services.medical": "Medical Rides",
    "services.medicalDesc": "Safe transportation to medical appointments",
    "services.routes": "Short & Long Distances",
    "services.routesDesc": "Flexible for any distance",
    "services.card": "Card Payment",
    "services.cardDesc": "Pay conveniently by card",
    "services.child": "Child Seat Available",
    "services.childDesc": "Travel safely with family",
    "services.247": "24/7 Service",
    "services.247Desc": "Available around the clock",
    "services.wheelchair": "Wheelchair Accessible Vehicle",
    "services.wheelchairDesc": "We offer special vehicles with ramps for wheelchair users. Comfortable and safe travel – for all passengers.",
    "services.accessible": "Accessible",

    // Gallery
    "gallery.title": "Our Vehicles",
    "gallery.subtitle": "A modern, well-maintained taxi service for every ride.",

    // Reviews
    "reviews.title": "What Our Customers Say",
    "reviews.rating": "out of 5 stars",
    "reviews.count": "Google Reviews",
    "reviews.viewAll": "View All Google Reviews",
    "reviews.loadMore": "Load More",
    "reviews.review1": "Very reliable, punctual and friendly. Happy to come back!",
    "reviews.review2": "Best taxi service in Friedberg! Quick WhatsApp response and great drivers.",
    "reviews.review3": "Great airport service. Punctual, clean and professional. Highly recommended!",

    // Booking
    "booking.title": "Book a Taxi",
    "booking.subtitle": "Fill out the form and we will contact you immediately.",
    "booking.name": "Name",
    "booking.namePlaceholder": "Your name",
    "booking.phone": "Phone",
    "booking.phonePlaceholder": "Your phone number",
    "booking.pickup": "Pickup Location",
    "booking.pickupPlaceholder": "Street, number, city",
    "booking.destination": "Destination",
    "booking.destinationPlaceholder": "Where would you like to go?",
    "booking.date": "Date",
    "booking.datePlaceholder": "Select date",
    "booking.time": "Time",
    "booking.timePlaceholder": "Select time",
    "booking.persons": "Number of Persons",
    "booking.personsPlaceholder": "How many persons?",
    "booking.bags": "Number of Bags",
    "booking.bagsPlaceholder": "How many bags?",
    "booking.notes": "Notes",
    "booking.notesPlaceholder": "Special requests (e.g., child seat, wheelchair)",
    "booking.submit": "Send via WhatsApp",
    "booking.required": "Required",

    // Contact
    "contact.title": "Book Your Taxi Now",
    "contact.subtitle": "Book your taxi quickly and easily via WhatsApp or call.",
    "contact.quick": "Quick Booking",
    "contact.whatsapp": "Book via WhatsApp",
    "contact.call": "Call Now",
    "contact.tip": "WhatsApp is the fastest way to book!",
    "contact.phone": "Phone & WhatsApp",
    "contact.area": "Service Area",
    "contact.areaValue": "Friedberg, Bad Nauheim, Butzbach and surroundings",
    "contact.hours": "Availability",
    "contact.hoursValue": "24 hours / 7 days a week",

    // Footer
    "footer.tagline": "Your reliable taxi service in Friedberg and surrounding areas.",
    "footer.contact": "Contact",
    "footer.legal": "Legal",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy Policy",
    "footer.available": "Available 24/7",
    "footer.rights": "All rights reserved.",

    // Cookie
    "cookie.title": "Cookie Settings",
    "cookie.description": "We use cookies to provide you with the best experience on our website. Cookies help us improve the website and save your preferences.",
    "cookie.accept": "Accept",
    "cookie.reject": "Reject",

    // Legal pages
    "legal.back": "Back to Home",
    "impressum.title": "Imprint",
    "impressum.according": "Information according to § 5 TMG",
    "impressum.contact": "Contact",
    "impressum.area": "Service Area",
    "impressum.dispute": "Dispute Resolution",
    "impressum.disputeText1": "The European Commission provides a platform for online dispute resolution (OS):",
    "impressum.disputeText2": "We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board.",
    
    "datenschutz.title": "Privacy Policy",
    "datenschutz.overview": "1. Privacy at a Glance",
    "datenschutz.general": "General Information",
    "datenschutz.generalText": "The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified.",
    "datenschutz.collection": "2. Data Collection on This Website",
    "datenschutz.responsible": "Who is responsible for data collection?",
    "datenschutz.responsibleText": "Data processing on this website is carried out by the website operator. You can find the contact details in the imprint of this website.",
    "datenschutz.how": "How do we collect your data?",
    "datenschutz.howText": "Your data is collected when you provide it to us, e.g., through a booking request via WhatsApp or phone.",
    "datenschutz.whatsapp": "3. WhatsApp Communication",
    "datenschutz.whatsappText": "When you contact us via WhatsApp, your data will be processed according to WhatsApp's (Meta) privacy policy. We only store your phone number and message contents for processing your booking request.",
    "datenschutz.rights": "4. Your Rights",
    "datenschutz.rightsIntro": "You have the right at any time to:",
    "datenschutz.right1": "Information about your stored personal data",
    "datenschutz.right2": "Correction of incorrect data",
    "datenschutz.right3": "Deletion of your data",
    "datenschutz.right4": "Restriction of data processing",
    "datenschutz.right5": "Object to processing",
    "datenschutz.right6": "Data portability",
    "datenschutz.hosting": "5. Hosting",
    "datenschutz.hostingText": "This website is hosted externally. The personal data collected on this website is stored on the hoster's servers.",
    "datenschutz.contactTitle": "6. Contact",
    "datenschutz.contactText": "If you have any questions about data protection, you can reach us at:",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("de");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
