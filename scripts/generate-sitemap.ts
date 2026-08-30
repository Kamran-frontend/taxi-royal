// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { longDistanceRoutes } from "../src/data/longDistance";
import { cityPages } from "../src/data/cities";
import { airportPages } from "../src/data/airports";
import { blogPosts } from "../src/data/blog";

const BASE_URL = "https://minitaxiroyalfb.de";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/flughafentransfer-frankfurt", changefreq: "monthly", priority: "0.9" },
  { path: "/fernfahrten", changefreq: "monthly", priority: "0.9" },
  { path: "/rollstuhltaxi", changefreq: "monthly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.7" },
  { path: "/ratgeber", changefreq: "weekly", priority: "0.7" },
  ...cityPages.map((c) => ({
    path: `/taxi/${c.slug}`,
    changefreq: "monthly" as const,
    priority: "0.8",
  })),
  ...longDistanceRoutes.map((r) => ({
    path: `/fernfahrten/${r.slug}`,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
  ...airportPages.map((a) => ({
    path: `/flughafentransfer/${a.slug}`,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
  ...blogPosts.map((p) => ({
    path: `/ratgeber/${p.slug}`,
    lastmod: p.date,
    changefreq: "yearly" as const,
    priority: "0.6",
  })),
  { path: "/impressum", changefreq: "yearly", priority: "0.3" },
  { path: "/datenschutz", changefreq: "yearly", priority: "0.3" },
];

function generateSitemap(list: SitemapEntry[]) {
  const urls = list.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
