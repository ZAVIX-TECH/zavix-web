import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import zavixLogo from "@/assets/zavix-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={zavixLogo} alt="Zavix Technologies" className="h-10 w-auto rounded bg-primary-foreground/90 p-1" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Engineering excellence for startups & enterprises. Custom software, SaaS products, and digital transformation.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              {["Web Development", "Mobile Apps", "SaaS Development", "API & Integrations", "Consulting"].map((s) => (
                <li key={s}><Link to="/services" className="hover:text-primary-foreground transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
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
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <a href="mailto:hello@zavixtech.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail size={14} /> hello@zavixtech.com
              </a>
              <p>Lagos, Nigeria</p>
              <p>Available worldwide — remote-first team</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Zavix Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary-foreground/80">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground/80">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
