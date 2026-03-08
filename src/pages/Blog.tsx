import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const posts = [
  { title: "Why We Chose Next.js for Enterprise Clients", excerpt: "A deep dive into our decision framework for choosing React meta-frameworks.", tag: "Engineering", readTime: "8 min", date: "Feb 2026" },
  { title: "Building Multi-Tenant SaaS: Lessons from the Trenches", excerpt: "Patterns and pitfalls we've encountered building SaaS products at scale.", tag: "SaaS", readTime: "12 min", date: "Jan 2026" },
  { title: "The True Cost of Technical Debt", excerpt: "How to quantify tech debt and make the case for refactoring to stakeholders.", tag: "Strategy", readTime: "6 min", date: "Jan 2026" },
  { title: "API Design Principles That Scale", excerpt: "RESTful patterns, versioning strategies, and error handling best practices.", tag: "Engineering", readTime: "10 min", date: "Dec 2025" },
];

const Blog = () => {
  return (
    <PageTransition>
    <div className="pt-[72px]">
      <section className="py-20 lg:py-24 bg-gradient-hero">
        <div className="container">
          <h1 className="text-[2rem] sm:text-[2.75rem] font-display font-bold text-primary-foreground tracking-[-0.025em] leading-[1.1]">Blog & Insights</h1>
          <p className="mt-5 text-primary-foreground/60 text-[15px] max-w-lg leading-[1.75] font-light">Technical deep dives, industry perspectives, and lessons learned from building software.</p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-7 lg:p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-3 py-1 text-[10px] font-semibold tracking-[0.08em] uppercase rounded-full bg-secondary text-secondary-foreground">{post.tag}</span>
                  <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Clock size={11} /> {post.readTime}</span>
                  <span className="text-[11px] text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-[1.1rem] font-display font-bold text-foreground group-hover:text-primary transition-colors tracking-[-0.01em] leading-[1.3]">{post.title}</h2>
                <p className="mt-3 text-[13.5px] text-muted-foreground leading-[1.7]">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-[13px] font-medium text-primary group-hover:text-accent transition-colors tracking-wide">
                  Read more <ArrowRight size={13} />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};

export default Blog;
