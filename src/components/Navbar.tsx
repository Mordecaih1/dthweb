import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="block max-w-[70%] z-50 hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="DiscoveryTech Hub" className="w-auto h-10 md:h-16 lg:h-24 object-contain transition-all" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
          <Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link to="/quote" className="px-5 py-2 bg-primary text-white rounded-full hover:bg-blue-900 transition-colors shadow-sm">Get Quote</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="md:hidden z-50 p-2 text-primary hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col pt-28 px-8 gap-6 text-xl font-medium shadow-2xl"
              role="dialog"
              aria-modal="true"
            >
              <Link to="/" className="py-3 border-b border-gray-100/50 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="py-3 border-b border-gray-100/50 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link to="/services" className="py-3 border-b border-gray-100/50 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/quote" className="py-4 mt-6 text-center bg-primary text-white rounded-full shadow-md hover:bg-blue-900 transition-colors" onClick={() => setIsOpen(false)}>
                Get Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
