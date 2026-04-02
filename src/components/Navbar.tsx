import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="DiscoveryTech Hub" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors hover:text-blue-600 ${
                location.pathname === link.to ? "text-blue-600 font-semibold" : "text-slate-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/quote"
            className="px-5 py-2 bg-primary text-white rounded-full text-sm hover:bg-blue-900 transition-colors shadow-sm"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden z-[60] p-2 text-primary hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed top-16 left-0 right-0 bg-white border-t border-slate-100 shadow-xl z-50 px-6 py-4"
          >
            {/* Nav Links */}
            <nav className="flex flex-col">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center py-4 text-base font-medium border-b border-slate-100 transition-colors hover:text-blue-600 ${
                      location.pathname === link.to
                        ? "text-blue-600"
                        : "text-slate-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="pt-4"
              >
                <Link
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 text-center bg-primary text-white rounded-full font-semibold text-base hover:bg-blue-900 transition-colors shadow-md"
                >
                  Get Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}