import { useState } from "react";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

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
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gradient-hero">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground">Start a Project</h1>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl">Tell us about your project and we'll get back to you within 24 hours with a plan.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <Input required placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <Input required type="email" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                    <Input placeholder="Company name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Budget Range</label>
                    <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground">
                      <option>Select range</option>
                      <option>$5K – $15K</option>
                      <option>$15K – $50K</option>
                      <option>$50K – $150K</option>
                      <option>$150K+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Project Type</label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground">
                    <option>Select type</option>
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>SaaS Product</option>
                    <option>API / Integration</option>
                    <option>Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Tell Us About Your Project *</label>
                  <Textarea required rows={5} placeholder="Describe your project, goals, and timeline..." />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-accent text-accent-foreground font-semibold px-8 h-12 hover:opacity-90 transition-opacity"
                >
                  {loading ? "Sending..." : <>Send Message <Send className="ml-2" size={16} /></>}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-8"
            >
              {[
                { icon: Mail, title: "Email Us", detail: "hello@zavixtech.com" },
                { icon: MapPin, title: "Location", detail: "Lagos, Nigeria — serving clients worldwide" },
                { icon: Clock, title: "Response Time", detail: "Within 24 hours on business days" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-brand flex items-center justify-center text-primary-foreground shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
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
