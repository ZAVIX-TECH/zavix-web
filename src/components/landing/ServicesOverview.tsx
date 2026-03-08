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
    <section className="py-28 lg:py-32 bg-gradient-surface">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-accent">What We Do</span>
          <h2 className="mt-4 text-[1.75rem] sm:text-[2.15rem] font-display font-bold text-foreground tracking-[-0.02em] leading-[1.15]">
            End-to-End Engineering Services
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground leading-[1.75]">
            We partner with ambitious companies to design, build, and scale software that moves the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 lg:p-8 rounded-xl bg-card shadow-card border border-border hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-gradient-brand flex items-center justify-center text-primary-foreground mb-6">
                <service.icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-semibold text-[16px] text-foreground mb-2.5 tracking-[-0.01em]">{service.title}</h3>
              <p className="text-[13.5px] text-muted-foreground leading-[1.7]">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
