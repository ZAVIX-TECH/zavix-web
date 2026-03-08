import { useState } from "react";
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
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex items-center gap-2">
          <img src={zavixLogo} alt="Zavix Technologies" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact">
            <Button className="bg-gradient-accent text-accent-foreground font-semibold px-6 hover:opacity-90 transition-opacity">
              Start a Project
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button className="bg-gradient-accent text-accent-foreground font-semibold w-full mt-2">
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
