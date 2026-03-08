import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "AWS", "Docker", "Kubernetes", "Redis",
  "GraphQL", "React Native", "Tailwind CSS", "Firebase",
];

const TechStack = () => {
  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Technology</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-display font-bold text-foreground">
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium text-foreground shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
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
