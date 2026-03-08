import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import zavixLogo from "@/assets/zavix-logo.jpeg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Careers", path: "/careers" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-xl shadow-card border-b border-border" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={zavixLogo} alt="Zavix Technologies" className="h-9 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-[13px] font-medium tracking-wide rounded-md transition-all duration-200 hover:text-foreground ${
                location.pathname === link.path
                  ? "text-primary"
                  : scrolled ? "text-muted-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <Button className="bg-gradient-accent text-accent-foreground font-medium text-[13px] tracking-wide px-6 h-10 hover:opacity-90 transition-opacity rounded-lg">
              Start a Project
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border">
          <nav className="container py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-[14px] font-medium tracking-wide rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-secondary/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3">
              <Button className="bg-gradient-accent text-accent-foreground font-medium tracking-wide w-full h-11 rounded-lg">
                Start a Project
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
