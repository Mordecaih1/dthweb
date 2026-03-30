import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="block max-w-[70%]">
          <img src="/logo.png" alt="DiscoveryTech Hub" className="w-auto h-10 md:h-16 lg:h-24 object-contain transition-all" />
        </Link>
        <nav className="hidden md:flex gap-8 items-center font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
          <Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link to="/quote" className="px-5 py-2 bg-primary text-white rounded-full hover:bg-blue-900 transition-colors">Get Quote</Link>
        </nav>
      </div>
    </header>
  );
}
