import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FinFlow Dashboard",
    category: "SaaS",
    description: "Real-time financial analytics platform processing 2M+ transactions daily for a fintech startup.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "from-blue-600/20 to-cyan-500/20",
  },
  {
    title: "MedConnect Mobile",
    category: "Mobile",
    description: "HIPAA-compliant telemedicine app connecting 10,000+ patients with healthcare providers.",
    tags: ["React Native", "Firebase", "WebRTC"],
    color: "from-emerald-600/20 to-teal-500/20",
  },
  {
    title: "LogiTrack Enterprise",
    category: "Web",
    description: "Fleet management system reducing operational costs by 35% for a logistics company.",
    tags: ["Next.js", "Python", "Redis", "GCP"],
    color: "from-orange-600/20 to-amber-500/20",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-gradient-surface">
      <div className="container">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Our Work</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
              Featured Projects
            </h2>
          </div>
          <Link to="/work" className="hidden sm:block">
            <Button variant="ghost" className="text-primary font-medium">
              View All <ArrowRight className="ml-1" size={16} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <ExternalLink className="text-foreground/20 group-hover:text-foreground/40 transition-colors" size={48} />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{project.category}</span>
                <h3 className="mt-2 font-display font-semibold text-lg text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/work">
            <Button variant="ghost" className="text-primary font-medium">
              View All Projects <ArrowRight className="ml-1" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
