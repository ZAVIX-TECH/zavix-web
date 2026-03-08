import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const jobs = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
  { title: "React Native Developer", team: "Mobile", location: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", team: "Infrastructure", location: "Remote", type: "Contract" },
  { title: "Product Designer", team: "Design", location: "Remote", type: "Full-time" },
];

const perks = ["Remote-first culture", "Flexible hours", "Learning budget", "Health coverage", "Equity options", "Team retreats"];

const Careers = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gradient-hero">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground">Join the Team</h1>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl">Build impactful software with a team that values craft, autonomy, and growth.</p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-12 bg-gradient-surface">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {perks.map((p) => (
              <span key={p} className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium text-foreground shadow-card">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all cursor-pointer group"
              >
                <div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-4 mt-1.5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase size={13} /> {job.team}</span>
                    <span className="flex items-center gap-1"><MapPin size={13} /> {job.location}</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-xl bg-secondary/50 border border-border text-center">
            <h3 className="font-display font-semibold text-foreground mb-2">Don't see the right role?</h3>
            <p className="text-sm text-muted-foreground mb-4">We're always looking for talented people. Drop us your CV and we'll keep you in mind.</p>
            <Button className="bg-gradient-brand text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              Send Your CV
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
