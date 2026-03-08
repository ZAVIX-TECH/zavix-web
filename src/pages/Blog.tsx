import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  { title: "Why We Chose Next.js for Enterprise Clients", excerpt: "A deep dive into our decision framework for choosing React meta-frameworks.", tag: "Engineering", readTime: "8 min", date: "Feb 2026" },
  { title: "Building Multi-Tenant SaaS: Lessons from the Trenches", excerpt: "Patterns and pitfalls we've encountered building SaaS products at scale.", tag: "SaaS", readTime: "12 min", date: "Jan 2026" },
  { title: "The True Cost of Technical Debt", excerpt: "How to quantify tech debt and make the case for refactoring to stakeholders.", tag: "Strategy", readTime: "6 min", date: "Jan 2026" },
  { title: "API Design Principles That Scale", excerpt: "RESTful patterns, versioning strategies, and error handling best practices.", tag: "Engineering", readTime: "10 min", date: "Dec 2025" },
];

const Blog = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gradient-hero">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground">Blog & Insights</h1>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl">Technical deep dives, industry perspectives, and lessons learned from building software.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground">{post.tag}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock size={12} /> {post.readTime}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                  Read more <ArrowRight size={14} />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
