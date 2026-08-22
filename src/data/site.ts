export const SITE = {
  name: "MiniTAXI Royal",
  baseUrl: "https://minitaxiroyalfb.de",
  phone: "+491711670001",
  phoneDisplay: "0171 1670001",
  phoneLandline: "+4960311618316",
  phoneLandlineDisplay: "06031 16 183 16",
  whatsapp: "https://wa.me/491711670001",
  email: "info@minitaxiroyalfb.de",
  street: "Mühlweg 52",
  postalCode: "61169",
  city: "Friedberg",
  country: "DE",
  lat: 50.3346,
  lng: 8.7549,
  ratingValue: "5",
  reviewCount: "187",
} as const;

export const waLink = (text: string) =>
  `${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
