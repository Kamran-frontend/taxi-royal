import { useParams, Navigate } from "react-router-dom";
import { CalendarDays, Clock } from "lucide-react";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, localBusinessSchema } from "@/components/Seo";
import ContentSections from "@/components/ContentSections";
import CtaBlock from "@/components/CtaBlock";
import LinkGrid from "@/components/LinkGrid";
import { SITE } from "@/data/site";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

const BlogPost = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const { blogPosts } = useLocalizedContent();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return <Navigate to="/ratgeber" replace />;

  const path = `/ratgeber/${post.slug}`;
  const crumbs = [
    { name: language === "de" ? "Start" : "Home", path: "/" },
    { name: language === "de" ? "Ratgeber" : "Guides", path: "/ratgeber" },
    { name: post.title, path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title={post.metaTitle}
        description={post.description}
        path={path}
        type="article"
        schemas={[
          localBusinessSchema(),
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: `${SITE.baseUrl}${path}`,
            author: { "@type": "Organization", name: SITE.name },
            publisher: {
              "@type": "Organization",
              name: SITE.name,
              logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.png` },
            },
          },
        ]}
      />

      <article className="container mx-auto px-4 pt-8 max-w-3xl">
        <span className="text-xs font-medium text-primary">{post.category}</span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold my-3">
          <span className="gold-text">{post.title}</span>
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" aria-hidden="true" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(language === "de" ? "de-DE" : "en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>
        <p className="text-lg text-muted-foreground mb-10">{post.lead}</p>

        <ContentSections sections={post.sections} />
      </article>

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <CtaBlock />
        <LinkGrid
          title={language === "de" ? "Weitere Beiträge" : "More articles"}
          items={blogPosts
            .filter((p) => p.slug !== post.slug)
            .slice(0, 6)
            .map((p) => ({ to: `/ratgeber/${p.slug}`, label: p.title, sub: p.category }))}
        />
      </section>
    </PageShell>
  );
};

export default BlogPost;
