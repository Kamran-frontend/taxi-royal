import { Check } from "lucide-react";
import type { ContentSection } from "@/data/types";
import AnimatedSection from "@/components/AnimatedSection";

const ContentSections = ({ sections }: { sections: ContentSection[] }) => (
  <div className="space-y-10">
    {sections.map((section, i) => (
      <AnimatedSection key={i} delay={0.05}>
        <article>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            {section.h}
          </h2>
          <div className="space-y-4">
            {section.p.map((paragraph, j) => (
              <p key={j} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          {section.list && (
            <ul className="mt-5 grid sm:grid-cols-2 gap-2">
              {section.list.map((item, k) => (
                <li key={k} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </article>
      </AnimatedSection>
    ))}
  </div>
);

export default ContentSections;
