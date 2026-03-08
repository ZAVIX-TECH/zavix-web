import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const jobs = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
  { title: "React Native Developer", team: "Mobile", location: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", team: "Infrastructure", location: "Remote", type: "Contract" },
  { title: "Product Designer", team: "Design", location: "Remote", type: "Full-time" },
];

const perks = ["Remote-first culture", "Flexible hours", "Learning budget", "Health coverage", "Equity options", "Team retreats"];

const Careers = () => {
  return (
    <div className="pt-[72px]">
      <section className="py-20 lg:py-24 bg-gradient-hero">
        <div className="container">
          <h1 className="text-[2rem] sm:text-[2.75rem] font-display font-bold text-primary-foreground tracking-[-0.025em] leading-[1.1]">Join the Team</h1>
          <p className="mt-5 text-primary-foreground/60 text-[15px] max-w-lg leading-[1.75] font-light">Build impactful software with a team that values craft, autonomy, and growth.</p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-14 bg-gradient-surface">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {perks.map((p) => (
              <span key={p} className="px-5 py-2.5 rounded-full bg-card border border-border text-[13px] font-medium tracking-wide text-foreground shadow-card">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-[1.35rem] sm:text-[1.65rem] font-display font-bold text-foreground mb-10 tracking-[-0.02em]">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center justify-between p-6 lg:p-7 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all cursor-pointer group"
              >
                <div>
                  <h3 className="font-display font-semibold text-[14.5px] text-foreground group-hover:text-primary transition-colors tracking-[-0.01em]">{job.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-[12.5px] text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Briefcase size={12} strokeWidth={1.8} /> {job.team}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={12} strokeWidth={1.8} /> {job.location}</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 lg:p-10 rounded-xl bg-secondary/40 border border-border text-center">
            <h3 className="font-display font-semibold text-[15px] text-foreground mb-2.5 tracking-[-0.01em]">Don't see the right role?</h3>
            <p className="text-[13px] text-muted-foreground mb-5 leading-[1.7]">We're always looking for talented people. Drop us your CV and we'll keep you in mind.</p>
            <Button className="bg-gradient-brand text-primary-foreground font-medium text-[13.5px] tracking-wide hover:opacity-90 transition-opacity rounded-lg px-6 h-10">
              Send Your CV
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
