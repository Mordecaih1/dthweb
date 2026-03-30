import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <img src="/logowhite.png" alt="DiscoveryTech Hub" className="w-auto h-24 md:h-36 object-contain drop-shadow-lg lg:-ml-4 relative -left-2" />
          <div className="relative z-10 -mt-2 md:-mt-8">
            <p className="text-blue-200 mb-1 font-medium">Where Technology Meets Creativity</p>
            <p className="text-blue-100 italic">Let’s build something extraordinary together.</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-blue-200">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/quote" className="hover:text-white transition-colors">Get Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6 font-jakarta">Contact Information</h4>
          <ul className="space-y-4 text-blue-200 mb-8">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>+2349047465802 <br/> +2348076854730</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <a href="mailto:info@discoverytechhub.com" className="hover:text-white transition-colors cursor-pointer">info@discoverytechhub.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>Abuja, Nigeria and Remote</span>
            </li>
          </ul>
          
          <h4 className="font-bold text-lg mb-4 font-jakarta">Connect with us</h4>
          <div className="flex items-center gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all shadow border border-blue-800/30">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:bg-black hover:text-white hover:-translate-y-1 transition-all shadow border border-blue-800/30">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all shadow border border-blue-800/30">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:bg-pink-600 hover:text-white hover:-translate-y-1 transition-all shadow border border-blue-800/30">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:bg-black hover:text-white hover:-translate-y-1 transition-all shadow border border-blue-800/30">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 0012.67-1.48V8.63a8.31 8.31 0 004.77 1.52v-3.4a4.85 4.85 0 01-2.85-1.06z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-blue-800 text-center text-sm text-blue-300">
        © {new Date().getFullYear()} DiscoveryTech Hub. All rights reserved.
      </div>
    </footer>
  );
}
