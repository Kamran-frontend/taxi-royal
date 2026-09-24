import { Helmet } from "react-helmet-async";
import { SITE } from "@/data/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  /** Additional JSON-LD blocks for this page */
  schemas?: Record<string, unknown>[];
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

const Seo = ({
  title,
  description,
  path,
  schemas = [],
  image = `${SITE.baseUrl}/og-image.png`,
  type = "website",
  noindex = false,
}: SeoProps) => {
  const url = `${SITE.baseUrl}${path}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content={SITE.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;

/* ---------- Reusable schema builders ---------- */

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "@id": `${SITE.baseUrl}/#business`,
  name: SITE.name,
  description:
    "Fair. Schnell. Zuverlässig. Freundlich. Taxi- und Mietwagenservice in Friedberg mit Flughafentransfer Frankfurt, Fernfahrten europaweit, Rollstuhltaxi und Krankenfahrten.",
  url: `${SITE.baseUrl}/`,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.baseUrl}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: String(SITE.lat),
    longitude: String(SITE.lng),
  },
  areaServed: [
    "Friedberg",
    "Bad Nauheim",
    "Butzbach",
    "Wetterau",
    "Frankfurt am Main",
    "Rhein-Main-Gebiet",
  ],
  priceRange: "€€",
  paymentAccepted: "Bar, Kartenzahlung, PayPal, Überweisung",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "00:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/minitaxiroyalfb",
    "https://www.tiktok.com/@minitaxiroyalfb",
  ],
});

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.baseUrl}/#organization`,
  name: SITE.name,
  url: `${SITE.baseUrl}/`,
  logo: `${SITE.baseUrl}/favicon.png`,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE.baseUrl}${item.path}`,
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = (opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  description: opts.description,
  serviceType: "Taxi- und Transferservice",
  url: `${SITE.baseUrl}${opts.path}`,
  provider: { "@id": `${SITE.baseUrl}/#business` },
  areaServed: (opts.areaServed ?? ["Frankfurt am Main", "Wetterau", "Deutschland"]).map(
    (a) => ({ "@type": "Place", name: a }),
  ),
});
