import { Link } from "react-router-dom";
import { Code2, Smartphone, Cloud, Plug, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gradient-hero">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground">Our Services</h1>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl">Full-spectrum engineering services for companies that take technology seriously.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center p-8 rounded-xl bg-card border border-border shadow-card"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center text-primary-foreground mb-4">
                  <service.icon size={22} />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground">{service.title}</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="text-accent shrink-0" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gradient-surface">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">How We Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Discovery & Strategy", "Design & Architecture", "Development & Testing", "Launch & Support"].map((step, i) => (
              <div key={step} className="text-center p-6 rounded-xl bg-card border border-border shadow-card">
                <div className="w-10 h-10 rounded-full bg-gradient-brand text-primary-foreground flex items-center justify-center font-display font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-display font-semibold text-foreground">{step}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact">
              <Button className="bg-gradient-accent text-accent-foreground font-semibold px-8 h-12 hover:opacity-90 transition-opacity">
                Get Started <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
