import { Shield, Zap, TrendingUp, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const differentiators = [
  { icon: Zap, title: "Speed to Market", desc: "Agile sprints and rapid prototyping get your product live faster without cutting corners." },
  { icon: Shield, title: "Enterprise-Grade Quality", desc: "Production-ready code with testing, security, and CI/CD baked in from day one." },
  { icon: TrendingUp, title: "Scalable Architecture", desc: "Systems designed to grow with you — from your first 100 users to your first million." },
  { icon: HeartHandshake, title: "True Partnership", desc: "We don't just write code. We become an extension of your team and share your mission." },
];

const WhyZavix = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Why Zavix</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
              Built Different. <br />Built to Last.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              We combine startup agility with enterprise reliability. Every project gets senior-level engineers, transparent communication, and a relentless focus on outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-secondary/50 border border-border"
              >
                <d.icon className="text-accent mb-3" size={24} />
                <h3 className="font-display font-semibold text-foreground mb-1.5">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZavix;
