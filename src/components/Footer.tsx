import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import zavixLogo from "@/assets/zavix-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <img src={zavixLogo} alt="Zavix Technologies" className="h-9 w-auto rounded bg-primary-foreground/90 p-1" />
            <p className="text-primary-foreground/60 text-[13.5px] leading-[1.75] max-w-[260px]">
              Engineering excellence for startups & enterprises. Custom software, SaaS products, and digital transformation.
            </p>
            <div className="flex gap-2.5">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 rounded-lg bg-primary-foreground/8 hover:bg-primary-foreground/15 transition-colors">
                  <Icon size={15} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-[13px] tracking-[0.06em] uppercase mb-5">Services</h4>
            <ul className="space-y-3 text-[13.5px] text-primary-foreground/60">
              {["Web Development", "Mobile Apps", "SaaS Development", "API & Integrations", "Consulting"].map((s) => (
                <li key={s}><Link to="/services" className="hover:text-primary-foreground transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-[13px] tracking-[0.06em] uppercase mb-5">Company</h4>
            <ul className="space-y-3 text-[13.5px] text-primary-foreground/60">
              {[
                { label: "About", path: "/about" },
                { label: "Portfolio", path: "/work" },
                { label: "Careers", path: "/careers" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.path}><Link to={l.path} className="hover:text-primary-foreground transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-[13px] tracking-[0.06em] uppercase mb-5">Get in Touch</h4>
            <div className="space-y-3.5 text-[13.5px] text-primary-foreground/60">
              <a href="mailto:hello@zavixtech.com" className="flex items-center gap-2.5 hover:text-primary-foreground transition-colors">
                <Mail size={14} strokeWidth={1.8} /> hello@zavixtech.com
              </a>
              <p>Lagos, Nigeria</p>
              <p>Available worldwide — remote-first team</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-primary-foreground/40 tracking-wide">
          <p>© {new Date().getFullYear()} Zavix Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-primary-foreground/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
