import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-gradient-hero overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center"
        >
          <div className="relative z-10 max-w-[540px] mx-auto">
            <h2 className="text-[1.65rem] sm:text-[2.15rem] font-display font-bold text-primary-foreground tracking-[-0.02em] leading-[1.15]">
              Ready to Build Something{" "}
              <span className="text-accent">Extraordinary</span>?
            </h2>
            <p className="mt-5 text-primary-foreground/60 text-[15px] max-w-md mx-auto leading-[1.75] font-light">
              Let's discuss your project. No commitment, no sales pitch — just a conversation about what's possible.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-accent text-accent-foreground font-medium text-[14px] tracking-wide px-8 h-[52px] hover:opacity-90 transition-opacity rounded-lg">
                  Start a Project <ArrowRight className="ml-2.5" size={17} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-primary-foreground/15 text-primary-foreground/80 hover:bg-primary-foreground/8 h-[52px] px-8 text-[14px] tracking-wide rounded-lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
