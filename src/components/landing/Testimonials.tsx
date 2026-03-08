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
    <section className="py-28 lg:py-32">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-accent">Testimonials</span>
          <h2 className="mt-4 text-[1.75rem] sm:text-[2.15rem] font-display font-bold text-foreground tracking-[-0.02em] leading-[1.15]">
            Trusted by Teams That Ship
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 lg:p-8 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-[14.5px] text-foreground leading-[1.75] mb-8 font-light">"{t.quote}"</p>
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-[11px] font-semibold tracking-wide text-primary-foreground">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-foreground">{t.name}</div>
                  <div className="text-[12px] text-muted-foreground mt-0.5">{t.role}</div>
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
