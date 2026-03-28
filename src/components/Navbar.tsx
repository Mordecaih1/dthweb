import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="block">
          <Image src="/logo.png" alt="DiscoveryTech Hub" width={200} height={60} className="w-auto h-10 object-contain" priority />
        </Link>
        <nav className="hidden md:flex gap-8 items-center font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/quote" className="px-5 py-2 bg-primary text-white rounded-full hover:bg-blue-900 transition-colors">Get Quote</Link>
        </nav>
      </div>
    </header>
  );
}
