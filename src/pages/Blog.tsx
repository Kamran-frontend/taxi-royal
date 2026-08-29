import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, localBusinessSchema } from "@/components/Seo";
import CtaBlock from "@/components/CtaBlock";
import { blogPosts } from "@/data/blog";
import { SITE } from "@/data/site";

const path = "/ratgeber";

const Blog = () => {
  const crumbs = [
    { name: "Start", path: "/" },
    { name: "Ratgeber", path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title="Taxi-Ratgeber Wetterau | Tipps zu Transfer & Krankenfahrten"
        description="Praxistipps rund um Flughafentransfer, Krankenfahrten, Rollstuhltaxi und Fernfahrten – aus dem Alltag von MiniTAXI Royal in Friedberg."
        path={path}
        schemas={[
          localBusinessSchema(),
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "MiniTAXI Royal Ratgeber",
            url: `${SITE.baseUrl}${path}`,
            blogPost: blogPosts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              datePublished: p.date,
              url: `${SITE.baseUrl}/ratgeber/${p.slug}`,
            })),
          },
        ]}
      />

      <section className="container mx-auto px-4 pt-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          <span className="gold-text">Ratgeber rund um Taxi und Transfer</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Erfahrungswerte aus dem Alltag: Zeitplanung zum Flughafen, Krankenfahrten mit Verordnung,
          barrierefreie Fahrten und die Frage, wann sich eine Fernfahrt wirklich lohnt.
        </p>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <article key={post.slug} className="glass-card rounded-2xl p-5 flex flex-col">
              <span className="text-xs font-medium text-primary mb-2">{post.category}</span>
              <h2 className="font-serif text-xl font-bold text-foreground mb-2">
                <Link to={`/ratgeber/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground flex-1">{post.description}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-4">
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("de-DE", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {post.readingTime}
                </span>
              </div>
              <Link
                to={`/ratgeber/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm text-primary mt-3 hover:underline"
              >
                Weiterlesen
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-6">
        <CtaBlock />
      </section>
    </PageShell>
  );
};

export default Blog;
