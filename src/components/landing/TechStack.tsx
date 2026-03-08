import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "AWS", "Docker", "Kubernetes", "Redis",
  "GraphQL", "React Native", "Tailwind CSS", "Firebase",
];

const TechStack = () => {
  return (
    <section className="py-24 lg:py-28 bg-gradient-surface">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-accent">Technology</span>
          <h2 className="mt-4 text-[1.5rem] sm:text-[1.85rem] font-display font-bold text-foreground tracking-[-0.02em]">
            Modern Stack, Proven Results
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {techs.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.035 }}
              className="px-5 py-2.5 rounded-full bg-card border border-border text-[13px] font-medium tracking-wide text-foreground shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
