import { useState } from "react";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-[72px]">
      <section className="py-20 lg:py-24 bg-gradient-hero">
        <div className="container">
          <h1 className="text-[2rem] sm:text-[2.75rem] font-display font-bold text-primary-foreground tracking-[-0.025em] leading-[1.1]">Start a Project</h1>
          <p className="mt-5 text-primary-foreground/60 text-[15px] max-w-lg leading-[1.75] font-light">Tell us about your project and we'll get back to you within 24 hours with a plan.</p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-14 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-foreground mb-2 tracking-wide">Full Name *</label>
                    <Input required placeholder="John Doe" className="h-11" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-foreground mb-2 tracking-wide">Email *</label>
                    <Input required type="email" placeholder="john@company.com" className="h-11" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-foreground mb-2 tracking-wide">Company</label>
                    <Input placeholder="Company name" className="h-11" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-foreground mb-2 tracking-wide">Budget Range</label>
                    <select className="w-full h-11 rounded-lg border border-input bg-background px-3.5 text-[13.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Select range</option>
                      <option>$5K – $15K</option>
                      <option>$15K – $50K</option>
                      <option>$50K – $150K</option>
                      <option>$150K+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-2 tracking-wide">Project Type</label>
                  <select className="w-full h-11 rounded-lg border border-input bg-background px-3.5 text-[13.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Select type</option>
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>SaaS Product</option>
                    <option>API / Integration</option>
                    <option>Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-2 tracking-wide">Tell Us About Your Project *</label>
                  <Textarea required rows={6} placeholder="Describe your project, goals, and timeline..." className="text-[13.5px]" />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-accent text-accent-foreground font-medium text-[14px] tracking-wide px-8 h-12 hover:opacity-90 transition-opacity rounded-lg"
                >
                  {loading ? "Sending..." : <>Send Message <Send className="ml-2.5" size={15} /></>}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 space-y-10"
            >
              {[
                { icon: Mail, title: "Email Us", detail: "hello@zavixtech.com" },
                { icon: MapPin, title: "Location", detail: "Lagos, Nigeria — serving clients worldwide" },
                { icon: Clock, title: "Response Time", detail: "Within 24 hours on business days" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-brand flex items-center justify-center text-primary-foreground shrink-0">
                    <item.icon size={17} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[14.5px] text-foreground tracking-[-0.01em]">{item.title}</h3>
                    <p className="text-[13px] text-muted-foreground mt-1 leading-[1.6]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
