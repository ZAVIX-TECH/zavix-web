import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-gradient-hero overflow-hidden p-12 md:p-16 text-center"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground">
              Ready to Build Something{" "}
              <span className="text-accent">Extraordinary</span>?
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg max-w-lg mx-auto">
              Let's discuss your project. No commitment, no sales pitch — just a conversation about what's possible.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-accent text-accent-foreground font-semibold px-8 h-12 hover:opacity-90 transition-opacity">
                  Start a Project <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
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
