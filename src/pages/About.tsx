import { Target, Eye, Heart, Lightbulb, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

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
    <PageTransition>
    <div className="pt-[72px]">
      <section className="py-20 lg:py-24 bg-gradient-hero">
        <div className="container">
          <h1 className="text-[2rem] sm:text-[2.75rem] font-display font-bold text-primary-foreground tracking-[-0.025em] leading-[1.1]">About Zavix</h1>
          <p className="mt-5 text-primary-foreground/60 text-[15px] max-w-lg leading-[1.75] font-light">Engineering excellence, powered by people who care about your success.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-[1.5rem] sm:text-[1.85rem] font-display font-bold text-foreground mb-8 tracking-[-0.02em]">Our Story</h2>
          <div className="text-[15px] text-muted-foreground leading-[1.85] space-y-5">
            <p>Zavix Technologies was founded with a simple belief: great software should be accessible to every ambitious company, not just those with unlimited budgets.</p>
            <p>We combine deep technical expertise with a genuine commitment to partnership. Whether you're a startup shipping your first MVP or an enterprise modernizing legacy systems, we bring the same intensity and craftsmanship to every engagement.</p>
            <p>Today, we serve clients across 12+ countries, building everything from consumer-facing mobile apps to complex enterprise platforms.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-gradient-surface">
        <div className="container">
          <h2 className="text-[1.5rem] sm:text-[1.85rem] font-display font-bold text-foreground text-center mb-14 tracking-[-0.02em]">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-7 rounded-xl bg-card border border-border shadow-card text-center"
              >
                <v.icon className="mx-auto text-accent mb-5" size={24} strokeWidth={1.8} />
                <h3 className="font-display font-semibold text-[15px] text-foreground mb-2 tracking-[-0.01em]">{v.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-[1.7]">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <h2 className="text-[1.5rem] sm:text-[1.85rem] font-display font-bold text-foreground text-center mb-14 tracking-[-0.02em]">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-7 rounded-xl bg-card border border-border shadow-card"
              >
                <div className="w-[72px] h-[72px] mx-auto rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground font-display font-bold text-[18px] tracking-wide mb-5">
                  {member.initials}
                </div>
                <h3 className="font-display font-semibold text-[14.5px] text-foreground tracking-[-0.01em]">{member.name}</h3>
                <p className="text-[12.5px] text-muted-foreground mt-1.5">{member.role}</p>
                <a href="#" className="inline-block mt-4 text-primary hover:text-accent transition-colors">
                  <Linkedin size={16} strokeWidth={1.8} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};

export default About;
