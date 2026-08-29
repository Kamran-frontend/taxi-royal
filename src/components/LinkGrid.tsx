import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface LinkItem {
  to: string;
  label: string;
  sub?: string;
}

const LinkGrid = ({ title, items }: { title: string; items: LinkItem[] }) => (
  <section className="mt-14" aria-label={title}>
    <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
      <span className="gold-text">{title}</span>
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="glass-card rounded-xl p-4 flex items-start justify-between gap-3 hover:border-primary/50 transition-colors"
        >
          <span>
            <span className="block font-medium text-foreground">{item.label}</span>
            {item.sub && <span className="block text-sm text-muted-foreground">{item.sub}</span>}
          </span>
          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
        </Link>
      ))}
    </div>
  </section>
);

export default LinkGrid;
