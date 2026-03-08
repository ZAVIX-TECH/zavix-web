import { Code2, Smartphone, Cloud, Plug, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Code2, title: "Web Development", desc: "High-performance web applications built with modern frameworks and best practices." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile experiences that users love." },
  { icon: Cloud, title: "SaaS Development", desc: "Scalable SaaS products from architecture to launch and beyond." },
  { icon: Plug, title: "API & Integrations", desc: "Robust APIs and third-party integrations that connect your systems." },
  { icon: Users, title: "Consulting", desc: "Strategic technical guidance to align technology with business goals." },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-gradient-surface">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">What We Do</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            End-to-End Engineering Services
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We partner with ambitious companies to design, build, and scale software that moves the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-xl bg-card shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center text-primary-foreground mb-5">
                <service.icon size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
