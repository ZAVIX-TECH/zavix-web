import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Web", "Mobile", "SaaS", "API"];

const projects = [
  { title: "FinFlow Dashboard", category: "SaaS", description: "Real-time financial analytics processing 2M+ daily transactions.", tags: ["React", "Node.js", "PostgreSQL", "AWS"], color: "from-blue-600/20 to-cyan-500/20" },
  { title: "MedConnect Mobile", category: "Mobile", description: "HIPAA-compliant telemedicine app for 10,000+ patients.", tags: ["React Native", "Firebase", "WebRTC"], color: "from-emerald-600/20 to-teal-500/20" },
  { title: "LogiTrack Enterprise", category: "Web", description: "Fleet management system reducing costs by 35%.", tags: ["Next.js", "Python", "Redis", "GCP"], color: "from-orange-600/20 to-amber-500/20" },
  { title: "PayBridge API", category: "API", description: "Payment orchestration layer handling $50M+ monthly volume.", tags: ["Node.js", "Stripe", "PostgreSQL"], color: "from-violet-600/20 to-purple-500/20" },
  { title: "EduPlatform LMS", category: "SaaS", description: "Learning management system serving 25,000 students across 3 universities.", tags: ["React", "Django", "AWS", "Redis"], color: "from-pink-600/20 to-rose-500/20" },
  { title: "GreenCart Mobile", category: "Mobile", description: "Sustainable grocery delivery app with route optimization.", tags: ["Flutter", "Node.js", "MongoDB"], color: "from-green-600/20 to-lime-500/20" },
];

const Work = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gradient-hero">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground">Our Work</h1>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl">Real projects. Measurable outcomes. Here's what we've built for companies like yours.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-gradient-brand text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <div className={`h-44 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <ExternalLink className="text-foreground/20 group-hover:text-foreground/40 transition-colors" size={44} />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{project.category}</span>
                    <h3 className="mt-2 font-display font-semibold text-lg text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Work;
