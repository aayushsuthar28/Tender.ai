import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import tenderMark from "@/assets/tender-mark.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "For Institutions", href: "/institutions" },
  { name: "For Vendors", href: "/vendors" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Verification & Docs", href: "/verification" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled || mobileMenuOpen
          ? "border-b border-primary-foreground/10 bg-primary/95 shadow-lg backdrop-blur-xl"
          : "border-b border-transparent bg-background/20 backdrop-blur-sm"
      )}
    >
      <nav className="container-wide mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="Tender.AI home">
          <img
            src={tenderMark}
            alt=""
            className="h-10 w-10 object-contain"
            width={283}
            height={283}
            loading="eager"
          />
          <span
            className={cn(
              "text-xl font-bold transition-colors duration-300",
              isScrolled || mobileMenuOpen ? "text-primary-foreground" : "text-primary"
            )}
          >
            Tender
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                location.pathname === item.href
                  ? isScrolled
                    ? "bg-primary-foreground/15 text-primary-foreground"
                    : "bg-secondary text-primary"
                  : isScrolled
                    ? "text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className={cn(
              "btn-outline py-2 text-sm",
              isScrolled && "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            )}
          >
            Book a Demo
          </Link>
          <Link to="/contact" className="btn-accent text-sm py-2">
            Post an RFQ
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={cn(
            "rounded-lg p-2 transition-colors lg:hidden",
            isScrolled || mobileMenuOpen ? "hover:bg-primary-foreground/10" : "hover:bg-secondary"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-primary-foreground" />
          ) : (
            <Menu className={cn("h-6 w-6", isScrolled ? "text-primary-foreground" : "text-foreground")} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-primary-foreground/10 bg-primary lg:hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                    location.pathname === item.href
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-outline w-full border-primary-foreground text-center text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Book a Demo
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-accent w-full text-center"
                >
                  Post an RFQ
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
