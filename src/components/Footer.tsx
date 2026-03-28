import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="bg-white/10 p-2 rounded-xl inline-block mb-4 backdrop-blur-sm">
            <Image src="/logo.png" alt="DiscoveryTech Hub" width={200} height={60} className="w-auto h-12 object-contain" />
          </div>
          <p className="text-blue-200 mb-6">Where Technology Meets Creativity</p>
          <p className="text-blue-100 mt-4 italic">Let’s build something extraordinary together.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-blue-200">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/quote" className="hover:text-white transition-colors">Get Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-blue-200">
            <li>info@discoverytechhub.com</li>
            <li>www.discoverytechhub.com</li>
            <li>Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-blue-800 text-center text-sm text-blue-300">
        © {new Date().getFullYear()} DiscoveryTech Hub. All rights reserved.
      </div>
    </footer>
  );
}
