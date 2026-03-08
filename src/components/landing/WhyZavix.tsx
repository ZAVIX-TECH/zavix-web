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
    <section className="py-28 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-accent">Why Zavix</span>
            <h2 className="mt-4 text-[1.75rem] sm:text-[2.15rem] font-display font-bold text-foreground tracking-[-0.02em] leading-[1.15]">
              Built Different. <br />Built to Last.
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-[1.75] max-w-md">
              We combine startup agility with enterprise reliability. Every project gets senior-level engineers, transparent communication, and a relentless focus on outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-secondary/40 border border-border"
              >
                <d.icon className="text-accent mb-4" size={22} strokeWidth={1.8} />
                <h3 className="font-display font-semibold text-[15px] text-foreground mb-2 tracking-[-0.01em]">{d.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-[1.7]">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZavix;
