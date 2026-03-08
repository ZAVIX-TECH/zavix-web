import { Target, Eye, Heart, Lightbulb, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Target, title: "Outcome-Driven", desc: "We measure success by your business results, not lines of code." },
  { icon: Eye, title: "Transparency", desc: "Open communication, honest timelines, no surprises." },
  { icon: Heart, title: "Craftsmanship", desc: "We take pride in writing clean, maintainable, production-ready code." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of the curve so your product does too." },
];

const team = [
  { name: "Chidi Okafor", role: "Founder & CEO", initials: "CO" },
  { name: "Amara Nwosu", role: "Head of Engineering", initials: "AN" },
  { name: "David Kim", role: "Lead Designer", initials: "DK" },
  { name: "Fatima Al-Hassan", role: "Product Manager", initials: "FA" },
];

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gradient-hero">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground">About Zavix</h1>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl">Engineering excellence, powered by people who care about your success.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Story</h2>
          <div className="prose text-muted-foreground leading-relaxed space-y-4">
            <p>Zavix Technologies was founded with a simple belief: great software should be accessible to every ambitious company, not just those with unlimited budgets.</p>
            <p>We combine deep technical expertise with a genuine commitment to partnership. Whether you're a startup shipping your first MVP or an enterprise modernizing legacy systems, we bring the same intensity and craftsmanship to every engagement.</p>
            <p>Today, we serve clients across 12+ countries, building everything from consumer-facing mobile apps to complex enterprise platforms.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-surface">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border shadow-card text-center"
              >
                <v.icon className="mx-auto text-accent mb-4" size={28} />
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-card border border-border shadow-card"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground font-display font-bold text-xl mb-4">
                  {member.initials}
                </div>
                <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                <a href="#" className="inline-block mt-3 text-primary hover:text-accent transition-colors">
                  <Linkedin size={18} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
