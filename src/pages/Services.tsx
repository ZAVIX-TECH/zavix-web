import { Link } from "react-router-dom";
import { Code2, Smartphone, Cloud, Plug, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const services = [
  {
    icon: Code2, title: "Web Development",
    desc: "Custom web applications that are fast, accessible, and built to scale.",
    features: ["Single-page & multi-page apps", "Progressive Web Apps (PWAs)", "E-commerce platforms", "Admin dashboards & portals"],
  },
  {
    icon: Smartphone, title: "Mobile Apps",
    desc: "Native and cross-platform mobile experiences your users will love.",
    features: ["iOS & Android native", "React Native cross-platform", "Offline-first architecture", "App Store optimization"],
  },
  {
    icon: Cloud, title: "SaaS Development",
    desc: "End-to-end SaaS product development from concept to scale.",
    features: ["Multi-tenant architecture", "Subscription & billing systems", "Usage analytics", "CI/CD & DevOps"],
  },
  {
    icon: Plug, title: "API & Integrations",
    desc: "Robust APIs and seamless third-party integrations.",
    features: ["RESTful & GraphQL APIs", "Payment gateway integration", "CRM & ERP connectors", "Webhook orchestration"],
  },
  {
    icon: Users, title: "Consulting",
    desc: "Strategic technical guidance to accelerate your roadmap.",
    features: ["Architecture reviews", "Tech stack selection", "Team augmentation", "Technical due diligence"],
  },
];

const Services = () => {
  return (
    <div className="pt-[72px]">
      <section className="py-20 lg:py-24 bg-gradient-hero">
        <div className="container">
          <h1 className="text-[2rem] sm:text-[2.75rem] font-display font-bold text-primary-foreground tracking-[-0.025em] leading-[1.1]">Our Services</h1>
          <p className="mt-5 text-primary-foreground/60 text-[15px] max-w-lg leading-[1.75] font-light">Full-spectrum engineering services for companies that take technology seriously.</p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-10 rounded-xl bg-card border border-border shadow-card"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-gradient-brand flex items-center justify-center text-primary-foreground mb-5">
                  <service.icon size={20} strokeWidth={1.8} />
                </div>
                <h2 className="text-[1.35rem] font-display font-bold text-foreground tracking-[-0.015em]">{service.title}</h2>
                <p className="mt-3 text-[14px] text-muted-foreground leading-[1.75]">{service.desc}</p>
              </div>
              <ul className="space-y-3.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[13.5px] text-foreground">
                    <CheckCircle className="text-accent shrink-0" size={15} strokeWidth={1.8} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-24 bg-gradient-surface">
        <div className="container">
          <h2 className="text-[1.5rem] sm:text-[1.85rem] font-display font-bold text-foreground text-center mb-14 tracking-[-0.02em]">How We Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {["Discovery & Strategy", "Design & Architecture", "Development & Testing", "Launch & Support"].map((step, i) => (
              <div key={step} className="text-center p-7 rounded-xl bg-card border border-border shadow-card">
                <div className="w-10 h-10 rounded-full bg-gradient-brand text-primary-foreground flex items-center justify-center font-display font-bold text-[14px] mx-auto mb-5">
                  {i + 1}
                </div>
                <h3 className="font-display font-semibold text-[14.5px] text-foreground tracking-[-0.01em]">{step}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-gradient-accent text-accent-foreground font-medium text-[14px] tracking-wide px-8 h-12 hover:opacity-90 transition-opacity rounded-lg">
                Get Started <ArrowRight className="ml-2.5" size={17} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
