import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";

import projectFinflow from "@/assets/project-finflow.jpg";
import projectMedconnect from "@/assets/project-medconnect.jpg";
import projectLogitrack from "@/assets/project-logitrack.jpg";
import projectPaybridge from "@/assets/project-paybridge.jpg";
import projectEduplatform from "@/assets/project-eduplatform.jpg";
import projectGreencart from "@/assets/project-greencart.jpg";

const categories = ["All", "Web", "Mobile", "SaaS", "API"];

const projects = [
  { title: "FinFlow Dashboard", category: "SaaS", description: "Real-time financial analytics processing 2M+ daily transactions.", tags: ["React", "Node.js", "PostgreSQL", "AWS"], image: projectFinflow },
  { title: "MedConnect Mobile", category: "Mobile", description: "HIPAA-compliant telemedicine app for 10,000+ patients.", tags: ["React Native", "Firebase", "WebRTC"], image: projectMedconnect },
  { title: "LogiTrack Enterprise", category: "Web", description: "Fleet management system reducing costs by 35%.", tags: ["Next.js", "Python", "Redis", "GCP"], image: projectLogitrack },
  { title: "PayBridge API", category: "API", description: "Payment orchestration layer handling $50M+ monthly volume.", tags: ["Node.js", "Stripe", "PostgreSQL"], image: projectPaybridge },
  { title: "EduPlatform LMS", category: "SaaS", description: "Learning management system serving 25,000 students across 3 universities.", tags: ["React", "Django", "AWS", "Redis"], image: projectEduplatform },
  { title: "GreenCart Mobile", category: "Mobile", description: "Sustainable grocery delivery app with route optimization.", tags: ["Flutter", "Node.js", "MongoDB"], image: projectGreencart },
];

const Work = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <PageTransition>
    <div className="pt-[72px]">
      <section className="py-20 lg:py-24 bg-gradient-hero">
        <div className="container">
          <h1 className="text-[2rem] sm:text-[2.75rem] font-display font-bold text-primary-foreground tracking-[-0.025em] leading-[1.1]">Our Work</h1>
          <p className="mt-5 text-primary-foreground/60 text-[15px] max-w-lg leading-[1.75] font-light">Real projects. Measurable outcomes. Here's what we've built for companies like yours.</p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all ${
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
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 lg:p-7">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">{project.category}</span>
                    <h3 className="mt-2.5 font-display font-semibold text-[16px] text-foreground tracking-[-0.01em]">{project.title}</h3>
                    <p className="mt-2.5 text-[13.5px] text-muted-foreground leading-[1.7]">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-[11px] rounded-full bg-secondary text-secondary-foreground font-medium tracking-wide">{tag}</span>
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
    </PageTransition>
  );
};

export default Work;
