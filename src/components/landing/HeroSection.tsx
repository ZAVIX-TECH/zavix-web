import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative z-10 py-32 lg:py-40">
        <div className="max-w-[680px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.12em] uppercase bg-accent/15 text-accent border border-accent/20 mb-8">
              Software Engineering & SaaS Products
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] xl:text-[4.5rem] font-display font-bold text-primary-foreground leading-[1.08] tracking-[-0.025em]"
          >
            We Build Software{" "}
            <span className="text-accent">That Scales</span>{" "}
            Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-[1.05rem] sm:text-[1.15rem] text-primary-foreground/60 max-w-[520px] leading-[1.7] font-light"
          >
            From MVPs to enterprise platforms — Zavix Technologies delivers custom software, SaaS products, and technical consulting that drives real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-accent text-accent-foreground font-medium text-[14px] tracking-wide px-8 h-[52px] hover:opacity-90 transition-opacity rounded-lg">
                Start a Project <ArrowRight className="ml-2.5" size={17} />
              </Button>
            </Link>
            <Link to="/work">
              <Button size="lg" variant="outline" className="border-primary-foreground/15 text-primary-foreground/80 hover:bg-primary-foreground/8 h-[52px] px-8 text-[14px] tracking-wide rounded-lg">
                <Play className="mr-2.5" size={15} /> View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-20 pt-10 border-t border-primary-foreground/10 flex flex-wrap gap-10 sm:gap-16"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "12+", label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[1.75rem] sm:text-[2rem] font-display font-bold text-accent tracking-tight">{stat.value}</div>
                <div className="text-[12px] tracking-[0.06em] uppercase text-primary-foreground/40 mt-1.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
