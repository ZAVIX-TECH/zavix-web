import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Zavix transformed our idea into a production-ready platform in just 8 weeks. Their technical depth and speed are unmatched.",
    name: "Sarah Chen",
    role: "CTO, FinFlow",
    avatar: "SC",
  },
  {
    quote: "Working with Zavix felt like having a senior engineering team on-demand. They understood our enterprise requirements from day one.",
    name: "Michael Okonkwo",
    role: "VP Engineering, LogiTrack",
    avatar: "MO",
  },
  {
    quote: "The team delivered a complex mobile app that our users actually love. Clear communication and zero drama throughout.",
    name: "Priya Sharma",
    role: "Founder, MedConnect",
    avatar: "PS",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Trusted by Teams That Ship
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-xs font-semibold text-primary-foreground">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
